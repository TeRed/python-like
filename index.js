#!/usr/bin/env node

const antlr4 = require('antlr4');
const Python3Lexer = require('./lib/Python3Lexer.js');
const Python3Parser = require('./lib/Python3Parser.js');
const Visitor = require('./codegeneration/Visitor.js');
const ErrorListener = require('./codegeneration/ErrorListener.js');
const fs = require('fs');
const beautify = require('js-beautify').js;

const input = fs.readFileSync('./example.py').toString(); // TODO use CLI args

const chars = new antlr4.InputStream(input);
const lexer = new Python3Lexer.Python3Lexer(chars);

lexer.strictMode = false;

const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new Python3Parser.Python3Parser(tokens);
const listener = new ErrorListener();

// TODO custom error listener
parser.removeErrorListeners();
parser.addErrorListener(listener);

console.log('Python input:');
console.log(input);

const t = parser.file_input();
const output = new Visitor().visitFile_input(t);

console.log('\nJS output:\n');

console.log(beautify(output, { indent_size: 2, space_in_empty_paren: true }));

console.log('\nJS eval:\n');

eval(output);
