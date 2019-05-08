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

  visitTerminal(ctx) {
    console.log('Terminal: ' + ctx.getText());
    return ctx.getText();
  }
}

module.exports = Visitor;
