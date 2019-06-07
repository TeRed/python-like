const Python3Visitor = require('../target/Python3Visitor').Python3Visitor;

class Visitor extends Python3Visitor {

  visitChildren(ctx) {
    return ctx.children
      .map(it => this.visit(it))
      .map(it => it.trim())
      .join('');
  }

  // visitFile_input(ctx) {}

  visitFuncdef(ctx) {
    const [def, name, params, colon, suite] = ctx.children;
    return 'function ' + name + this.visit(params) + '{' + this.visit(suite) + '}';
  }

  // visitParameters(ctx) {}

  // visitArgslist(ctx) {}

  // visitStmt(ctx) {}

  visitSimple_stmt(ctx) {
    const smpl = this.visitChildren(ctx);
    return smpl.endsWith(';') ? smpl : smpl + ';';
  }

  visitSmall_stmt(ctx) {
    return ctx.children.map(it => this.visit(it)).join(' ');
  }

  visitExpr_stmt(ctx) {
    const [variable, sign, ...rest] = ctx.children;

    const expr = this.visitChildren(ctx);

    if(sign && sign.getText() === '=') {
      return 'var ' + expr;
    }

    return expr;
  }

  // visitAugassign(ctx) {}

  // visitCompound_stmt(ctx) {}

  visitIf_stmt(ctx) {
    let code = '';
    const [ifStmt, test, colon, suite, ...optional] = ctx.children;
    code = 'if(' + this.visit(test) + '){' + this.visit(suite) + '}';


    if (optional.length % 2 === 0) { // Only elifs
      for (let i = 0; i < optional.length; i += 4) {
        code += 'else if(' + this.visit(optional[i + 1]) + '){' + this.visit(optional[i + 3]) + '}';
      }
    }
    else if (optional.length === 3) { //Only else
      code += ['else', '{', this.visit(optional[2]), '}'].join('');
    }
    else {
      for (let i = 0; optional.length - i > 3; i += 4) {
        code += 'else if(' + this.visit(optional[i + 1]) + '){' + this.visit(optional[i + 3]) + '}';
      }
      code += ['else', '{', this.visit(optional[optional.length - 1]), '}'].join('');
    }

    return code;
  }

  visitWhile_stmt(ctx) {
    const [whileStmt, test, colon, suite] = ctx.children;

    if (test.getText().endsWith(')'))
      var testVisited = this.visit(test);
    else
      var testVisited = `(${this.visit(test)})`;

    return [whileStmt, testVisited, '{', this.visit(suite), '}'].join('');
  }

  // visitSuite(ctx) {}

  // visitTest(ctx) {}

  // visitOr_test(ctx) {}

  // visitAnd_test(ctx) {}

  visitNot_test(ctx) {
    const children = ctx.children;
    if (children.length == 1) {
      return this.visit(children[0]);
    } else {
      return ['!', '(', this.visit(children[1]), ')'].join('');
    }
  }

  // visitComparison(ctx) {}

  // visitComp_op(ctx) {}

  // visitExpr(ctx) {}

  // visitTerm(ctx) {}

  // visitFactor(ctx) {}

  // visitPower(ctx) {}

  // visitAtom(ctx) {}

  // visitTestlist(ctx) {}

  // visitTrailer(ctx) {}

  // visitNumber(ctx) {}

  visitTerminal(ctx) {
    const map = new Map();
    map.set('print', 'console.log');
    map.set('pass', 'console.log("pass")');
    map.set('<EOF>', '');
    map.set('and', '&&');
    map.set('or', '||');
    map.set('True', 'true');
    map.set('False', 'false');

    const terminal = ctx.getText();
    if (map.has(terminal)) return map.get(terminal);
    else return terminal;
  }
}

module.exports = new Visitor();
