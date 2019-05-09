// Generated from grammars/Python3.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by Python3Parser.
function Python3Listener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

Python3Listener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
Python3Listener.prototype.constructor = Python3Listener;

// Enter a parse tree produced by Python3Parser#file_input.
Python3Listener.prototype.enterFile_input = function(ctx) {
};

// Exit a parse tree produced by Python3Parser#file_input.
Python3Listener.prototype.exitFile_input = function(ctx) {
};


// Enter a parse tree produced by Python3Parser#funcdef.
Python3Listener.prototype.enterFuncdef = function(ctx) {
};

// Exit a parse tree produced by Python3Parser#funcdef.
Python3Listener.prototype.exitFuncdef = function(ctx) {
};


// Enter a parse tree produced by Python3Parser#parameters.
Python3Listener.prototype.enterParameters = function(ctx) {
};

// Exit a parse tree produced by Python3Parser#parameters.
Python3Listener.prototype.exitParameters = function(ctx) {
};


// Enter a parse tree produced by Python3Parser#argslist.
Python3Listener.prototype.enterArgslist = function(ctx) {
};

// Exit a parse tree produced by Python3Parser#argslist.
Python3Listener.prototype.exitArgslist = function(ctx) {
};


// Enter a parse tree produced by Python3Parser#stmt.
Python3Listener.prototype.enterStmt = function(ctx) {
};

// Exit a parse tree produced by Python3Parser#stmt.
Python3Listener.prototype.exitStmt = function(ctx) {
};


// Enter a parse tree produced by Python3Parser#simple_stmt.
Python3Listener.prototype.enterSimple_stmt = function(ctx) {
};

// Exit a parse tree produced by Python3Parser#simple_stmt.
Python3Listener.prototype.exitSimple_stmt = function(ctx) {
};


// Enter a parse tree produced by Python3Parser#small_stmt.
Python3Listener.prototype.enterSmall_stmt = function(ctx) {
};

// Exit a parse tree produced by Python3Parser#small_stmt.
Python3Listener.prototype.exitSmall_stmt = function(ctx) {
};


// Enter a parse tree produced by Python3Parser#expr_stmt.
Python3Listener.prototype.enterExpr_stmt = function(ctx) {
};

// Exit a parse tree produced by Python3Parser#expr_stmt.
Python3Listener.prototype.exitExpr_stmt = function(ctx) {
};


// Enter a parse tree produced by Python3Parser#augassign.
Python3Listener.prototype.enterAugassign = function(ctx) {
};

// Exit a parse tree produced by Python3Parser#augassign.
Python3Listener.prototype.exitAugassign = function(ctx) {
};


// Enter a parse tree produced by Python3Parser#compound_stmt.
Python3Listener.prototype.enterCompound_stmt = function(ctx) {
};

// Exit a parse tree produced by Python3Parser#compound_stmt.
Python3Listener.prototype.exitCompound_stmt = function(ctx) {
};


// Enter a parse tree produced by Python3Parser#if_stmt.
Python3Listener.prototype.enterIf_stmt = function(ctx) {
};

// Exit a parse tree produced by Python3Parser#if_stmt.
Python3Listener.prototype.exitIf_stmt = function(ctx) {
};


// Enter a parse tree produced by Python3Parser#while_stmt.
Python3Listener.prototype.enterWhile_stmt = function(ctx) {
};

// Exit a parse tree produced by Python3Parser#while_stmt.
Python3Listener.prototype.exitWhile_stmt = function(ctx) {
};


// Enter a parse tree produced by Python3Parser#suite.
Python3Listener.prototype.enterSuite = function(ctx) {
};

// Exit a parse tree produced by Python3Parser#suite.
Python3Listener.prototype.exitSuite = function(ctx) {
};


// Enter a parse tree produced by Python3Parser#test.
Python3Listener.prototype.enterTest = function(ctx) {
};

// Exit a parse tree produced by Python3Parser#test.
Python3Listener.prototype.exitTest = function(ctx) {
};


// Enter a parse tree produced by Python3Parser#or_test.
Python3Listener.prototype.enterOr_test = function(ctx) {
};

// Exit a parse tree produced by Python3Parser#or_test.
Python3Listener.prototype.exitOr_test = function(ctx) {
};


// Enter a parse tree produced by Python3Parser#and_test.
Python3Listener.prototype.enterAnd_test = function(ctx) {
};

// Exit a parse tree produced by Python3Parser#and_test.
Python3Listener.prototype.exitAnd_test = function(ctx) {
};


// Enter a parse tree produced by Python3Parser#not_test.
Python3Listener.prototype.enterNot_test = function(ctx) {
};

// Exit a parse tree produced by Python3Parser#not_test.
Python3Listener.prototype.exitNot_test = function(ctx) {
};


// Enter a parse tree produced by Python3Parser#comparison.
Python3Listener.prototype.enterComparison = function(ctx) {
};

// Exit a parse tree produced by Python3Parser#comparison.
Python3Listener.prototype.exitComparison = function(ctx) {
};


// Enter a parse tree produced by Python3Parser#comp_op.
Python3Listener.prototype.enterComp_op = function(ctx) {
};

// Exit a parse tree produced by Python3Parser#comp_op.
Python3Listener.prototype.exitComp_op = function(ctx) {
};


// Enter a parse tree produced by Python3Parser#expr.
Python3Listener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by Python3Parser#expr.
Python3Listener.prototype.exitExpr = function(ctx) {
};


// Enter a parse tree produced by Python3Parser#term.
Python3Listener.prototype.enterTerm = function(ctx) {
};

// Exit a parse tree produced by Python3Parser#term.
Python3Listener.prototype.exitTerm = function(ctx) {
};


// Enter a parse tree produced by Python3Parser#factor.
Python3Listener.prototype.enterFactor = function(ctx) {
};

// Exit a parse tree produced by Python3Parser#factor.
Python3Listener.prototype.exitFactor = function(ctx) {
};


// Enter a parse tree produced by Python3Parser#power.
Python3Listener.prototype.enterPower = function(ctx) {
};

// Exit a parse tree produced by Python3Parser#power.
Python3Listener.prototype.exitPower = function(ctx) {
};


// Enter a parse tree produced by Python3Parser#atom.
Python3Listener.prototype.enterAtom = function(ctx) {
};

// Exit a parse tree produced by Python3Parser#atom.
Python3Listener.prototype.exitAtom = function(ctx) {
};


// Enter a parse tree produced by Python3Parser#testlist.
Python3Listener.prototype.enterTestlist = function(ctx) {
};

// Exit a parse tree produced by Python3Parser#testlist.
Python3Listener.prototype.exitTestlist = function(ctx) {
};


// Enter a parse tree produced by Python3Parser#trailer.
Python3Listener.prototype.enterTrailer = function(ctx) {
};

// Exit a parse tree produced by Python3Parser#trailer.
Python3Listener.prototype.exitTrailer = function(ctx) {
};


// Enter a parse tree produced by Python3Parser#number.
Python3Listener.prototype.enterNumber = function(ctx) {
};

// Exit a parse tree produced by Python3Parser#number.
Python3Listener.prototype.exitNumber = function(ctx) {
};



exports.Python3Listener = Python3Listener;