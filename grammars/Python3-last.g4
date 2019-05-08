/*
 * Parser grammar taken directly from official Python 2.7.13 grammar
 * with only minor syntactical changes (instances of [X] changed to (X)?, and
 * semicolons added to ends of rules).:
 * https://docs.python.org/2/reference/grammar.html
 *
 * Added lexer rules, and code to handle INDENT's, DEDENT's,
 * line continuations, etc.
 *
 * Compiles with ANTLR 4.7, generated lexer/parser for Python 2 target.
 */
 
 grammar Python3;

 tokens { INDENT, DEDENT, NEWLINE, ENDMARKER }

@lexer::header {
    var Python3Parser = require('./Python3Parser').Python3Parser;
    var CommonToken = require('antlr4').CommonToken
    class IndentStack {
        constructor() {
            this._s = [];
        }
        empty() {
            return this._s.length === 0;
        }
        push(wsval) {
            this._s.push(wsval);
        }
        pop() {
            this._s.pop();
        }
        wsval() {
            if (this._s.length) return this._s[this._s.length - 1];
            else return 0;
        }
    }

    class TokenQueue {
        constructor() {
            this._q = [];
        }
        empty() {
            return this._q.length === 0;
        }
        enq(t) {
            this._q.push(t);
        }
        deq() {
            return this._q.shift();
        }
    }

    function ord(char) {
        return char.charCodeAt();
    }
}

@lexer::members {
    var old_lexer = Python3Lexer;
    Python3Lexer = function() {
        old_lexer.apply(this, arguments);
        this._openBRCount       = 0
        this._suppressNewlines  = false
        this._lineContinuation  = false
        this._tokens            = new TokenQueue();
        this._indents           = new IndentStack();
        antlr4.Lexer.prototype.reset.call(this);
    }

    Python3Lexer.prototype = Object.create(old_lexer.prototype);
    Python3Lexer.prototype.constructor = Python3Lexer;

    Python3Lexer.prototype.nextToken = function() {
        if (!this._tokens.empty()) {
            return this._tokens.deq();
        } else {
            var t = antlr4.Lexer.prototype.nextToken.call(this);
            if (t.type !== Python3Parser.EOF) return t;
            else {
                if (!this._suppressNewlines) {
                    this.emitNewline();
                }
                this.emitFullDedent();
                this.emitEndmarker();
                this.emitEndToken(t);
                return this._tokens.deq();
            }
        }

    }

    Python3Lexer.prototype.emitEndToken = function (token) {
        this._tokens.enq(token);
    }

    Python3Lexer.prototype.emitIndent = function (length = 0, text = 'INDENT') {
        var t = this.createToken(Python3Parser.INDENT, text, length);
        this._tokens.enq(t);
    }

    Python3Lexer.prototype.emitDedent = function () {
        var t = this.createToken(Python3Parser.DEDENT, 'DEDENT');
        this._tokens.enq(t);
    }

    Python3Lexer.prototype.emitFullDedent = function () {
        while (!this._indents.empty()) {
            this._indents.pop();
            this.emitDedent();
        }
    }

    Python3Lexer.prototype.emitEndmarker = function () {
        var t = this.createToken(Python3Parser.ENDMARKER, 'ENDMARKER');
        this._tokens.enq(t);
    }

    Python3Lexer.prototype.emitNewline = function () {
        var t = this.createToken(Python3Parser.NEWLINE, 'NEWLINE');
        this._tokens.enq(t);
    }   

    Python3Lexer.prototype.createToken = function (type_, text="", length=0) {
        var start = this._tokenStartCharIndex;
        var stop = start + length;
        var t = new CommonToken(this._tokenFactorySourcePair,
                type_, this.DEFAULT_TOKEN_CHANNEL,
                start, stop);
        t.text = text;
        return t;
    }  
}

// Header included from Python site:
/*
 * Grammar for Python
 *
 * Note:  Changing the grammar specified in this file will most likely
 *        require corresponding changes in the parser module
 *        (../Modules/parsermodule.c).  If you can't make the changes to
 *        that module yourself, please co-ordinate the required changes
 *        with someone who can; ask around on python-dev for help.  Fred
 *        Drake <fdrake@acm.org> will probably be listening there.
 *
 * NOTE WELL: You should also follow all the steps listed in PEP 306,
 * "How to Change Python's Grammar"
 *
 * Start symbols for the grammar:
 *       single_input is a single interactive statement;
 *       file_input is a module or sequence of commands read from an input file;
 *       eval_input is the input for the eval() and input() functions.
 * NB: compound_stmt in single_input is followed by extra NEWLINE!
 */

