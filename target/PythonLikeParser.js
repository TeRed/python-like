// Generated from grammars/PythonLike.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var PythonLikeVisitor = require('./PythonLikeVisitor').PythonLikeVisitor;

var grammarFileName = "PythonLike.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u00037\u0145\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0003",
    "\u0002\u0003\u0002\u0007\u0002?\n\u0002\f\u0002\u000e\u0002B\u000b\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0005\u0004N\n\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005",
    "U\n\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005",
    "[\n\u0005\u0007\u0005]\n\u0005\f\u0005\u000e\u0005`\u000b\u0005\u0003",
    "\u0006\u0003\u0006\u0005\u0006d\n\u0006\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0007\u0007i\n\u0007\f\u0007\u000e\u0007l\u000b\u0007\u0003\u0007",
    "\u0005\u0007o\n\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0005\by\n\b\u0005\b{\n\b\u0003\t\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0007\t\u0083\n\t\f\t\u000e\t\u0086",
    "\u000b\t\u0005\t\u0088\n\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0005\u000b\u0090\n\u000b\u0003\f\u0003\f\u0003\f",
    "\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0007\f\u009b\n\f\f",
    "\f\u000e\f\u009e\u000b\f\u0003\f\u0003\f\u0003\f\u0005\f\u00a3\n\f\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0006\u000f\u00b5\n\u000f\r\u000f\u000e\u000f",
    "\u00b6\u0003\u000f\u0003\u000f\u0005\u000f\u00bb\n\u000f\u0003\u0010",
    "\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0007\u0011\u00c2\n",
    "\u0011\f\u0011\u000e\u0011\u00c5\u000b\u0011\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0007\u0012\u00ca\n\u0012\f\u0012\u000e\u0012\u00cd\u000b",
    "\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0005\u0013\u00d2\n\u0013",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0007\u0014\u00d8\n",
    "\u0014\f\u0014\u000e\u0014\u00db\u000b\u0014\u0003\u0015\u0003\u0015",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0007\u0016",
    "\u00e4\n\u0016\f\u0016\u000e\u0016\u00e7\u000b\u0016\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0007",
    "\u0017\u00f0\n\u0017\f\u0017\u000e\u0017\u00f3\u000b\u0017\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0005\u0018\u00fa\n",
    "\u0018\u0003\u0019\u0003\u0019\u0007\u0019\u00fe\n\u0019\f\u0019\u000e",
    "\u0019\u0101\u000b\u0019\u0003\u001a\u0003\u001a\u0005\u001a\u0105\n",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0005\u001a\u010a\n\u001a",
    "\u0003\u001a\u0003\u001a\u0003\u001a\u0005\u001a\u010f\n\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0006\u001a\u0115\n\u001a",
    "\r\u001a\u000e\u001a\u0116\u0003\u001a\u0003\u001a\u0003\u001a\u0005",
    "\u001a\u011c\n\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0007\u001b",
    "\u0121\n\u001b\f\u001b\u000e\u001b\u0124\u000b\u001b\u0003\u001c\u0003",
    "\u001c\u0005\u001c\u0128\n\u001c\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0005\u001c\u0131\n",
    "\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003",
    "\u001d\u0003\u001d\u0003\u001d\u0007\u001d\u013b\n\u001d\f\u001d\u000e",
    "\u001d\u013e\u000b\u001d\u0003\u001d\u0005\u001d\u0141\n\u001d\u0003",
    "\u001e\u0003\u001e\u0003\u001e\u0002\u0002\u001f\u0002\u0004\u0006\b",
    "\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.",
    "02468:\u0002\u0005\u0003\u0002/3\u0003\u0002).\u0003\u0002\u001b\u001c",
    "\u0002\u015c\u0002@\u0003\u0002\u0002\u0002\u0004E\u0003\u0002\u0002",
    "\u0002\u0006K\u0003\u0002\u0002\u0002\bQ\u0003\u0002\u0002\u0002\nc",
    "\u0003\u0002\u0002\u0002\fe\u0003\u0002\u0002\u0002\u000ez\u0003\u0002",
    "\u0002\u0002\u0010|\u0003\u0002\u0002\u0002\u0012\u0089\u0003\u0002",
    "\u0002\u0002\u0014\u008f\u0003\u0002\u0002\u0002\u0016\u0091\u0003\u0002",
    "\u0002\u0002\u0018\u00a4\u0003\u0002\u0002\u0002\u001a\u00a9\u0003\u0002",
    "\u0002\u0002\u001c\u00ba\u0003\u0002\u0002\u0002\u001e\u00bc\u0003\u0002",
    "\u0002\u0002 \u00be\u0003\u0002\u0002\u0002\"\u00c6\u0003\u0002\u0002",
    "\u0002$\u00d1\u0003\u0002\u0002\u0002&\u00d3\u0003\u0002\u0002\u0002",
    "(\u00dc\u0003\u0002\u0002\u0002*\u00de\u0003\u0002\u0002\u0002,\u00e8",
    "\u0003\u0002\u0002\u0002.\u00f9\u0003\u0002\u0002\u00020\u00fb\u0003",
    "\u0002\u0002\u00022\u011b\u0003\u0002\u0002\u00024\u011d\u0003\u0002",
    "\u0002\u00026\u0130\u0003\u0002\u0002\u00028\u0132\u0003\u0002\u0002",
    "\u0002:\u0142\u0003\u0002\u0002\u0002<?\u0007\u0018\u0002\u0002=?\u0005",
    "\n\u0006\u0002><\u0003\u0002\u0002\u0002>=\u0003\u0002\u0002\u0002?",
    "B\u0003\u0002\u0002\u0002@>\u0003\u0002\u0002\u0002@A\u0003\u0002\u0002",
    "\u0002AC\u0003\u0002\u0002\u0002B@\u0003\u0002\u0002\u0002CD\u0007\u0002",
    "\u0002\u0003D\u0003\u0003\u0002\u0002\u0002EF\u0007\t\u0002\u0002FG",
    "\u0007\u0019\u0002\u0002GH\u0005\u0006\u0004\u0002HI\u0007\"\u0002\u0002",
    "IJ\u0005\u001c\u000f\u0002J\u0005\u0003\u0002\u0002\u0002KM\u0007\u001f",
    "\u0002\u0002LN\u0005\b\u0005\u0002ML\u0003\u0002\u0002\u0002MN\u0003",
    "\u0002\u0002\u0002NO\u0003\u0002\u0002\u0002OP\u0007 \u0002\u0002P\u0007",
    "\u0003\u0002\u0002\u0002QT\u0007\u0019\u0002\u0002RS\u0007$\u0002\u0002",
    "SU\u0005\u001e\u0010\u0002TR\u0003\u0002\u0002\u0002TU\u0003\u0002\u0002",
    "\u0002U^\u0003\u0002\u0002\u0002VW\u0007!\u0002\u0002WZ\u0007\u0019",
    "\u0002\u0002XY\u0007$\u0002\u0002Y[\u0005\u001e\u0010\u0002ZX\u0003",
    "\u0002\u0002\u0002Z[\u0003\u0002\u0002\u0002[]\u0003\u0002\u0002\u0002",
    "\\V\u0003\u0002\u0002\u0002]`\u0003\u0002\u0002\u0002^\\\u0003\u0002",
    "\u0002\u0002^_\u0003\u0002\u0002\u0002_\t\u0003\u0002\u0002\u0002`^",
    "\u0003\u0002\u0002\u0002ad\u0005\f\u0007\u0002bd\u0005\u0014\u000b\u0002",
    "ca\u0003\u0002\u0002\u0002cb\u0003\u0002\u0002\u0002d\u000b\u0003\u0002",
    "\u0002\u0002ej\u0005\u000e\b\u0002fg\u0007#\u0002\u0002gi\u0005\u000e",
    "\b\u0002hf\u0003\u0002\u0002\u0002il\u0003\u0002\u0002\u0002jh\u0003",
    "\u0002\u0002\u0002jk\u0003\u0002\u0002\u0002kn\u0003\u0002\u0002\u0002",
    "lj\u0003\u0002\u0002\u0002mo\u0007#\u0002\u0002nm\u0003\u0002\u0002",
    "\u0002no\u0003\u0002\u0002\u0002op\u0003\u0002\u0002\u0002pq\u0007\u0018",
    "\u0002\u0002q\r\u0003\u0002\u0002\u0002r{\u0005\u0010\t\u0002s{\u0007",
    "\u0015\u0002\u0002t{\u0007\u0017\u0002\u0002u{\u0007\u0016\u0002\u0002",
    "vx\u0007\n\u0002\u0002wy\u0005\u001e\u0010\u0002xw\u0003\u0002\u0002",
    "\u0002xy\u0003\u0002\u0002\u0002y{\u0003\u0002\u0002\u0002zr\u0003\u0002",
    "\u0002\u0002zs\u0003\u0002\u0002\u0002zt\u0003\u0002\u0002\u0002zu\u0003",
    "\u0002\u0002\u0002zv\u0003\u0002\u0002\u0002{\u000f\u0003\u0002\u0002",
    "\u0002|\u0087\u0005\u001e\u0010\u0002}~\u0005\u0012\n\u0002~\u007f\u0005",
    "\u001e\u0010\u0002\u007f\u0088\u0003\u0002\u0002\u0002\u0080\u0081\u0007",
    "$\u0002\u0002\u0081\u0083\u0005\u001e\u0010\u0002\u0082\u0080\u0003",
    "\u0002\u0002\u0002\u0083\u0086\u0003\u0002\u0002\u0002\u0084\u0082\u0003",
    "\u0002\u0002\u0002\u0084\u0085\u0003\u0002\u0002\u0002\u0085\u0088\u0003",
    "\u0002\u0002\u0002\u0086\u0084\u0003\u0002\u0002\u0002\u0087}\u0003",
    "\u0002\u0002\u0002\u0087\u0084\u0003\u0002\u0002\u0002\u0088\u0011\u0003",
    "\u0002\u0002\u0002\u0089\u008a\t\u0002\u0002\u0002\u008a\u0013\u0003",
    "\u0002\u0002\u0002\u008b\u0090\u0005\u0016\f\u0002\u008c\u0090\u0005",
    "\u0018\r\u0002\u008d\u0090\u0005\u001a\u000e\u0002\u008e\u0090\u0005",
    "\u0004\u0003\u0002\u008f\u008b\u0003\u0002\u0002\u0002\u008f\u008c\u0003",
    "\u0002\u0002\u0002\u008f\u008d\u0003\u0002\u0002\u0002\u008f\u008e\u0003",
    "\u0002\u0002\u0002\u0090\u0015\u0003\u0002\u0002\u0002\u0091\u0092\u0007",
    "\u000b\u0002\u0002\u0092\u0093\u0005\u001e\u0010\u0002\u0093\u0094\u0007",
    "\"\u0002\u0002\u0094\u009c\u0005\u001c\u000f\u0002\u0095\u0096\u0007",
    "\f\u0002\u0002\u0096\u0097\u0005\u001e\u0010\u0002\u0097\u0098\u0007",
    "\"\u0002\u0002\u0098\u0099\u0005\u001c\u000f\u0002\u0099\u009b\u0003",
    "\u0002\u0002\u0002\u009a\u0095\u0003\u0002\u0002\u0002\u009b\u009e\u0003",
    "\u0002\u0002\u0002\u009c\u009a\u0003\u0002\u0002\u0002\u009c\u009d\u0003",
    "\u0002\u0002\u0002\u009d\u00a2\u0003\u0002\u0002\u0002\u009e\u009c\u0003",
    "\u0002\u0002\u0002\u009f\u00a0\u0007\r\u0002\u0002\u00a0\u00a1\u0007",
    "\"\u0002\u0002\u00a1\u00a3\u0005\u001c\u000f\u0002\u00a2\u009f\u0003",
    "\u0002\u0002\u0002\u00a2\u00a3\u0003\u0002\u0002\u0002\u00a3\u0017\u0003",
    "\u0002\u0002\u0002\u00a4\u00a5\u0007\u000e\u0002\u0002\u00a5\u00a6\u0005",
    "\u001e\u0010\u0002\u00a6\u00a7\u0007\"\u0002\u0002\u00a7\u00a8\u0005",
    "\u001c\u000f\u0002\u00a8\u0019\u0003\u0002\u0002\u0002\u00a9\u00aa\u0007",
    "\u0003\u0002\u0002\u00aa\u00ab\u00052\u001a\u0002\u00ab\u00ac\u0007",
    "\u0004\u0002\u0002\u00ac\u00ad\u00054\u001b\u0002\u00ad\u00ae\u0007",
    "\"\u0002\u0002\u00ae\u00af\u0005\u001c\u000f\u0002\u00af\u001b\u0003",
    "\u0002\u0002\u0002\u00b0\u00bb\u0005\f\u0007\u0002\u00b1\u00b2\u0007",
    "\u0018\u0002\u0002\u00b2\u00b4\u00076\u0002\u0002\u00b3\u00b5\u0005",
    "\n\u0006\u0002\u00b4\u00b3\u0003\u0002\u0002\u0002\u00b5\u00b6\u0003",
    "\u0002\u0002\u0002\u00b6\u00b4\u0003\u0002\u0002\u0002\u00b6\u00b7\u0003",
    "\u0002\u0002\u0002\u00b7\u00b8\u0003\u0002\u0002\u0002\u00b8\u00b9\u0007",
    "7\u0002\u0002\u00b9\u00bb\u0003\u0002\u0002\u0002\u00ba\u00b0\u0003",
    "\u0002\u0002\u0002\u00ba\u00b1\u0003\u0002\u0002\u0002\u00bb\u001d\u0003",
    "\u0002\u0002\u0002\u00bc\u00bd\u0005 \u0011\u0002\u00bd\u001f\u0003",
    "\u0002\u0002\u0002\u00be\u00c3\u0005\"\u0012\u0002\u00bf\u00c0\u0007",
    "\u000f\u0002\u0002\u00c0\u00c2\u0005\"\u0012\u0002\u00c1\u00bf\u0003",
    "\u0002\u0002\u0002\u00c2\u00c5\u0003\u0002\u0002\u0002\u00c3\u00c1\u0003",
    "\u0002\u0002\u0002\u00c3\u00c4\u0003\u0002\u0002\u0002\u00c4!\u0003",
    "\u0002\u0002\u0002\u00c5\u00c3\u0003\u0002\u0002\u0002\u00c6\u00cb\u0005",
    "$\u0013\u0002\u00c7\u00c8\u0007\u0010\u0002\u0002\u00c8\u00ca\u0005",
    "$\u0013\u0002\u00c9\u00c7\u0003\u0002\u0002\u0002\u00ca\u00cd\u0003",
    "\u0002\u0002\u0002\u00cb\u00c9\u0003\u0002\u0002\u0002\u00cb\u00cc\u0003",
    "\u0002\u0002\u0002\u00cc#\u0003\u0002\u0002\u0002\u00cd\u00cb\u0003",
    "\u0002\u0002\u0002\u00ce\u00cf\u0007\u0011\u0002\u0002\u00cf\u00d2\u0005",
    "$\u0013\u0002\u00d0\u00d2\u0005&\u0014\u0002\u00d1\u00ce\u0003\u0002",
    "\u0002\u0002\u00d1\u00d0\u0003\u0002\u0002\u0002\u00d2%\u0003\u0002",
    "\u0002\u0002\u00d3\u00d9\u0005*\u0016\u0002\u00d4\u00d5\u0005(\u0015",
    "\u0002\u00d5\u00d6\u0005*\u0016\u0002\u00d6\u00d8\u0003\u0002\u0002",
    "\u0002\u00d7\u00d4\u0003\u0002\u0002\u0002\u00d8\u00db\u0003\u0002\u0002",
    "\u0002\u00d9\u00d7\u0003\u0002\u0002\u0002\u00d9\u00da\u0003\u0002\u0002",
    "\u0002\u00da\'\u0003\u0002\u0002\u0002\u00db\u00d9\u0003\u0002\u0002",
    "\u0002\u00dc\u00dd\t\u0003\u0002\u0002\u00dd)\u0003\u0002\u0002\u0002",
    "\u00de\u00e5\u0005,\u0017\u0002\u00df\u00e0\u0007%\u0002\u0002\u00e0",
    "\u00e4\u0005,\u0017\u0002\u00e1\u00e2\u0007&\u0002\u0002\u00e2\u00e4",
    "\u0005,\u0017\u0002\u00e3\u00df\u0003\u0002\u0002\u0002\u00e3\u00e1",
    "\u0003\u0002\u0002\u0002\u00e4\u00e7\u0003\u0002\u0002\u0002\u00e5\u00e3",
    "\u0003\u0002\u0002\u0002\u00e5\u00e6\u0003\u0002\u0002\u0002\u00e6+",
    "\u0003\u0002\u0002\u0002\u00e7\u00e5\u0003\u0002\u0002\u0002\u00e8\u00f1",
    "\u0005.\u0018\u0002\u00e9\u00ea\u0007\u001e\u0002\u0002\u00ea\u00f0",
    "\u0005.\u0018\u0002\u00eb\u00ec\u0007\'\u0002\u0002\u00ec\u00f0\u0005",
    ".\u0018\u0002\u00ed\u00ee\u0007(\u0002\u0002\u00ee\u00f0\u0005.\u0018",
    "\u0002\u00ef\u00e9\u0003\u0002\u0002\u0002\u00ef\u00eb\u0003\u0002\u0002",
    "\u0002\u00ef\u00ed\u0003\u0002\u0002\u0002\u00f0\u00f3\u0003\u0002\u0002",
    "\u0002\u00f1\u00ef\u0003\u0002\u0002\u0002\u00f1\u00f2\u0003\u0002\u0002",
    "\u0002\u00f2-\u0003\u0002\u0002\u0002\u00f3\u00f1\u0003\u0002\u0002",
    "\u0002\u00f4\u00f5\u0007%\u0002\u0002\u00f5\u00fa\u0005.\u0018\u0002",
    "\u00f6\u00f7\u0007&\u0002\u0002\u00f7\u00fa\u0005.\u0018\u0002\u00f8",
    "\u00fa\u00050\u0019\u0002\u00f9\u00f4\u0003\u0002\u0002\u0002\u00f9",
    "\u00f6\u0003\u0002\u0002\u0002\u00f9\u00f8\u0003\u0002\u0002\u0002\u00fa",
    "/\u0003\u0002\u0002\u0002\u00fb\u00ff\u00052\u001a\u0002\u00fc\u00fe",
    "\u00056\u001c\u0002\u00fd\u00fc\u0003\u0002\u0002\u0002\u00fe\u0101",
    "\u0003\u0002\u0002\u0002\u00ff\u00fd\u0003\u0002\u0002\u0002\u00ff\u0100",
    "\u0003\u0002\u0002\u0002\u01001\u0003\u0002\u0002\u0002\u0101\u00ff",
    "\u0003\u0002\u0002\u0002\u0102\u0104\u0007\u001f\u0002\u0002\u0103\u0105",
    "\u00054\u001b\u0002\u0104\u0103\u0003\u0002\u0002\u0002\u0104\u0105",
    "\u0003\u0002\u0002\u0002\u0105\u0106\u0003\u0002\u0002\u0002\u0106\u011c",
    "\u0007 \u0002\u0002\u0107\u0109\u0007\u0005\u0002\u0002\u0108\u010a",
    "\u00054\u001b\u0002\u0109\u0108\u0003\u0002\u0002\u0002\u0109\u010a",
    "\u0003\u0002\u0002\u0002\u010a\u010b\u0003\u0002\u0002\u0002\u010b\u011c",
    "\u0007\u0006\u0002\u0002\u010c\u010e\u0007\u0007\u0002\u0002\u010d\u010f",
    "\u00058\u001d\u0002\u010e\u010d\u0003\u0002\u0002\u0002\u010e\u010f",
    "\u0003\u0002\u0002\u0002\u010f\u0110\u0003\u0002\u0002\u0002\u0110\u011c",
    "\u0007\b\u0002\u0002\u0111\u011c\u0007\u0019\u0002\u0002\u0112\u011c",
    "\u0005:\u001e\u0002\u0113\u0115\u0007\u001a\u0002\u0002\u0114\u0113",
    "\u0003\u0002\u0002\u0002\u0115\u0116\u0003\u0002\u0002\u0002\u0116\u0114",
    "\u0003\u0002\u0002\u0002\u0116\u0117\u0003\u0002\u0002\u0002\u0117\u011c",
    "\u0003\u0002\u0002\u0002\u0118\u011c\u0007\u0012\u0002\u0002\u0119\u011c",
    "\u0007\u0013\u0002\u0002\u011a\u011c\u0007\u0014\u0002\u0002\u011b\u0102",
    "\u0003\u0002\u0002\u0002\u011b\u0107\u0003\u0002\u0002\u0002\u011b\u010c",
    "\u0003\u0002\u0002\u0002\u011b\u0111\u0003\u0002\u0002\u0002\u011b\u0112",
    "\u0003\u0002\u0002\u0002\u011b\u0114\u0003\u0002\u0002\u0002\u011b\u0118",
    "\u0003\u0002\u0002\u0002\u011b\u0119\u0003\u0002\u0002\u0002\u011b\u011a",
    "\u0003\u0002\u0002\u0002\u011c3\u0003\u0002\u0002\u0002\u011d\u0122",
    "\u0005\u001e\u0010\u0002\u011e\u011f\u0007!\u0002\u0002\u011f\u0121",
    "\u0005\u001e\u0010\u0002\u0120\u011e\u0003\u0002\u0002\u0002\u0121\u0124",
    "\u0003\u0002\u0002\u0002\u0122\u0120\u0003\u0002\u0002\u0002\u0122\u0123",
    "\u0003\u0002\u0002\u0002\u01235\u0003\u0002\u0002\u0002\u0124\u0122",
    "\u0003\u0002\u0002\u0002\u0125\u0127\u0007\u001f\u0002\u0002\u0126\u0128",
    "\u00054\u001b\u0002\u0127\u0126\u0003\u0002\u0002\u0002\u0127\u0128",
    "\u0003\u0002\u0002\u0002\u0128\u0129\u0003\u0002\u0002\u0002\u0129\u0131",
    "\u0007 \u0002\u0002\u012a\u012b\u0007\u0005\u0002\u0002\u012b\u012c",
    "\u0005\u001e\u0010\u0002\u012c\u012d\u0007\u0006\u0002\u0002\u012d\u0131",
    "\u0003\u0002\u0002\u0002\u012e\u012f\u0007\u001d\u0002\u0002\u012f\u0131",
    "\u0007\u0019\u0002\u0002\u0130\u0125\u0003\u0002\u0002\u0002\u0130\u012a",
    "\u0003\u0002\u0002\u0002\u0130\u012e\u0003\u0002\u0002\u0002\u01317",
    "\u0003\u0002\u0002\u0002\u0132\u0133\u0005\u001e\u0010\u0002\u0133\u0134",
    "\u0007\"\u0002\u0002\u0134\u013c\u0005\u001e\u0010\u0002\u0135\u0136",
    "\u0007!\u0002\u0002\u0136\u0137\u0005\u001e\u0010\u0002\u0137\u0138",
    "\u0007\"\u0002\u0002\u0138\u0139\u0005\u001e\u0010\u0002\u0139\u013b",
    "\u0003\u0002\u0002\u0002\u013a\u0135\u0003\u0002\u0002\u0002\u013b\u013e",
    "\u0003\u0002\u0002\u0002\u013c\u013a\u0003\u0002\u0002\u0002\u013c\u013d",
    "\u0003\u0002\u0002\u0002\u013d\u0140\u0003\u0002\u0002\u0002\u013e\u013c",
    "\u0003\u0002\u0002\u0002\u013f\u0141\u0007!\u0002\u0002\u0140\u013f",
    "\u0003\u0002\u0002\u0002\u0140\u0141\u0003\u0002\u0002\u0002\u01419",
    "\u0003\u0002\u0002\u0002\u0142\u0143\t\u0004\u0002\u0002\u0143;\u0003",
    "\u0002\u0002\u0002(>@MTZ^cjnxz\u0084\u0087\u008f\u009c\u00a2\u00b6\u00ba",
    "\u00c3\u00cb\u00d1\u00d9\u00e3\u00e5\u00ef\u00f1\u00f9\u00ff\u0104\u0109",
    "\u010e\u0116\u011b\u0122\u0127\u0130\u013c\u0140"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'for'", "'in'", "'['", "']'", "'{'", "'}'", 
                     "'def'", "'return'", "'if'", "'elif'", "'else'", "'while'", 
                     "'or'", "'and'", "'not'", "'None'", "'True'", "'False'", 
                     "'pass'", "'continue'", "'break'", null, null, null, 
                     null, null, "'.'", "'*'", "'('", "')'", "','", "':'", 
                     "';'", "'='", "'+'", "'-'", "'/'", "'%'", "'<'", "'>'", 
                     "'=='", "'>='", "'<='", "'!='", "'+='", "'-='", "'*='", 
                     "'/='", "'%='" ];

