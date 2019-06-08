// Generated from grammars/PythonLike.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by PythonLikeParser.

function PythonLikeVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

PythonLikeVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
PythonLikeVisitor.prototype.constructor = PythonLikeVisitor;

// Visit a parse tree produced by PythonLikeParser#file_input.
PythonLikeVisitor.prototype.visitFile_input = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonLikeParser#funcdef.
PythonLikeVisitor.prototype.visitFuncdef = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonLikeParser#parameters.
PythonLikeVisitor.prototype.visitParameters = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonLikeParser#argslist.
PythonLikeVisitor.prototype.visitArgslist = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonLikeParser#stmt.
PythonLikeVisitor.prototype.visitStmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonLikeParser#simple_stmt.
PythonLikeVisitor.prototype.visitSimple_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonLikeParser#small_stmt.
PythonLikeVisitor.prototype.visitSmall_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonLikeParser#expr_stmt.
PythonLikeVisitor.prototype.visitExpr_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonLikeParser#augassign.
PythonLikeVisitor.prototype.visitAugassign = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonLikeParser#compound_stmt.
PythonLikeVisitor.prototype.visitCompound_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonLikeParser#if_stmt.
PythonLikeVisitor.prototype.visitIf_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonLikeParser#while_stmt.
PythonLikeVisitor.prototype.visitWhile_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonLikeParser#for_stmt.
PythonLikeVisitor.prototype.visitFor_stmt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonLikeParser#suite.
PythonLikeVisitor.prototype.visitSuite = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonLikeParser#test.
PythonLikeVisitor.prototype.visitTest = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonLikeParser#or_test.
PythonLikeVisitor.prototype.visitOr_test = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonLikeParser#and_test.
PythonLikeVisitor.prototype.visitAnd_test = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonLikeParser#not_test.
PythonLikeVisitor.prototype.visitNot_test = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonLikeParser#comparison.
PythonLikeVisitor.prototype.visitComparison = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonLikeParser#comp_op.
PythonLikeVisitor.prototype.visitComp_op = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonLikeParser#expr.
PythonLikeVisitor.prototype.visitExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonLikeParser#term.
PythonLikeVisitor.prototype.visitTerm = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonLikeParser#factor.
PythonLikeVisitor.prototype.visitFactor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonLikeParser#power.
PythonLikeVisitor.prototype.visitPower = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonLikeParser#atom.
PythonLikeVisitor.prototype.visitAtom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonLikeParser#testlist.
PythonLikeVisitor.prototype.visitTestlist = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonLikeParser#trailer.
PythonLikeVisitor.prototype.visitTrailer = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonLikeParser#dictorsetmaker.
PythonLikeVisitor.prototype.visitDictorsetmaker = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PythonLikeParser#number.
PythonLikeVisitor.prototype.visitNumber = function(ctx) {
  return this.visitChildren(ctx);
};



exports.PythonLikeVisitor = PythonLikeVisitor;