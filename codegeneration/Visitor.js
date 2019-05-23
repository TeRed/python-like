const path = require('path');
const Python3Visitor = require('../lib/Python3Visitor').Python3Visitor;

const {
  SemanticArgumentCountMismatchError
} = require(path.resolve('error', 'helper'));

class Visitor extends Python3Visitor {

  visitChildren(ctx) {
    let code = '';

    for (let i = 0; i < ctx.getChildCount(); i++) {
      const add = this.visit(ctx.getChild(i));
      code += add;
    }

    return code.trim();
  }

  visitWhile_stmt(ctx) {
    const [whileStmt, test, colon, suite] = ctx.children;

    if (test.getText().endsWith(')'))
      var testVisited = this.visit(test);
    else
      var testVisited = `(${this.visit(test)})`;

    return [whileStmt, testVisited, '{', this.visit(suite), '}'].join('');
  }

  visitFuncdef(ctx) {
    const [def, name, params, colon, suite] = ctx.children;
    return 'function ' + name + this.visit(params) + '{' + this.visit(suite) + '}';
  }

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

  visitSmall_stmt(ctx) {
    return ctx.children.map(it => this.visit(it)).join(' ');
  }

  visitSimple_stmt(ctx) {
    const smpl = this.visitChildren(ctx);
    return smpl.endsWith(';') ? smpl : smpl + ';';
  }

  visitTerminal(ctx) {
    const map = new Map();
    map.set('print', 'console.log');
    map.set('pass', 'null');
    map.set('<EOF>', '');

    const terminal = ctx.getText();
    if (map.has(terminal)) return map.get(terminal);
    else return terminal;
  }
}

module.exports = Visitor;