var symbolicNames = [ null, null, null, null, null, null, null, "DEF", "RETURN", 
                      "IF", "ELIF", "ELSE", "WHILE", "OR", "AND", "NOT", 
                      "NONE", "TRUE", "FALSE", "PASS", "CONTINUE", "BREAK", 
                      "NEWLINE", "NAME", "STRING_LITERAL", "DECIMAL_INTEGER", 
                      "FLOAT_NUMBER", "DOT", "STAR", "OPEN_PAREN", "CLOSE_PAREN", 
                      "COMMA", "COLON", "SEMI_COLON", "ASSIGN", "ADD", "MINUS", 
                      "DIV", "MOD", "LESS_THAN", "GREATER_THAN", "EQUALS", 
                      "GT_EQ", "LT_EQ", "NOT_EQ", "ADD_ASSIGN", "SUB_ASSIGN", 
                      "MULT_ASSIGN", "DIV_ASSIGN", "MOD_ASSIGN", "SKIP_", 
                      "UNKNOWN_CHAR", "INDENT", "DEDENT" ];

var ruleNames =  [ "file_input", "funcdef", "parameters", "argslist", "stmt", 
                   "simple_stmt", "small_stmt", "expr_stmt", "augassign", 
                   "compound_stmt", "if_stmt", "while_stmt", "for_stmt", 
                   "suite", "test", "or_test", "and_test", "not_test", "comparison", 
                   "comp_op", "expr", "term", "factor", "power", "atom", 
                   "testlist", "trailer", "dictorsetmaker", "number" ];

function PythonLikeParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

PythonLikeParser.prototype = Object.create(antlr4.Parser.prototype);
PythonLikeParser.prototype.constructor = PythonLikeParser;

Object.defineProperty(PythonLikeParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

PythonLikeParser.EOF = antlr4.Token.EOF;
PythonLikeParser.T__0 = 1;
PythonLikeParser.T__1 = 2;
PythonLikeParser.T__2 = 3;
PythonLikeParser.T__3 = 4;
PythonLikeParser.T__4 = 5;
PythonLikeParser.T__5 = 6;
PythonLikeParser.DEF = 7;
PythonLikeParser.RETURN = 8;
PythonLikeParser.IF = 9;
PythonLikeParser.ELIF = 10;
PythonLikeParser.ELSE = 11;
PythonLikeParser.WHILE = 12;
PythonLikeParser.OR = 13;
PythonLikeParser.AND = 14;
PythonLikeParser.NOT = 15;
PythonLikeParser.NONE = 16;
PythonLikeParser.TRUE = 17;
PythonLikeParser.FALSE = 18;
PythonLikeParser.PASS = 19;
PythonLikeParser.CONTINUE = 20;
PythonLikeParser.BREAK = 21;
PythonLikeParser.NEWLINE = 22;
PythonLikeParser.NAME = 23;
PythonLikeParser.STRING_LITERAL = 24;
PythonLikeParser.DECIMAL_INTEGER = 25;
PythonLikeParser.FLOAT_NUMBER = 26;
PythonLikeParser.DOT = 27;
PythonLikeParser.STAR = 28;
PythonLikeParser.OPEN_PAREN = 29;
PythonLikeParser.CLOSE_PAREN = 30;
PythonLikeParser.COMMA = 31;
PythonLikeParser.COLON = 32;
PythonLikeParser.SEMI_COLON = 33;
PythonLikeParser.ASSIGN = 34;
PythonLikeParser.ADD = 35;
PythonLikeParser.MINUS = 36;
PythonLikeParser.DIV = 37;
PythonLikeParser.MOD = 38;
PythonLikeParser.LESS_THAN = 39;
PythonLikeParser.GREATER_THAN = 40;
PythonLikeParser.EQUALS = 41;
PythonLikeParser.GT_EQ = 42;
PythonLikeParser.LT_EQ = 43;
PythonLikeParser.NOT_EQ = 44;
PythonLikeParser.ADD_ASSIGN = 45;
PythonLikeParser.SUB_ASSIGN = 46;
PythonLikeParser.MULT_ASSIGN = 47;
PythonLikeParser.DIV_ASSIGN = 48;
PythonLikeParser.MOD_ASSIGN = 49;
PythonLikeParser.SKIP_ = 50;
PythonLikeParser.UNKNOWN_CHAR = 51;
PythonLikeParser.INDENT = 52;
PythonLikeParser.DEDENT = 53;

PythonLikeParser.RULE_file_input = 0;
PythonLikeParser.RULE_funcdef = 1;
PythonLikeParser.RULE_parameters = 2;
PythonLikeParser.RULE_argslist = 3;
PythonLikeParser.RULE_stmt = 4;
PythonLikeParser.RULE_simple_stmt = 5;
PythonLikeParser.RULE_small_stmt = 6;
PythonLikeParser.RULE_expr_stmt = 7;
PythonLikeParser.RULE_augassign = 8;
PythonLikeParser.RULE_compound_stmt = 9;
PythonLikeParser.RULE_if_stmt = 10;
PythonLikeParser.RULE_while_stmt = 11;
PythonLikeParser.RULE_for_stmt = 12;
PythonLikeParser.RULE_suite = 13;
PythonLikeParser.RULE_test = 14;
PythonLikeParser.RULE_or_test = 15;
PythonLikeParser.RULE_and_test = 16;
PythonLikeParser.RULE_not_test = 17;
PythonLikeParser.RULE_comparison = 18;
PythonLikeParser.RULE_comp_op = 19;
PythonLikeParser.RULE_expr = 20;
PythonLikeParser.RULE_term = 21;
PythonLikeParser.RULE_factor = 22;
PythonLikeParser.RULE_power = 23;
PythonLikeParser.RULE_atom = 24;
PythonLikeParser.RULE_testlist = 25;
PythonLikeParser.RULE_trailer = 26;
PythonLikeParser.RULE_dictorsetmaker = 27;
PythonLikeParser.RULE_number = 28;

function File_inputContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PythonLikeParser.RULE_file_input;
    return this;
}

