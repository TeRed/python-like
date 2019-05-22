const path = require('path');
const Python3Visitor = require('../lib/Python3Visitor').Python3Visitor;

const {
  SemanticArgumentCountMismatchError
} = require(path.resolve('error', 'helper'));

class Visitor extends Python3Visitor {

  visitChildren(ctx) {
    // console.log(ctx.getText());
    let code = '';

    for (let i = 0; i < ctx.getChildCount(); i++) {
      const add = this.visit(ctx.getChild(i));
      code += add;
    }

    return code.trim();
  }

  visitFuncdef(ctx) {
    const [def, name, params, colon, suite] = ctx.children;
    return 'function ' + name + this.visit(params) + '{' + this.visit(suite) + '}';
  }

  // /// if_stmt: 'if' test ':' suite ('elif' test ':' suite)* ['else' ':' suite]
  // if_stmt
  //   : IF test ':' suite(ELIF test ':' suite)* (ELSE ':' suite)?
  // ;

  visitIf_stmt(ctx) {
    let code = '';
    const [ifStmt, test, colon, suite, ...optional] = ctx.children;
    code = 'if(' + this.visit(test) + '){' + this.visit(suite) + '}';

    if (optional.length % 2 !== 0) {
      var elseStmt = optional.slice(-3);

      var elifStmt = optional.splice(-3, 3);

      console.log('Elif:', elifStmt);
    } else if (optional.length > 0) {
      var elifStmt = optional;
    }

    if (elifStmt) {
      for (let child = 0; child < elifStmt.length; child += 4) {
        code += 'else if(' + this.visit(elifStmt[child + 1]) + '){' + this.visit(elifStmt[child + 3]) + '}';
      }
    }

    if (elseStmt) {
      code += 'else' + '{' + this.visit(elseStmt[2]) + '}';
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
    const temrinal = ctx.getText();
    if (temrinal === 'print') return 'console.log';

    return temrinal;
  }
}

module.exports = Visitor;
