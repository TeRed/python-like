const antlr4 = require('antlr4');
const Python3Lexer = require('./lib/Python3Lexer.js');
const Python3Parser = require('./lib/Python3Parser.js');
const PythonGenerator = require('./codegeneration/PythonGenerator.js');
const ErrorListener = require('./codegeneration/ErrorListener.js');

const input =
`a = 5 != 33
b = 200
while b > a:
  while true:
    a = 3
  b = 100
  a = 8`;

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
console.log('Output:');

try {
  // const tree = parser.single_input()
  // let tree2 = parser.single_input()
  // tree2 = parser.single_input();

  const t = parser.file_input();

  // console.log(tree);
  // const tree = parser.program();
  let output = new PythonGenerator().visitFile_input(t);

  console.log('\nJS output:\n', output);

  // console.log(tree.toStringTree(parser.ruleNames));
} catch (error) {
  console.log(error);
}
