// Generated from grammars/Python3.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by Python3Parser.

function Python3Visitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

Python3Visitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
Python3Visitor.prototype.constructor = Python3Visitor;

// Visit a parse tree produced by Python3Parser#file_input.
Python3Visitor.prototype.visitFile_input = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python3Parser#funcdef.
Python3Visitor.prototype.visitFuncdef = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python3Parser#parameters.
Python3Visitor.prototype.visitParameters = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python3Parser#argslist.
Python3Visitor.prototype.visitArgslist = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python3Parser#stmt.
Python3Visitor.prototype.visitStmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python3Parser#simple_stmt.
Python3Visitor.prototype.visitSimple_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python3Parser#small_stmt.
Python3Visitor.prototype.visitSmall_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python3Parser#expr_stmt.
Python3Visitor.prototype.visitExpr_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python3Parser#augassign.
Python3Visitor.prototype.visitAugassign = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python3Parser#compound_stmt.
Python3Visitor.prototype.visitCompound_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python3Parser#if_stmt.
Python3Visitor.prototype.visitIf_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python3Parser#while_stmt.
Python3Visitor.prototype.visitWhile_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python3Parser#for_stmt.
Python3Visitor.prototype.visitFor_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python3Parser#suite.
Python3Visitor.prototype.visitSuite = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python3Parser#test.
Python3Visitor.prototype.visitTest = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python3Parser#or_test.
Python3Visitor.prototype.visitOr_test = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python3Parser#and_test.
Python3Visitor.prototype.visitAnd_test = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python3Parser#not_test.
Python3Visitor.prototype.visitNot_test = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python3Parser#comparison.
Python3Visitor.prototype.visitComparison = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python3Parser#comp_op.
Python3Visitor.prototype.visitComp_op = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python3Parser#expr.
Python3Visitor.prototype.visitExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python3Parser#term.
Python3Visitor.prototype.visitTerm = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python3Parser#factor.
Python3Visitor.prototype.visitFactor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python3Parser#power.
Python3Visitor.prototype.visitPower = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python3Parser#atom.
Python3Visitor.prototype.visitAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python3Parser#testlist.
Python3Visitor.prototype.visitTestlist = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python3Parser#trailer.
Python3Visitor.prototype.visitTrailer = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python3Parser#dictorsetmaker.
Python3Visitor.prototype.visitDictorsetmaker = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by Python3Parser#number.
Python3Visitor.prototype.visitNumber = function(ctx) {
  return this.visitChildren(ctx);
};



exports.Python3Visitor = Python3Visitor;