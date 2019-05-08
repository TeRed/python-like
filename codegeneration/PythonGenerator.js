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
            // if(add == 'NEWLINE') {
            //     continue;
            // }
            code += add;
        }

        return code.trim();
  }

  // visitStmt(ctx) {}

  // Visit a parse tree produced by Python3Parser#simple_stmt.
  visitSimple_stmt(ctx) {
      ctx.children.pop();
      const children = this.visitChildren(ctx);

      return children;
      
    //   if(!children.endsWith(';')) return children + ';';
  }


  // Visit a parse tree produced by Python3Parser#expr_stmt.
  visitExpr_stmt(ctx) {
    return this.visitChildren(ctx) + ';';
  }


  // Visit a parse tree produced by Python3Parser#compound_stmt.
  // Python3Visitor.prototype.visitCompound_stmt = function(ctx) {
  //   return this.visitChildren(ctx);
  // };


  // Visit a parse tree produced by Python3Parser#if_stmt.
//   visitIf_stmt(ctx) {
//     return this.visitChildren(ctx);
//   }



  // Visit a parse tree produced by Python3Parser#while_stmt.
  visitWhile_stmt(ctx) {
    const whileStr =
        `while (${this.visit(ctx.getChild(1))}) {${this.visit(ctx.getChild(3))}}`;
    return whileStr;
  }


  // Visit a parse tree produced by Python3Parser#suite.
  visitSuite(ctx) {
        ctx.children.shift();
        ctx.children.shift();
        ctx.children.pop();
        return this.visitChildren(ctx);
  }


  // Visit a parse tree produced by Python3Parser#test.
  // Python3Visitor.prototype.visitTest = function(ctx) {
  //   return this.visitChildren(ctx);
  // };


  // Visit a parse tree produced by Python3Parser#comp_op.
  visitComp_op(ctx) {
    const op = ctx.getText();
    if(op === '<>') return '!=';
    return op;
  }


  // Visit a parse tree produced by Python3Parser#atom.
  visitAtom(ctx) {
    return ctx.getText();
  }


  // Visit a parse tree produced by Python3Parser#encoding_decl.
  // Python3Visitor.prototype.visitEncoding_decl = function(ctx) {
  //   return this.visitChildren(ctx);
  // };

  visitTerminal(ctx) {
      return ctx.getText();
    // console.log('terminal', ctx.getText())
    // const decode = [
    //   {
    //     from: 'INDENT',
    //     to: '\t'
    //   },
    //   {
    //     from: 'NEWLINE',
    //     to: `
    //     `
    //   },
    //   {
    //     from: 'ENDMARKER',
    //     to: `}`
    //   },
    //   {
    //     from: 'DEDENT',
    //     to: '\n'
    //   },
    //   {
    //     from: ':',
    //     to: '{'
    //   },
    // ];

    // const terminal = ctx.getText();
    // const decoded = decode.filter(it => it.from === terminal);

    // if(decoded.length > 0) return '';

    // return terminal;

  }
}

module.exports = Visitor;
