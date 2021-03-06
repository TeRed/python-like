#!/usr/bin/env node

const antlr4 = require('antlr4');
const PythonLikeLexer = require('./target/PythonLikeLexer.js');
const PythonLikeParser = require('./target/PythonLikeParser.js');
const Visitor = require('./codegeneration/Visitor.js');
const fs = require('fs');
const beautify = require('js-beautify').js;

// Reading CLIs
const [, , inputFile, out, outFileName, option] = process.argv;

if (!inputFile) {
    console.warn('File to compile is required!');
    return 1;
}

const input = fs.readFileSync(inputFile).toString() + '\n';

// Common code
const chars = new antlr4.InputStream(input);
const lexer = new PythonLikeLexer.PythonLikeLexer(chars);

lexer.strictMode = false;

const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new PythonLikeParser.PythonLikeParser(tokens);

// Result

const AST = parser.file_input();
var result = Visitor.visitFile_input(AST);

if (out && out.trim() === '-o') {
    if (option && option.trim() === '-b') {
        result = beautify(result, { indent_size: 2, space_in_empty_paren: true });
    }

    fs.writeFileSync(outFileName, result, 'utf8');
    return;
}

eval(result);
