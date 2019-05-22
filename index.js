const antlr4 = require('antlr4');
const Python3Lexer = require('./lib/Python3Lexer.js');
const Python3Parser = require('./lib/Python3Parser.js');
const PythonGenerator = require('./codegeneration/PythonGenerator.js');
const ErrorListener = require('./codegeneration/ErrorListener.js');
const fs = require('fs');

const input = fs.readFileSync('./example.py').toString();

const chars = new antlr4.InputStream(input);
const lexer = new Python3Lexer.Python3Lexer(chars);

lexer.strictMode = false; // do not use js strictMode

const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new Python3Parser.Python3Parser(tokens);
const listener = new ErrorListener();

// Do this after creating the parser and before running it
parser.removeErrorListeners(); // Remove default ConsoleErrorListener
parser.addErrorListener(listener); // Add custom error listener

console.log('Python input:');
console.log(input);

try {
  const t = parser.file_input();
  let output = new PythonGenerator().visitFile_input(t);

  console.log('\nJS output:\n', output);

} catch (error) {
  console.log(error);
}