File_inputContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
File_inputContext.prototype.constructor = File_inputContext;

File_inputContext.prototype.EOF = function() {
    return this.getToken(PythonLikeParser.EOF, 0);
};

File_inputContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PythonLikeParser.NEWLINE);
    } else {
        return this.getToken(PythonLikeParser.NEWLINE, i);
    }
};


File_inputContext.prototype.stmt = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StmtContext);
    } else {
        return this.getTypedRuleContext(StmtContext,i);
    }
};

File_inputContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PythonLikeVisitor ) {
        return visitor.visitFile_input(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PythonLikeParser.File_inputContext = File_inputContext;

PythonLikeParser.prototype.file_input = function() {

    var localctx = new File_inputContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, PythonLikeParser.RULE_file_input);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 62;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PythonLikeParser.T__0) | (1 << PythonLikeParser.T__2) | (1 << PythonLikeParser.T__4) | (1 << PythonLikeParser.DEF) | (1 << PythonLikeParser.RETURN) | (1 << PythonLikeParser.IF) | (1 << PythonLikeParser.WHILE) | (1 << PythonLikeParser.NOT) | (1 << PythonLikeParser.NONE) | (1 << PythonLikeParser.TRUE) | (1 << PythonLikeParser.FALSE) | (1 << PythonLikeParser.PASS) | (1 << PythonLikeParser.CONTINUE) | (1 << PythonLikeParser.BREAK) | (1 << PythonLikeParser.NEWLINE) | (1 << PythonLikeParser.NAME) | (1 << PythonLikeParser.STRING_LITERAL) | (1 << PythonLikeParser.DECIMAL_INTEGER) | (1 << PythonLikeParser.FLOAT_NUMBER) | (1 << PythonLikeParser.OPEN_PAREN))) !== 0) || _la===PythonLikeParser.ADD || _la===PythonLikeParser.MINUS) {
            this.state = 60;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case PythonLikeParser.NEWLINE:
                this.state = 58;
                this.match(PythonLikeParser.NEWLINE);
                break;
            case PythonLikeParser.T__0:
            case PythonLikeParser.T__2:
            case PythonLikeParser.T__4:
            case PythonLikeParser.DEF:
            case PythonLikeParser.RETURN:
            case PythonLikeParser.IF:
            case PythonLikeParser.WHILE:
            case PythonLikeParser.NOT:
            case PythonLikeParser.NONE:
            case PythonLikeParser.TRUE:
            case PythonLikeParser.FALSE:
            case PythonLikeParser.PASS:
            case PythonLikeParser.CONTINUE:
            case PythonLikeParser.BREAK:
            case PythonLikeParser.NAME:
            case PythonLikeParser.STRING_LITERAL:
            case PythonLikeParser.DECIMAL_INTEGER:
            case PythonLikeParser.FLOAT_NUMBER:
            case PythonLikeParser.OPEN_PAREN:
            case PythonLikeParser.ADD:
            case PythonLikeParser.MINUS:
                this.state = 59;
                this.stmt();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 64;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 65;
        this.match(PythonLikeParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FuncdefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PythonLikeParser.RULE_funcdef;
    return this;
}

FuncdefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FuncdefContext.prototype.constructor = FuncdefContext;

FuncdefContext.prototype.DEF = function() {
    return this.getToken(PythonLikeParser.DEF, 0);
};

FuncdefContext.prototype.NAME = function() {
    return this.getToken(PythonLikeParser.NAME, 0);
};

FuncdefContext.prototype.parameters = function() {
    return this.getTypedRuleContext(ParametersContext,0);
};

FuncdefContext.prototype.suite = function() {
    return this.getTypedRuleContext(SuiteContext,0);
};

FuncdefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PythonLikeVisitor ) {
        return visitor.visitFuncdef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PythonLikeParser.FuncdefContext = FuncdefContext;

PythonLikeParser.prototype.funcdef = function() {

    var localctx = new FuncdefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, PythonLikeParser.RULE_funcdef);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 67;
        this.match(PythonLikeParser.DEF);
        this.state = 68;
        this.match(PythonLikeParser.NAME);
        this.state = 69;
        this.parameters();
        this.state = 70;
        this.match(PythonLikeParser.COLON);
        this.state = 71;
        this.suite();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ParametersContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PythonLikeParser.RULE_parameters;
    return this;
}

ParametersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParametersContext.prototype.constructor = ParametersContext;

ParametersContext.prototype.argslist = function() {
    return this.getTypedRuleContext(ArgslistContext,0);
};

ParametersContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PythonLikeVisitor ) {
        return visitor.visitParameters(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PythonLikeParser.ParametersContext = ParametersContext;

PythonLikeParser.prototype.parameters = function() {

    var localctx = new ParametersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, PythonLikeParser.RULE_parameters);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 73;
        this.match(PythonLikeParser.OPEN_PAREN);
        this.state = 75;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PythonLikeParser.NAME) {
            this.state = 74;
            this.argslist();
        }

        this.state = 77;
        this.match(PythonLikeParser.CLOSE_PAREN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArgslistContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PythonLikeParser.RULE_argslist;
    return this;
}

ArgslistContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgslistContext.prototype.constructor = ArgslistContext;

ArgslistContext.prototype.NAME = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PythonLikeParser.NAME);
    } else {
        return this.getToken(PythonLikeParser.NAME, i);
    }
};


ArgslistContext.prototype.test = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TestContext);
    } else {
        return this.getTypedRuleContext(TestContext,i);
    }
};

ArgslistContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PythonLikeVisitor ) {
        return visitor.visitArgslist(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PythonLikeParser.ArgslistContext = ArgslistContext;

PythonLikeParser.prototype.argslist = function() {

    var localctx = new ArgslistContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, PythonLikeParser.RULE_argslist);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 79;
        this.match(PythonLikeParser.NAME);
        this.state = 82;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PythonLikeParser.ASSIGN) {
            this.state = 80;
            this.match(PythonLikeParser.ASSIGN);
            this.state = 81;
            this.test();
        }

        this.state = 92;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===PythonLikeParser.COMMA) {
            this.state = 84;
            this.match(PythonLikeParser.COMMA);
            this.state = 85;
            this.match(PythonLikeParser.NAME);
            this.state = 88;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PythonLikeParser.ASSIGN) {
                this.state = 86;
                this.match(PythonLikeParser.ASSIGN);
                this.state = 87;
                this.test();
            }

            this.state = 94;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PythonLikeParser.RULE_stmt;
    return this;
}

StmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StmtContext.prototype.constructor = StmtContext;

StmtContext.prototype.simple_stmt = function() {
    return this.getTypedRuleContext(Simple_stmtContext,0);
};

StmtContext.prototype.compound_stmt = function() {
    return this.getTypedRuleContext(Compound_stmtContext,0);
};

StmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PythonLikeVisitor ) {
        return visitor.visitStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PythonLikeParser.StmtContext = StmtContext;

PythonLikeParser.prototype.stmt = function() {

    var localctx = new StmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, PythonLikeParser.RULE_stmt);
    try {
        this.state = 97;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PythonLikeParser.T__2:
        case PythonLikeParser.T__4:
        case PythonLikeParser.RETURN:
        case PythonLikeParser.NOT:
        case PythonLikeParser.NONE:
        case PythonLikeParser.TRUE:
        case PythonLikeParser.FALSE:
        case PythonLikeParser.PASS:
        case PythonLikeParser.CONTINUE:
        case PythonLikeParser.BREAK:
        case PythonLikeParser.NAME:
        case PythonLikeParser.STRING_LITERAL:
        case PythonLikeParser.DECIMAL_INTEGER:
        case PythonLikeParser.FLOAT_NUMBER:
        case PythonLikeParser.OPEN_PAREN:
        case PythonLikeParser.ADD:
        case PythonLikeParser.MINUS:
            this.enterOuterAlt(localctx, 1);
            this.state = 95;
            this.simple_stmt();
            break;
        case PythonLikeParser.T__0:
        case PythonLikeParser.DEF:
        case PythonLikeParser.IF:
        case PythonLikeParser.WHILE:
            this.enterOuterAlt(localctx, 2);
            this.state = 96;
            this.compound_stmt();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Simple_stmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PythonLikeParser.RULE_simple_stmt;
    return this;
}

Simple_stmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Simple_stmtContext.prototype.constructor = Simple_stmtContext;

Simple_stmtContext.prototype.small_stmt = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Small_stmtContext);
    } else {
        return this.getTypedRuleContext(Small_stmtContext,i);
    }
};

Simple_stmtContext.prototype.NEWLINE = function() {
    return this.getToken(PythonLikeParser.NEWLINE, 0);
};

Simple_stmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PythonLikeVisitor ) {
        return visitor.visitSimple_stmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PythonLikeParser.Simple_stmtContext = Simple_stmtContext;

PythonLikeParser.prototype.simple_stmt = function() {

    var localctx = new Simple_stmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, PythonLikeParser.RULE_simple_stmt);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 99;
        this.small_stmt();
        this.state = 104;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 100;
                this.match(PythonLikeParser.SEMI_COLON);
                this.state = 101;
                this.small_stmt(); 
            }
            this.state = 106;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
        }

        this.state = 108;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PythonLikeParser.SEMI_COLON) {
            this.state = 107;
            this.match(PythonLikeParser.SEMI_COLON);
        }

        this.state = 110;
        this.match(PythonLikeParser.NEWLINE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Small_stmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PythonLikeParser.RULE_small_stmt;
    return this;
}

Small_stmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Small_stmtContext.prototype.constructor = Small_stmtContext;

Small_stmtContext.prototype.expr_stmt = function() {
    return this.getTypedRuleContext(Expr_stmtContext,0);
};

Small_stmtContext.prototype.PASS = function() {
    return this.getToken(PythonLikeParser.PASS, 0);
};

Small_stmtContext.prototype.BREAK = function() {
    return this.getToken(PythonLikeParser.BREAK, 0);
};

Small_stmtContext.prototype.CONTINUE = function() {
    return this.getToken(PythonLikeParser.CONTINUE, 0);
};

Small_stmtContext.prototype.RETURN = function() {
    return this.getToken(PythonLikeParser.RETURN, 0);
};

Small_stmtContext.prototype.test = function() {
    return this.getTypedRuleContext(TestContext,0);
};

Small_stmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PythonLikeVisitor ) {
        return visitor.visitSmall_stmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PythonLikeParser.Small_stmtContext = Small_stmtContext;

PythonLikeParser.prototype.small_stmt = function() {

    var localctx = new Small_stmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, PythonLikeParser.RULE_small_stmt);
    var _la = 0; // Token type
    try {
        this.state = 120;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PythonLikeParser.T__2:
        case PythonLikeParser.T__4:
        case PythonLikeParser.NOT:
        case PythonLikeParser.NONE:
        case PythonLikeParser.TRUE:
        case PythonLikeParser.FALSE:
        case PythonLikeParser.NAME:
        case PythonLikeParser.STRING_LITERAL:
        case PythonLikeParser.DECIMAL_INTEGER:
        case PythonLikeParser.FLOAT_NUMBER:
        case PythonLikeParser.OPEN_PAREN:
        case PythonLikeParser.ADD:
        case PythonLikeParser.MINUS:
            this.enterOuterAlt(localctx, 1);
            this.state = 112;
            this.expr_stmt();
            break;
        case PythonLikeParser.PASS:
            this.enterOuterAlt(localctx, 2);
            this.state = 113;
            this.match(PythonLikeParser.PASS);
            break;
        case PythonLikeParser.BREAK:
            this.enterOuterAlt(localctx, 3);
            this.state = 114;
            this.match(PythonLikeParser.BREAK);
            break;
        case PythonLikeParser.CONTINUE:
            this.enterOuterAlt(localctx, 4);
            this.state = 115;
            this.match(PythonLikeParser.CONTINUE);
            break;
        case PythonLikeParser.RETURN:
            this.enterOuterAlt(localctx, 5);
            this.state = 116;
            this.match(PythonLikeParser.RETURN);
            this.state = 118;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PythonLikeParser.T__2) | (1 << PythonLikeParser.T__4) | (1 << PythonLikeParser.NOT) | (1 << PythonLikeParser.NONE) | (1 << PythonLikeParser.TRUE) | (1 << PythonLikeParser.FALSE) | (1 << PythonLikeParser.NAME) | (1 << PythonLikeParser.STRING_LITERAL) | (1 << PythonLikeParser.DECIMAL_INTEGER) | (1 << PythonLikeParser.FLOAT_NUMBER) | (1 << PythonLikeParser.OPEN_PAREN))) !== 0) || _la===PythonLikeParser.ADD || _la===PythonLikeParser.MINUS) {
                this.state = 117;
                this.test();
            }

            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Expr_stmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PythonLikeParser.RULE_expr_stmt;
    return this;
}

Expr_stmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Expr_stmtContext.prototype.constructor = Expr_stmtContext;

Expr_stmtContext.prototype.test = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TestContext);
    } else {
        return this.getTypedRuleContext(TestContext,i);
    }
};

Expr_stmtContext.prototype.augassign = function() {
    return this.getTypedRuleContext(AugassignContext,0);
};

Expr_stmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PythonLikeVisitor ) {
        return visitor.visitExpr_stmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PythonLikeParser.Expr_stmtContext = Expr_stmtContext;

PythonLikeParser.prototype.expr_stmt = function() {

    var localctx = new Expr_stmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, PythonLikeParser.RULE_expr_stmt);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 122;
        this.test();
        this.state = 133;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PythonLikeParser.ADD_ASSIGN:
        case PythonLikeParser.SUB_ASSIGN:
        case PythonLikeParser.MULT_ASSIGN:
        case PythonLikeParser.DIV_ASSIGN:
        case PythonLikeParser.MOD_ASSIGN:
            this.state = 123;
            this.augassign();
            this.state = 124;
            this.test();
            break;
        case PythonLikeParser.NEWLINE:
        case PythonLikeParser.SEMI_COLON:
        case PythonLikeParser.ASSIGN:
            this.state = 130;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===PythonLikeParser.ASSIGN) {
                this.state = 126;
                this.match(PythonLikeParser.ASSIGN);
                this.state = 127;
                this.test();
                this.state = 132;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AugassignContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PythonLikeParser.RULE_augassign;
    return this;
}

AugassignContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AugassignContext.prototype.constructor = AugassignContext;


AugassignContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PythonLikeVisitor ) {
        return visitor.visitAugassign(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PythonLikeParser.AugassignContext = AugassignContext;

PythonLikeParser.prototype.augassign = function() {

    var localctx = new AugassignContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, PythonLikeParser.RULE_augassign);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 135;
        _la = this._input.LA(1);
        if(!(((((_la - 45)) & ~0x1f) == 0 && ((1 << (_la - 45)) & ((1 << (PythonLikeParser.ADD_ASSIGN - 45)) | (1 << (PythonLikeParser.SUB_ASSIGN - 45)) | (1 << (PythonLikeParser.MULT_ASSIGN - 45)) | (1 << (PythonLikeParser.DIV_ASSIGN - 45)) | (1 << (PythonLikeParser.MOD_ASSIGN - 45)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Compound_stmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PythonLikeParser.RULE_compound_stmt;
    return this;
}

Compound_stmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Compound_stmtContext.prototype.constructor = Compound_stmtContext;

Compound_stmtContext.prototype.if_stmt = function() {
    return this.getTypedRuleContext(If_stmtContext,0);
};

Compound_stmtContext.prototype.while_stmt = function() {
    return this.getTypedRuleContext(While_stmtContext,0);
};

Compound_stmtContext.prototype.for_stmt = function() {
    return this.getTypedRuleContext(For_stmtContext,0);
};

Compound_stmtContext.prototype.funcdef = function() {
    return this.getTypedRuleContext(FuncdefContext,0);
};

Compound_stmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PythonLikeVisitor ) {
        return visitor.visitCompound_stmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PythonLikeParser.Compound_stmtContext = Compound_stmtContext;

PythonLikeParser.prototype.compound_stmt = function() {

    var localctx = new Compound_stmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, PythonLikeParser.RULE_compound_stmt);
    try {
        this.state = 141;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PythonLikeParser.IF:
            this.enterOuterAlt(localctx, 1);
            this.state = 137;
            this.if_stmt();
            break;
        case PythonLikeParser.WHILE:
            this.enterOuterAlt(localctx, 2);
            this.state = 138;
            this.while_stmt();
            break;
        case PythonLikeParser.T__0:
            this.enterOuterAlt(localctx, 3);
            this.state = 139;
            this.for_stmt();
            break;
        case PythonLikeParser.DEF:
            this.enterOuterAlt(localctx, 4);
            this.state = 140;
            this.funcdef();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function If_stmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PythonLikeParser.RULE_if_stmt;
    return this;
}

If_stmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
If_stmtContext.prototype.constructor = If_stmtContext;

If_stmtContext.prototype.IF = function() {
    return this.getToken(PythonLikeParser.IF, 0);
};

If_stmtContext.prototype.test = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TestContext);
    } else {
        return this.getTypedRuleContext(TestContext,i);
    }
};

If_stmtContext.prototype.suite = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SuiteContext);
    } else {
        return this.getTypedRuleContext(SuiteContext,i);
    }
};

If_stmtContext.prototype.ELIF = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PythonLikeParser.ELIF);
    } else {
        return this.getToken(PythonLikeParser.ELIF, i);
    }
};