file_input: (NEWLINE | stmt)* ENDMARKER
    ;

stmt: simple_stmt | compound_stmt
    ;
simple_stmt: expr_stmt (';' expr_stmt)* (';')? NEWLINE
    ;
expr_stmt: atom ('=' test)*
    ;

compound_stmt: if_stmt | while_stmt
    ;
if_stmt: 'if' test ':' suite ('elif' test ':' suite)* ('else' ':' suite)?
    ;
while_stmt: 'while' test ':' suite
    ;
suite: NEWLINE INDENT stmt+ DEDENT
    ;


test: atom (comp_op atom)*
    ;

comp_op: '<'|'>'|'=='|'>='|'<='|'<>'|'!='
    ;
atom: (NAME | NUMBER | STRING+)
    ;


// not used in grammar, but may appear in "node" passed from Parser to Compiler
encoding_decl: NAME
    ;
    
/*****************************************************************************
 *                               Lexer rules
 *****************************************************************************/

NAME: [a-zA-Z_] [a-zA-Z0-9_]*
    ;

NUMBER
    :   '0' ([xX] [0-9a-fA-F]+         ([lL]  | [eE] [+-]? [0-9]+)?
    |        [oO] [0-7]+                [lL]?
    |        [bB] [01]+                 [lL]?)
    | ([0-9]+ '.' [0-9]* | '.' [0-9]+)         ([eE] [+-]? [0-9]+)?       [jJ]?
    |  [0-9]+                          ([lL]  | [eE] [+-]? [0-9]+ [jJ]? | [jJ])?
    ;

STRING
    : ([uUbB]? [rR]? | [rR]? [uUbB]?)
    ( '\''     ('\\' (([ \t]+ ('\r'? '\n')?)|.) | ~[\\\r\n'])*  '\''
    | '"'      ('\\' (([ \t]+ ('\r'? '\n')?)|.) | ~[\\\r\n"])*  '"'
    | '"""'    ('\\' .                          | ~'\\'     )*? '"""'
    | '\'\'\'' ('\\' .                          | ~'\\'     )*? '\'\'\''
    )
    ;

LINENDING:             (('\r'? '\n')+ {this._lineContinuation=false}
    |      '\\'  [ \t]* ('\r'? '\n')  {this._lineContinuation=true})
{
if (this._openBRCount == 0 && !this._lineContinuation) {
    if (!this._suppressNewlines) {
        this.emitNewline()
        this._suppressNewlines = true
    }
    var la = this._input.LA(1)
    if ([ord(' '), ord('\t'), ord('#')].indexOf(la) === -1) {
        this._suppressNewlines = false
        this.emitFullDedent()
    }
}
} -> channel(HIDDEN)
   ;

WHITESPACE: ('\t' | ' ')+
{
if (this._tokenStartColumn == 0 && this._openBRCount == 0
    && !this._lineContinuation) {

    var la = this._input.LA(1);
    if ([ord('\r'), ord('\n'), ord('#'), -1].indexOf(la)===-1)
        this._suppressNewlines = false
        var wsCount = 0;
        for (var ch in this.text) {
            ch = this.text[ch];
            if (ch == ' ') wsCount += 1
            else if (ch == '\t') wsCount += 8
        }

        if (wsCount > this._indents.wsval()) {
            this.emitIndent(this.text.length)
            this._indents.push(wsCount)
        }
        else {
            while (wsCount < this._indents.wsval()) {
                this.emitDedent()
                this._indents.pop()
            }
            if (wsCount != this._indents.wsval()) {
                // throw new Error('wsCount')
            }
        }
    }
}  -> channel(HIDDEN)
    ;

COMMENT:        '#' ~[\r\n]* -> skip;

OPEN_PAREN:     '(' {this._openBRCount  += 1};
CLOSE_PAREN:    ')' {this._openBRCount  -= 1};
OPEN_BRACE:     '{' {this._openBRCount  += 1};
CLOSE_BRACE:    '}' {this._openBRCount  -= 1};
OPEN_BRACKET:   '[' {this._openBRCount  += 1};
CLOSE_BRACKET:  ']' {this._openBRCount  -= 1};

UNKNOWN: . -> skip;