If_stmtContext.prototype.ELSE = function() {
    return this.getToken(PythonLikeParser.ELSE, 0);
};

If_stmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PythonLikeVisitor ) {
        return visitor.visitIf_stmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PythonLikeParser.If_stmtContext = If_stmtContext;

PythonLikeParser.prototype.if_stmt = function() {

    var localctx = new If_stmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, PythonLikeParser.RULE_if_stmt);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 143;
        this.match(PythonLikeParser.IF);
        this.state = 144;
        this.test();
        this.state = 145;
        this.match(PythonLikeParser.COLON);
        this.state = 146;
        this.suite();
        this.state = 154;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===PythonLikeParser.ELIF) {
            this.state = 147;
            this.match(PythonLikeParser.ELIF);
            this.state = 148;
            this.test();
            this.state = 149;
            this.match(PythonLikeParser.COLON);
            this.state = 150;
            this.suite();
            this.state = 156;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 160;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PythonLikeParser.ELSE) {
            this.state = 157;
            this.match(PythonLikeParser.ELSE);
            this.state = 158;
            this.match(PythonLikeParser.COLON);
            this.state = 159;
            this.suite();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function While_stmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PythonLikeParser.RULE_while_stmt;
    return this;
}

While_stmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
While_stmtContext.prototype.constructor = While_stmtContext;

While_stmtContext.prototype.WHILE = function() {
    return this.getToken(PythonLikeParser.WHILE, 0);
};

While_stmtContext.prototype.test = function() {
    return this.getTypedRuleContext(TestContext,0);
};

While_stmtContext.prototype.suite = function() {
    return this.getTypedRuleContext(SuiteContext,0);
};

While_stmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PythonLikeVisitor ) {
        return visitor.visitWhile_stmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PythonLikeParser.While_stmtContext = While_stmtContext;

PythonLikeParser.prototype.while_stmt = function() {

    var localctx = new While_stmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, PythonLikeParser.RULE_while_stmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 162;
        this.match(PythonLikeParser.WHILE);
        this.state = 163;
        this.test();
        this.state = 164;
        this.match(PythonLikeParser.COLON);
        this.state = 165;
        this.suite();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function For_stmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PythonLikeParser.RULE_for_stmt;
    return this;
}

For_stmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
For_stmtContext.prototype.constructor = For_stmtContext;

For_stmtContext.prototype.atom = function() {
    return this.getTypedRuleContext(AtomContext,0);
};

For_stmtContext.prototype.testlist = function() {
    return this.getTypedRuleContext(TestlistContext,0);
};

For_stmtContext.prototype.suite = function() {
    return this.getTypedRuleContext(SuiteContext,0);
};

For_stmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PythonLikeVisitor ) {
        return visitor.visitFor_stmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PythonLikeParser.For_stmtContext = For_stmtContext;

PythonLikeParser.prototype.for_stmt = function() {

    var localctx = new For_stmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, PythonLikeParser.RULE_for_stmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 167;
        this.match(PythonLikeParser.T__0);
        this.state = 168;
        this.atom();
        this.state = 169;
        this.match(PythonLikeParser.T__1);
        this.state = 170;
        this.testlist();
        this.state = 171;
        this.match(PythonLikeParser.COLON);
        this.state = 172;
        this.suite();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SuiteContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PythonLikeParser.RULE_suite;
    return this;
}

SuiteContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SuiteContext.prototype.constructor = SuiteContext;

SuiteContext.prototype.simple_stmt = function() {
    return this.getTypedRuleContext(Simple_stmtContext,0);
};

SuiteContext.prototype.NEWLINE = function() {
    return this.getToken(PythonLikeParser.NEWLINE, 0);
};

SuiteContext.prototype.INDENT = function() {
    return this.getToken(PythonLikeParser.INDENT, 0);
};

SuiteContext.prototype.DEDENT = function() {
    return this.getToken(PythonLikeParser.DEDENT, 0);
};

SuiteContext.prototype.stmt = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StmtContext);
    } else {
        return this.getTypedRuleContext(StmtContext,i);
    }
};

SuiteContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PythonLikeVisitor ) {
        return visitor.visitSuite(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PythonLikeParser.SuiteContext = SuiteContext;

PythonLikeParser.prototype.suite = function() {

    var localctx = new SuiteContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, PythonLikeParser.RULE_suite);
    var _la = 0; // Token type
    try {
        this.state = 184;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PythonLikeParser.T__2:
        case PythonLikeParser.T__4:
        case PythonLikeParser.RETURN:
        case PythonLikeParser.NOT:
        case PythonLikeParser.NONE:
        case PythonLikeParser.TRUE:
        case PythonLikeParser.FALSE:
        case PythonLikeParser.PASS:
        case PythonLikeParser.CONTINUE:
        case PythonLikeParser.BREAK:
        case PythonLikeParser.NAME:
        case PythonLikeParser.STRING_LITERAL:
        case PythonLikeParser.DECIMAL_INTEGER:
        case PythonLikeParser.FLOAT_NUMBER:
        case PythonLikeParser.OPEN_PAREN:
        case PythonLikeParser.ADD:
        case PythonLikeParser.MINUS:
            this.enterOuterAlt(localctx, 1);
            this.state = 174;
            this.simple_stmt();
            break;
        case PythonLikeParser.NEWLINE:
            this.enterOuterAlt(localctx, 2);
            this.state = 175;
            this.match(PythonLikeParser.NEWLINE);
            this.state = 176;
            this.match(PythonLikeParser.INDENT);
            this.state = 178; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 177;
                this.stmt();
                this.state = 180; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PythonLikeParser.T__0) | (1 << PythonLikeParser.T__2) | (1 << PythonLikeParser.T__4) | (1 << PythonLikeParser.DEF) | (1 << PythonLikeParser.RETURN) | (1 << PythonLikeParser.IF) | (1 << PythonLikeParser.WHILE) | (1 << PythonLikeParser.NOT) | (1 << PythonLikeParser.NONE) | (1 << PythonLikeParser.TRUE) | (1 << PythonLikeParser.FALSE) | (1 << PythonLikeParser.PASS) | (1 << PythonLikeParser.CONTINUE) | (1 << PythonLikeParser.BREAK) | (1 << PythonLikeParser.NAME) | (1 << PythonLikeParser.STRING_LITERAL) | (1 << PythonLikeParser.DECIMAL_INTEGER) | (1 << PythonLikeParser.FLOAT_NUMBER) | (1 << PythonLikeParser.OPEN_PAREN))) !== 0) || _la===PythonLikeParser.ADD || _la===PythonLikeParser.MINUS);
            this.state = 182;
            this.match(PythonLikeParser.DEDENT);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TestContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PythonLikeParser.RULE_test;
    return this;
}

TestContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TestContext.prototype.constructor = TestContext;

TestContext.prototype.or_test = function() {
    return this.getTypedRuleContext(Or_testContext,0);
};

TestContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PythonLikeVisitor ) {
        return visitor.visitTest(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PythonLikeParser.TestContext = TestContext;

PythonLikeParser.prototype.test = function() {

    var localctx = new TestContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, PythonLikeParser.RULE_test);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 186;
        this.or_test();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Or_testContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PythonLikeParser.RULE_or_test;
    return this;
}

Or_testContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Or_testContext.prototype.constructor = Or_testContext;

Or_testContext.prototype.and_test = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(And_testContext);
    } else {
        return this.getTypedRuleContext(And_testContext,i);
    }
};

Or_testContext.prototype.OR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PythonLikeParser.OR);
    } else {
        return this.getToken(PythonLikeParser.OR, i);
    }
};


Or_testContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PythonLikeVisitor ) {
        return visitor.visitOr_test(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PythonLikeParser.Or_testContext = Or_testContext;

PythonLikeParser.prototype.or_test = function() {

    var localctx = new Or_testContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, PythonLikeParser.RULE_or_test);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 188;
        this.and_test();
        this.state = 193;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===PythonLikeParser.OR) {
            this.state = 189;
            this.match(PythonLikeParser.OR);
            this.state = 190;
            this.and_test();
            this.state = 195;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function And_testContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PythonLikeParser.RULE_and_test;
    return this;
}

And_testContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
And_testContext.prototype.constructor = And_testContext;

And_testContext.prototype.not_test = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Not_testContext);
    } else {
        return this.getTypedRuleContext(Not_testContext,i);
    }
};

And_testContext.prototype.AND = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PythonLikeParser.AND);
    } else {
        return this.getToken(PythonLikeParser.AND, i);
    }
};


And_testContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PythonLikeVisitor ) {
        return visitor.visitAnd_test(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PythonLikeParser.And_testContext = And_testContext;

PythonLikeParser.prototype.and_test = function() {

    var localctx = new And_testContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, PythonLikeParser.RULE_and_test);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 196;
        this.not_test();
        this.state = 201;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===PythonLikeParser.AND) {
            this.state = 197;
            this.match(PythonLikeParser.AND);
            this.state = 198;
            this.not_test();
            this.state = 203;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Not_testContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PythonLikeParser.RULE_not_test;
    return this;
}

Not_testContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Not_testContext.prototype.constructor = Not_testContext;

Not_testContext.prototype.NOT = function() {
    return this.getToken(PythonLikeParser.NOT, 0);
};

Not_testContext.prototype.not_test = function() {
    return this.getTypedRuleContext(Not_testContext,0);
};

Not_testContext.prototype.comparison = function() {
    return this.getTypedRuleContext(ComparisonContext,0);
};

Not_testContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PythonLikeVisitor ) {
        return visitor.visitNot_test(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PythonLikeParser.Not_testContext = Not_testContext;

PythonLikeParser.prototype.not_test = function() {

    var localctx = new Not_testContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, PythonLikeParser.RULE_not_test);
    try {
        this.state = 207;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PythonLikeParser.NOT:
            this.enterOuterAlt(localctx, 1);
            this.state = 204;
            this.match(PythonLikeParser.NOT);
            this.state = 205;
            this.not_test();
            break;
        case PythonLikeParser.T__2:
        case PythonLikeParser.T__4:
        case PythonLikeParser.NONE:
        case PythonLikeParser.TRUE:
        case PythonLikeParser.FALSE:
        case PythonLikeParser.NAME:
        case PythonLikeParser.STRING_LITERAL:
        case PythonLikeParser.DECIMAL_INTEGER:
        case PythonLikeParser.FLOAT_NUMBER:
        case PythonLikeParser.OPEN_PAREN:
        case PythonLikeParser.ADD:
        case PythonLikeParser.MINUS:
            this.enterOuterAlt(localctx, 2);
            this.state = 206;
            this.comparison();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ComparisonContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PythonLikeParser.RULE_comparison;
    return this;
}

ComparisonContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ComparisonContext.prototype.constructor = ComparisonContext;

ComparisonContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ComparisonContext.prototype.comp_op = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Comp_opContext);
    } else {
        return this.getTypedRuleContext(Comp_opContext,i);
    }
};

ComparisonContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PythonLikeVisitor ) {
        return visitor.visitComparison(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PythonLikeParser.ComparisonContext = ComparisonContext;

PythonLikeParser.prototype.comparison = function() {

    var localctx = new ComparisonContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, PythonLikeParser.RULE_comparison);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 209;
        this.expr();
        this.state = 215;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 39)) & ~0x1f) == 0 && ((1 << (_la - 39)) & ((1 << (PythonLikeParser.LESS_THAN - 39)) | (1 << (PythonLikeParser.GREATER_THAN - 39)) | (1 << (PythonLikeParser.EQUALS - 39)) | (1 << (PythonLikeParser.GT_EQ - 39)) | (1 << (PythonLikeParser.LT_EQ - 39)) | (1 << (PythonLikeParser.NOT_EQ - 39)))) !== 0)) {
            this.state = 210;
            this.comp_op();
            this.state = 211;
            this.expr();
            this.state = 217;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Comp_opContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PythonLikeParser.RULE_comp_op;
    return this;
}

Comp_opContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Comp_opContext.prototype.constructor = Comp_opContext;


Comp_opContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PythonLikeVisitor ) {
        return visitor.visitComp_op(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PythonLikeParser.Comp_opContext = Comp_opContext;

PythonLikeParser.prototype.comp_op = function() {

    var localctx = new Comp_opContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, PythonLikeParser.RULE_comp_op);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 218;
        _la = this._input.LA(1);
        if(!(((((_la - 39)) & ~0x1f) == 0 && ((1 << (_la - 39)) & ((1 << (PythonLikeParser.LESS_THAN - 39)) | (1 << (PythonLikeParser.GREATER_THAN - 39)) | (1 << (PythonLikeParser.EQUALS - 39)) | (1 << (PythonLikeParser.GT_EQ - 39)) | (1 << (PythonLikeParser.LT_EQ - 39)) | (1 << (PythonLikeParser.NOT_EQ - 39)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PythonLikeParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.term = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TermContext);
    } else {
        return this.getTypedRuleContext(TermContext,i);
    }
};

ExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PythonLikeVisitor ) {
        return visitor.visitExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PythonLikeParser.ExprContext = ExprContext;

PythonLikeParser.prototype.expr = function() {

    var localctx = new ExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, PythonLikeParser.RULE_expr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 220;
        this.term();
        this.state = 227;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===PythonLikeParser.ADD || _la===PythonLikeParser.MINUS) {
            this.state = 225;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case PythonLikeParser.ADD:
                this.state = 221;
                this.match(PythonLikeParser.ADD);
                this.state = 222;
                this.term();
                break;
            case PythonLikeParser.MINUS:
                this.state = 223;
                this.match(PythonLikeParser.MINUS);
                this.state = 224;
                this.term();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 229;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TermContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PythonLikeParser.RULE_term;
    return this;
}

TermContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TermContext.prototype.constructor = TermContext;

TermContext.prototype.factor = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FactorContext);
    } else {
        return this.getTypedRuleContext(FactorContext,i);
    }
};

TermContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PythonLikeVisitor ) {
        return visitor.visitTerm(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PythonLikeParser.TermContext = TermContext;

PythonLikeParser.prototype.term = function() {

    var localctx = new TermContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, PythonLikeParser.RULE_term);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 230;
        this.factor();
        this.state = 239;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 28)) & ~0x1f) == 0 && ((1 << (_la - 28)) & ((1 << (PythonLikeParser.STAR - 28)) | (1 << (PythonLikeParser.DIV - 28)) | (1 << (PythonLikeParser.MOD - 28)))) !== 0)) {
            this.state = 237;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case PythonLikeParser.STAR:
                this.state = 231;
                this.match(PythonLikeParser.STAR);
                this.state = 232;
                this.factor();
                break;
            case PythonLikeParser.DIV:
                this.state = 233;
                this.match(PythonLikeParser.DIV);
                this.state = 234;
                this.factor();
                break;
            case PythonLikeParser.MOD:
                this.state = 235;
                this.match(PythonLikeParser.MOD);
                this.state = 236;
                this.factor();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 241;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FactorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PythonLikeParser.RULE_factor;
    return this;
}

FactorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FactorContext.prototype.constructor = FactorContext;

FactorContext.prototype.factor = function() {
    return this.getTypedRuleContext(FactorContext,0);
};

FactorContext.prototype.power = function() {
    return this.getTypedRuleContext(PowerContext,0);
};

FactorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PythonLikeVisitor ) {
        return visitor.visitFactor(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PythonLikeParser.FactorContext = FactorContext;

PythonLikeParser.prototype.factor = function() {

    var localctx = new FactorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, PythonLikeParser.RULE_factor);
    try {
        this.state = 247;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PythonLikeParser.ADD:
            this.enterOuterAlt(localctx, 1);
            this.state = 242;
            this.match(PythonLikeParser.ADD);
            this.state = 243;
            this.factor();
            break;
        case PythonLikeParser.MINUS:
            this.enterOuterAlt(localctx, 2);
            this.state = 244;
            this.match(PythonLikeParser.MINUS);
            this.state = 245;
            this.factor();
            break;
        case PythonLikeParser.T__2:
        case PythonLikeParser.T__4:
        case PythonLikeParser.NONE:
        case PythonLikeParser.TRUE:
        case PythonLikeParser.FALSE:
        case PythonLikeParser.NAME:
        case PythonLikeParser.STRING_LITERAL:
        case PythonLikeParser.DECIMAL_INTEGER:
        case PythonLikeParser.FLOAT_NUMBER:
        case PythonLikeParser.OPEN_PAREN:
            this.enterOuterAlt(localctx, 3);
            this.state = 246;
            this.power();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PowerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PythonLikeParser.RULE_power;
    return this;
}

PowerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PowerContext.prototype.constructor = PowerContext;

PowerContext.prototype.atom = function() {
    return this.getTypedRuleContext(AtomContext,0);
};

PowerContext.prototype.trailer = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TrailerContext);
    } else {
        return this.getTypedRuleContext(TrailerContext,i);
    }
};

PowerContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PythonLikeVisitor ) {
        return visitor.visitPower(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PythonLikeParser.PowerContext = PowerContext;

PythonLikeParser.prototype.power = function() {

    var localctx = new PowerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, PythonLikeParser.RULE_power);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 249;
        this.atom();
        this.state = 253;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PythonLikeParser.T__2) | (1 << PythonLikeParser.DOT) | (1 << PythonLikeParser.OPEN_PAREN))) !== 0)) {
            this.state = 250;
            this.trailer();
            this.state = 255;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AtomContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PythonLikeParser.RULE_atom;
    return this;
}

AtomContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AtomContext.prototype.constructor = AtomContext;

AtomContext.prototype.testlist = function() {
    return this.getTypedRuleContext(TestlistContext,0);
};

AtomContext.prototype.dictorsetmaker = function() {
    return this.getTypedRuleContext(DictorsetmakerContext,0);
};

AtomContext.prototype.NAME = function() {
    return this.getToken(PythonLikeParser.NAME, 0);
};

AtomContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

AtomContext.prototype.STRING_LITERAL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PythonLikeParser.STRING_LITERAL);
    } else {
        return this.getToken(PythonLikeParser.STRING_LITERAL, i);
    }
};


AtomContext.prototype.NONE = function() {
    return this.getToken(PythonLikeParser.NONE, 0);
};

AtomContext.prototype.TRUE = function() {
    return this.getToken(PythonLikeParser.TRUE, 0);
};

AtomContext.prototype.FALSE = function() {
    return this.getToken(PythonLikeParser.FALSE, 0);
};

AtomContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PythonLikeVisitor ) {
        return visitor.visitAtom(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PythonLikeParser.AtomContext = AtomContext;

PythonLikeParser.prototype.atom = function() {

    var localctx = new AtomContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, PythonLikeParser.RULE_atom);
    var _la = 0; // Token type
    try {
        this.state = 281;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PythonLikeParser.OPEN_PAREN:
            this.enterOuterAlt(localctx, 1);
            this.state = 256;
            this.match(PythonLikeParser.OPEN_PAREN);
            this.state = 258;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PythonLikeParser.T__2) | (1 << PythonLikeParser.T__4) | (1 << PythonLikeParser.NOT) | (1 << PythonLikeParser.NONE) | (1 << PythonLikeParser.TRUE) | (1 << PythonLikeParser.FALSE) | (1 << PythonLikeParser.NAME) | (1 << PythonLikeParser.STRING_LITERAL) | (1 << PythonLikeParser.DECIMAL_INTEGER) | (1 << PythonLikeParser.FLOAT_NUMBER) | (1 << PythonLikeParser.OPEN_PAREN))) !== 0) || _la===PythonLikeParser.ADD || _la===PythonLikeParser.MINUS) {
                this.state = 257;
                this.testlist();
            }

            this.state = 260;
            this.match(PythonLikeParser.CLOSE_PAREN);
            break;
        case PythonLikeParser.T__2:
            this.enterOuterAlt(localctx, 2);
            this.state = 261;
            this.match(PythonLikeParser.T__2);
            this.state = 263;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PythonLikeParser.T__2) | (1 << PythonLikeParser.T__4) | (1 << PythonLikeParser.NOT) | (1 << PythonLikeParser.NONE) | (1 << PythonLikeParser.TRUE) | (1 << PythonLikeParser.FALSE) | (1 << PythonLikeParser.NAME) | (1 << PythonLikeParser.STRING_LITERAL) | (1 << PythonLikeParser.DECIMAL_INTEGER) | (1 << PythonLikeParser.FLOAT_NUMBER) | (1 << PythonLikeParser.OPEN_PAREN))) !== 0) || _la===PythonLikeParser.ADD || _la===PythonLikeParser.MINUS) {
                this.state = 262;
                this.testlist();
            }

            this.state = 265;
            this.match(PythonLikeParser.T__3);
            break;
        case PythonLikeParser.T__4:
            this.enterOuterAlt(localctx, 3);
            this.state = 266;
            this.match(PythonLikeParser.T__4);
            this.state = 268;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PythonLikeParser.T__2) | (1 << PythonLikeParser.T__4) | (1 << PythonLikeParser.NOT) | (1 << PythonLikeParser.NONE) | (1 << PythonLikeParser.TRUE) | (1 << PythonLikeParser.FALSE) | (1 << PythonLikeParser.NAME) | (1 << PythonLikeParser.STRING_LITERAL) | (1 << PythonLikeParser.DECIMAL_INTEGER) | (1 << PythonLikeParser.FLOAT_NUMBER) | (1 << PythonLikeParser.OPEN_PAREN))) !== 0) || _la===PythonLikeParser.ADD || _la===PythonLikeParser.MINUS) {
                this.state = 267;
                this.dictorsetmaker();
            }

            this.state = 270;
            this.match(PythonLikeParser.T__5);
            break;
        case PythonLikeParser.NAME:
            this.enterOuterAlt(localctx, 4);
            this.state = 271;
            this.match(PythonLikeParser.NAME);
            break;
        case PythonLikeParser.DECIMAL_INTEGER:
        case PythonLikeParser.FLOAT_NUMBER:
            this.enterOuterAlt(localctx, 5);
            this.state = 272;
            this.number();
            break;
        case PythonLikeParser.STRING_LITERAL:
            this.enterOuterAlt(localctx, 6);
            this.state = 274; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 273;
                this.match(PythonLikeParser.STRING_LITERAL);
                this.state = 276; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===PythonLikeParser.STRING_LITERAL);
            break;
        case PythonLikeParser.NONE:
            this.enterOuterAlt(localctx, 7);
            this.state = 278;
            this.match(PythonLikeParser.NONE);
            break;
        case PythonLikeParser.TRUE:
            this.enterOuterAlt(localctx, 8);
            this.state = 279;
            this.match(PythonLikeParser.TRUE);
            break;
        case PythonLikeParser.FALSE:
            this.enterOuterAlt(localctx, 9);
            this.state = 280;
            this.match(PythonLikeParser.FALSE);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TestlistContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PythonLikeParser.RULE_testlist;
    return this;
}

TestlistContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TestlistContext.prototype.constructor = TestlistContext;

TestlistContext.prototype.test = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TestContext);
    } else {
        return this.getTypedRuleContext(TestContext,i);
    }
};

TestlistContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PythonLikeVisitor ) {
        return visitor.visitTestlist(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PythonLikeParser.TestlistContext = TestlistContext;

PythonLikeParser.prototype.testlist = function() {

    var localctx = new TestlistContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, PythonLikeParser.RULE_testlist);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 283;
        this.test();
        this.state = 288;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===PythonLikeParser.COMMA) {
            this.state = 284;
            this.match(PythonLikeParser.COMMA);
            this.state = 285;
            this.test();
            this.state = 290;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TrailerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PythonLikeParser.RULE_trailer;
    return this;
}

TrailerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TrailerContext.prototype.constructor = TrailerContext;

TrailerContext.prototype.testlist = function() {
    return this.getTypedRuleContext(TestlistContext,0);
};

TrailerContext.prototype.test = function() {
    return this.getTypedRuleContext(TestContext,0);
};

TrailerContext.prototype.NAME = function() {
    return this.getToken(PythonLikeParser.NAME, 0);
};

TrailerContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PythonLikeVisitor ) {
        return visitor.visitTrailer(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PythonLikeParser.TrailerContext = TrailerContext;

PythonLikeParser.prototype.trailer = function() {

    var localctx = new TrailerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, PythonLikeParser.RULE_trailer);
    var _la = 0; // Token type
    try {
        this.state = 302;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PythonLikeParser.OPEN_PAREN:
            this.enterOuterAlt(localctx, 1);
            this.state = 291;
            this.match(PythonLikeParser.OPEN_PAREN);
            this.state = 293;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PythonLikeParser.T__2) | (1 << PythonLikeParser.T__4) | (1 << PythonLikeParser.NOT) | (1 << PythonLikeParser.NONE) | (1 << PythonLikeParser.TRUE) | (1 << PythonLikeParser.FALSE) | (1 << PythonLikeParser.NAME) | (1 << PythonLikeParser.STRING_LITERAL) | (1 << PythonLikeParser.DECIMAL_INTEGER) | (1 << PythonLikeParser.FLOAT_NUMBER) | (1 << PythonLikeParser.OPEN_PAREN))) !== 0) || _la===PythonLikeParser.ADD || _la===PythonLikeParser.MINUS) {
                this.state = 292;
                this.testlist();
            }

            this.state = 295;
            this.match(PythonLikeParser.CLOSE_PAREN);
            break;
        case PythonLikeParser.T__2:
            this.enterOuterAlt(localctx, 2);
            this.state = 296;
            this.match(PythonLikeParser.T__2);
            this.state = 297;
            this.test();
            this.state = 298;
            this.match(PythonLikeParser.T__3);
            break;
        case PythonLikeParser.DOT:
            this.enterOuterAlt(localctx, 3);
            this.state = 300;
            this.match(PythonLikeParser.DOT);
            this.state = 301;
            this.match(PythonLikeParser.NAME);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DictorsetmakerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PythonLikeParser.RULE_dictorsetmaker;
    return this;
}

DictorsetmakerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DictorsetmakerContext.prototype.constructor = DictorsetmakerContext;

DictorsetmakerContext.prototype.test = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TestContext);
    } else {
        return this.getTypedRuleContext(TestContext,i);
    }
};

DictorsetmakerContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PythonLikeVisitor ) {
        return visitor.visitDictorsetmaker(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PythonLikeParser.DictorsetmakerContext = DictorsetmakerContext;

PythonLikeParser.prototype.dictorsetmaker = function() {

    var localctx = new DictorsetmakerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, PythonLikeParser.RULE_dictorsetmaker);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 304;
        this.test();
        this.state = 305;
        this.match(PythonLikeParser.COLON);
        this.state = 306;
        this.test();
        this.state = 314;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,36,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 307;
                this.match(PythonLikeParser.COMMA);

                this.state = 308;
                this.test();
                this.state = 309;
                this.match(PythonLikeParser.COLON);
                this.state = 310;
                this.test(); 
            }
            this.state = 316;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,36,this._ctx);
        }

        this.state = 318;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PythonLikeParser.COMMA) {
            this.state = 317;
            this.match(PythonLikeParser.COMMA);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NumberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PythonLikeParser.RULE_number;
    return this;
}

NumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberContext.prototype.constructor = NumberContext;

NumberContext.prototype.DECIMAL_INTEGER = function() {
    return this.getToken(PythonLikeParser.DECIMAL_INTEGER, 0);
};

NumberContext.prototype.FLOAT_NUMBER = function() {
    return this.getToken(PythonLikeParser.FLOAT_NUMBER, 0);
};

NumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PythonLikeVisitor ) {
        return visitor.visitNumber(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PythonLikeParser.NumberContext = NumberContext;

PythonLikeParser.prototype.number = function() {

    var localctx = new NumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, PythonLikeParser.RULE_number);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 320;
        _la = this._input.LA(1);
        if(!(_la===PythonLikeParser.DECIMAL_INTEGER || _la===PythonLikeParser.FLOAT_NUMBER)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.PythonLikeParser = PythonLikeParser;
