// Generated from grammars/Python3.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var Python3Listener = require('./Python3Listener').Python3Listener;
var Python3Visitor = require('./Python3Visitor').Python3Visitor;

var grammarFileName = "Python3.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u00032\u011b\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0003\u0002\u0003\u0002\u0007\u0002;\n\u0002",
    "\f\u0002\u000e\u0002>\u000b\u0002\u0003\u0002\u0003\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0005\u0004J\n\u0004\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0005\u0005Q\n\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0005\u0005W\n\u0005\u0007\u0005Y\n\u0005\f",
    "\u0005\u000e\u0005\\\u000b\u0005\u0003\u0006\u0003\u0006\u0005\u0006",
    "`\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u0007e\n\u0007\f",
    "\u0007\u000e\u0007h\u000b\u0007\u0003\u0007\u0005\u0007k\n\u0007\u0003",
    "\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005",
    "\bu\n\b\u0005\bw\n\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t",
    "\u0007\t\u007f\n\t\f\t\u000e\t\u0082\u000b\t\u0005\t\u0084\n\t\u0003",
    "\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u008b\n\u000b",
    "\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0007\f\u0096\n\f\f\f\u000e\f\u0099\u000b\f\u0003\f\u0003\f\u0003",
    "\f\u0005\f\u009e\n\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0006\u000e\u00a9\n\u000e\r\u000e",
    "\u000e\u000e\u00aa\u0003\u000e\u0003\u000e\u0005\u000e\u00af\n\u000e",
    "\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0007\u0010",
    "\u00b6\n\u0010\f\u0010\u000e\u0010\u00b9\u000b\u0010\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0007\u0011\u00be\n\u0011\f\u0011\u000e\u0011\u00c1",
    "\u000b\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0005\u0012\u00c6\n",
    "\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0007\u0013\u00cc",
    "\n\u0013\f\u0013\u000e\u0013\u00cf\u000b\u0013\u0003\u0014\u0003\u0014",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0007\u0015",
    "\u00d8\n\u0015\f\u0015\u000e\u0015\u00db\u000b\u0015\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0007",
    "\u0016\u00e4\n\u0016\f\u0016\u000e\u0016\u00e7\u000b\u0016\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0005\u0017\u00ee\n",
    "\u0017\u0003\u0018\u0003\u0018\u0007\u0018\u00f2\n\u0018\f\u0018\u000e",
    "\u0018\u00f5\u000b\u0018\u0003\u0019\u0003\u0019\u0005\u0019\u00f9\n",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0006\u0019\u00ff",
    "\n\u0019\r\u0019\u000e\u0019\u0100\u0003\u0019\u0003\u0019\u0003\u0019",
    "\u0005\u0019\u0106\n\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0007",
    "\u001a\u010b\n\u001a\f\u001a\u000e\u001a\u010e\u000b\u001a\u0003\u001b",
    "\u0003\u001b\u0005\u001b\u0112\n\u001b\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0005\u001b\u0117\n\u001b\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0002\u0002\u001d\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016",
    "\u0018\u001a\u001c\u001e \"$&(*,.0246\u0002\u0005\u0003\u0002*.\u0003",
    "\u0002#)\u0003\u0002\u0015\u0016\u0002\u012c\u0002<\u0003\u0002\u0002",
    "\u0002\u0004A\u0003\u0002\u0002\u0002\u0006G\u0003\u0002\u0002\u0002",
    "\bM\u0003\u0002\u0002\u0002\n_\u0003\u0002\u0002\u0002\fa\u0003\u0002",
    "\u0002\u0002\u000ev\u0003\u0002\u0002\u0002\u0010x\u0003\u0002\u0002",
    "\u0002\u0012\u0085\u0003\u0002\u0002\u0002\u0014\u008a\u0003\u0002\u0002",
    "\u0002\u0016\u008c\u0003\u0002\u0002\u0002\u0018\u009f\u0003\u0002\u0002",
    "\u0002\u001a\u00ae\u0003\u0002\u0002\u0002\u001c\u00b0\u0003\u0002\u0002",
    "\u0002\u001e\u00b2\u0003\u0002\u0002\u0002 \u00ba\u0003\u0002\u0002",
    "\u0002\"\u00c5\u0003\u0002\u0002\u0002$\u00c7\u0003\u0002\u0002\u0002",
    "&\u00d0\u0003\u0002\u0002\u0002(\u00d2\u0003\u0002\u0002\u0002*\u00dc",
    "\u0003\u0002\u0002\u0002,\u00ed\u0003\u0002\u0002\u0002.\u00ef\u0003",
    "\u0002\u0002\u00020\u0105\u0003\u0002\u0002\u00022\u0107\u0003\u0002",
    "\u0002\u00024\u0116\u0003\u0002\u0002\u00026\u0118\u0003\u0002\u0002",
    "\u00028;\u0007\u0012\u0002\u00029;\u0005\n\u0006\u0002:8\u0003\u0002",
    "\u0002\u0002:9\u0003\u0002\u0002\u0002;>\u0003\u0002\u0002\u0002<:\u0003",
    "\u0002\u0002\u0002<=\u0003\u0002\u0002\u0002=?\u0003\u0002\u0002\u0002",
    "><\u0003\u0002\u0002\u0002?@\u0007\u0002\u0002\u0003@\u0003\u0003\u0002",
    "\u0002\u0002AB\u0007\u0003\u0002\u0002BC\u0007\u0013\u0002\u0002CD\u0005",
    "\u0006\u0004\u0002DE\u0007\u001c\u0002\u0002EF\u0005\u001a\u000e\u0002",
    "F\u0005\u0003\u0002\u0002\u0002GI\u0007\u0019\u0002\u0002HJ\u0005\b",
    "\u0005\u0002IH\u0003\u0002\u0002\u0002IJ\u0003\u0002\u0002\u0002JK\u0003",
    "\u0002\u0002\u0002KL\u0007\u001a\u0002\u0002L\u0007\u0003\u0002\u0002",
    "\u0002MP\u0007\u0013\u0002\u0002NO\u0007\u001e\u0002\u0002OQ\u0005\u001c",
    "\u000f\u0002PN\u0003\u0002\u0002\u0002PQ\u0003\u0002\u0002\u0002QZ\u0003",
    "\u0002\u0002\u0002RS\u0007\u001b\u0002\u0002SV\u0007\u0013\u0002\u0002",
    "TU\u0007\u001e\u0002\u0002UW\u0005\u001c\u000f\u0002VT\u0003\u0002\u0002",
    "\u0002VW\u0003\u0002\u0002\u0002WY\u0003\u0002\u0002\u0002XR\u0003\u0002",
    "\u0002\u0002Y\\\u0003\u0002\u0002\u0002ZX\u0003\u0002\u0002\u0002Z[",
    "\u0003\u0002\u0002\u0002[\t\u0003\u0002\u0002\u0002\\Z\u0003\u0002\u0002",
    "\u0002]`\u0005\f\u0007\u0002^`\u0005\u0014\u000b\u0002_]\u0003\u0002",
    "\u0002\u0002_^\u0003\u0002\u0002\u0002`\u000b\u0003\u0002\u0002\u0002",
    "af\u0005\u000e\b\u0002bc\u0007\u001d\u0002\u0002ce\u0005\u000e\b\u0002",
    "db\u0003\u0002\u0002\u0002eh\u0003\u0002\u0002\u0002fd\u0003\u0002\u0002",
    "\u0002fg\u0003\u0002\u0002\u0002gj\u0003\u0002\u0002\u0002hf\u0003\u0002",
    "\u0002\u0002ik\u0007\u001d\u0002\u0002ji\u0003\u0002\u0002\u0002jk\u0003",
    "\u0002\u0002\u0002kl\u0003\u0002\u0002\u0002lm\u0007\u0012\u0002\u0002",
    "m\r\u0003\u0002\u0002\u0002nw\u0005\u0010\t\u0002ow\u0007\u000f\u0002",
    "\u0002pw\u0007\u0011\u0002\u0002qw\u0007\u0010\u0002\u0002rt\u0007\u0004",
    "\u0002\u0002su\u0005\u001c\u000f\u0002ts\u0003\u0002\u0002\u0002tu\u0003",
    "\u0002\u0002\u0002uw\u0003\u0002\u0002\u0002vn\u0003\u0002\u0002\u0002",
    "vo\u0003\u0002\u0002\u0002vp\u0003\u0002\u0002\u0002vq\u0003\u0002\u0002",
    "\u0002vr\u0003\u0002\u0002\u0002w\u000f\u0003\u0002\u0002\u0002x\u0083",
    "\u0005\u001c\u000f\u0002yz\u0005\u0012\n\u0002z{\u0005\u001c\u000f\u0002",
    "{\u0084\u0003\u0002\u0002\u0002|}\u0007\u001e\u0002\u0002}\u007f\u0005",
    "\u001c\u000f\u0002~|\u0003\u0002\u0002\u0002\u007f\u0082\u0003\u0002",
    "\u0002\u0002\u0080~\u0003\u0002\u0002\u0002\u0080\u0081\u0003\u0002",
    "\u0002\u0002\u0081\u0084\u0003\u0002\u0002\u0002\u0082\u0080\u0003\u0002",
    "\u0002\u0002\u0083y\u0003\u0002\u0002\u0002\u0083\u0080\u0003\u0002",
    "\u0002\u0002\u0084\u0011\u0003\u0002\u0002\u0002\u0085\u0086\t\u0002",
    "\u0002\u0002\u0086\u0013\u0003\u0002\u0002\u0002\u0087\u008b\u0005\u0016",
    "\f\u0002\u0088\u008b\u0005\u0018\r\u0002\u0089\u008b\u0005\u0004\u0003",
    "\u0002\u008a\u0087\u0003\u0002\u0002\u0002\u008a\u0088\u0003\u0002\u0002",
    "\u0002\u008a\u0089\u0003\u0002\u0002\u0002\u008b\u0015\u0003\u0002\u0002",
    "\u0002\u008c\u008d\u0007\u0005\u0002\u0002\u008d\u008e\u0005\u001c\u000f",
    "\u0002\u008e\u008f\u0007\u001c\u0002\u0002\u008f\u0097\u0005\u001a\u000e",
    "\u0002\u0090\u0091\u0007\u0006\u0002\u0002\u0091\u0092\u0005\u001c\u000f",
    "\u0002\u0092\u0093\u0007\u001c\u0002\u0002\u0093\u0094\u0005\u001a\u000e",
    "\u0002\u0094\u0096\u0003\u0002\u0002\u0002\u0095\u0090\u0003\u0002\u0002",
    "\u0002\u0096\u0099\u0003\u0002\u0002\u0002\u0097\u0095\u0003\u0002\u0002",
    "\u0002\u0097\u0098\u0003\u0002\u0002\u0002\u0098\u009d\u0003\u0002\u0002",
    "\u0002\u0099\u0097\u0003\u0002\u0002\u0002\u009a\u009b\u0007\u0007\u0002",
    "\u0002\u009b\u009c\u0007\u001c\u0002\u0002\u009c\u009e\u0005\u001a\u000e",
    "\u0002\u009d\u009a\u0003\u0002\u0002\u0002\u009d\u009e\u0003\u0002\u0002",
    "\u0002\u009e\u0017\u0003\u0002\u0002\u0002\u009f\u00a0\u0007\b\u0002",
    "\u0002\u00a0\u00a1\u0005\u001c\u000f\u0002\u00a1\u00a2\u0007\u001c\u0002",
    "\u0002\u00a2\u00a3\u0005\u001a\u000e\u0002\u00a3\u0019\u0003\u0002\u0002",
    "\u0002\u00a4\u00af\u0005\f\u0007\u0002\u00a5\u00a6\u0007\u0012\u0002",
    "\u0002\u00a6\u00a8\u00071\u0002\u0002\u00a7\u00a9\u0005\n\u0006\u0002",
    "\u00a8\u00a7\u0003\u0002\u0002\u0002\u00a9\u00aa\u0003\u0002\u0002\u0002",
    "\u00aa\u00a8\u0003\u0002\u0002\u0002\u00aa\u00ab\u0003\u0002\u0002\u0002",
    "\u00ab\u00ac\u0003\u0002\u0002\u0002\u00ac\u00ad\u00072\u0002\u0002",
    "\u00ad\u00af\u0003\u0002\u0002\u0002\u00ae\u00a4\u0003\u0002\u0002\u0002",
    "\u00ae\u00a5\u0003\u0002\u0002\u0002\u00af\u001b\u0003\u0002\u0002\u0002",
    "\u00b0\u00b1\u0005\u001e\u0010\u0002\u00b1\u001d\u0003\u0002\u0002\u0002",
    "\u00b2\u00b7\u0005 \u0011\u0002\u00b3\u00b4\u0007\t\u0002\u0002\u00b4",
    "\u00b6\u0005 \u0011\u0002\u00b5\u00b3\u0003\u0002\u0002\u0002\u00b6",
    "\u00b9\u0003\u0002\u0002\u0002\u00b7\u00b5\u0003\u0002\u0002\u0002\u00b7",
    "\u00b8\u0003\u0002\u0002\u0002\u00b8\u001f\u0003\u0002\u0002\u0002\u00b9",
    "\u00b7\u0003\u0002\u0002\u0002\u00ba\u00bf\u0005\"\u0012\u0002\u00bb",
    "\u00bc\u0007\n\u0002\u0002\u00bc\u00be\u0005\"\u0012\u0002\u00bd\u00bb",
    "\u0003\u0002\u0002\u0002\u00be\u00c1\u0003\u0002\u0002\u0002\u00bf\u00bd",
    "\u0003\u0002\u0002\u0002\u00bf\u00c0\u0003\u0002\u0002\u0002\u00c0!",
    "\u0003\u0002\u0002\u0002\u00c1\u00bf\u0003\u0002\u0002\u0002\u00c2\u00c3",
    "\u0007\u000b\u0002\u0002\u00c3\u00c6\u0005\"\u0012\u0002\u00c4\u00c6",
    "\u0005$\u0013\u0002\u00c5\u00c2\u0003\u0002\u0002\u0002\u00c5\u00c4",
    "\u0003\u0002\u0002\u0002\u00c6#\u0003\u0002\u0002\u0002\u00c7\u00cd",
    "\u0005(\u0015\u0002\u00c8\u00c9\u0005&\u0014\u0002\u00c9\u00ca\u0005",
    "(\u0015\u0002\u00ca\u00cc\u0003\u0002\u0002\u0002\u00cb\u00c8\u0003",
    "\u0002\u0002\u0002\u00cc\u00cf\u0003\u0002\u0002\u0002\u00cd\u00cb\u0003",
    "\u0002\u0002\u0002\u00cd\u00ce\u0003\u0002\u0002\u0002\u00ce%\u0003",
    "\u0002\u0002\u0002\u00cf\u00cd\u0003\u0002\u0002\u0002\u00d0\u00d1\t",
    "\u0003\u0002\u0002\u00d1\'\u0003\u0002\u0002\u0002\u00d2\u00d9\u0005",
    "*\u0016\u0002\u00d3\u00d4\u0007\u001f\u0002\u0002\u00d4\u00d8\u0005",
    "*\u0016\u0002\u00d5\u00d6\u0007 \u0002\u0002\u00d6\u00d8\u0005*\u0016",
    "\u0002\u00d7\u00d3\u0003\u0002\u0002\u0002\u00d7\u00d5\u0003\u0002\u0002",
    "\u0002\u00d8\u00db\u0003\u0002\u0002\u0002\u00d9\u00d7\u0003\u0002\u0002",
    "\u0002\u00d9\u00da\u0003\u0002\u0002\u0002\u00da)\u0003\u0002\u0002",
    "\u0002\u00db\u00d9\u0003\u0002\u0002\u0002\u00dc\u00e5\u0005,\u0017",
    "\u0002\u00dd\u00de\u0007\u0018\u0002\u0002\u00de\u00e4\u0005,\u0017",
    "\u0002\u00df\u00e0\u0007!\u0002\u0002\u00e0\u00e4\u0005,\u0017\u0002",
    "\u00e1\u00e2\u0007\"\u0002\u0002\u00e2\u00e4\u0005,\u0017\u0002\u00e3",
    "\u00dd\u0003\u0002\u0002\u0002\u00e3\u00df\u0003\u0002\u0002\u0002\u00e3",
    "\u00e1\u0003\u0002\u0002\u0002\u00e4\u00e7\u0003\u0002\u0002\u0002\u00e5",
    "\u00e3\u0003\u0002\u0002\u0002\u00e5\u00e6\u0003\u0002\u0002\u0002\u00e6",
    "+\u0003\u0002\u0002\u0002\u00e7\u00e5\u0003\u0002\u0002\u0002\u00e8",
    "\u00e9\u0007\u001f\u0002\u0002\u00e9\u00ee\u0005,\u0017\u0002\u00ea",
    "\u00eb\u0007 \u0002\u0002\u00eb\u00ee\u0005,\u0017\u0002\u00ec\u00ee",
    "\u0005.\u0018\u0002\u00ed\u00e8\u0003\u0002\u0002\u0002\u00ed\u00ea",
    "\u0003\u0002\u0002\u0002\u00ed\u00ec\u0003\u0002\u0002\u0002\u00ee-",
    "\u0003\u0002\u0002\u0002\u00ef\u00f3\u00050\u0019\u0002\u00f0\u00f2",
    "\u00054\u001b\u0002\u00f1\u00f0\u0003\u0002\u0002\u0002\u00f2\u00f5",
    "\u0003\u0002\u0002\u0002\u00f3\u00f1\u0003\u0002\u0002\u0002\u00f3\u00f4",
    "\u0003\u0002\u0002\u0002\u00f4/\u0003\u0002\u0002\u0002\u00f5\u00f3",
    "\u0003\u0002\u0002\u0002\u00f6\u00f8\u0007\u0019\u0002\u0002\u00f7\u00f9",
    "\u00052\u001a\u0002\u00f8\u00f7\u0003\u0002\u0002\u0002\u00f8\u00f9",
    "\u0003\u0002\u0002\u0002\u00f9\u00fa\u0003\u0002\u0002\u0002\u00fa\u0106",
    "\u0007\u001a\u0002\u0002\u00fb\u0106\u0007\u0013\u0002\u0002\u00fc\u0106",
    "\u00056\u001c\u0002\u00fd\u00ff\u0007\u0014\u0002\u0002\u00fe\u00fd",
    "\u0003\u0002\u0002\u0002\u00ff\u0100\u0003\u0002\u0002\u0002\u0100\u00fe",
    "\u0003\u0002\u0002\u0002\u0100\u0101\u0003\u0002\u0002\u0002\u0101\u0106",
    "\u0003\u0002\u0002\u0002\u0102\u0106\u0007\f\u0002\u0002\u0103\u0106",
    "\u0007\r\u0002\u0002\u0104\u0106\u0007\u000e\u0002\u0002\u0105\u00f6",
    "\u0003\u0002\u0002\u0002\u0105\u00fb\u0003\u0002\u0002\u0002\u0105\u00fc",
    "\u0003\u0002\u0002\u0002\u0105\u00fe\u0003\u0002\u0002\u0002\u0105\u0102",
    "\u0003\u0002\u0002\u0002\u0105\u0103\u0003\u0002\u0002\u0002\u0105\u0104",
    "\u0003\u0002\u0002\u0002\u01061\u0003\u0002\u0002\u0002\u0107\u010c",
    "\u0005\u001c\u000f\u0002\u0108\u0109\u0007\u001b\u0002\u0002\u0109\u010b",
    "\u0005\u001c\u000f\u0002\u010a\u0108\u0003\u0002\u0002\u0002\u010b\u010e",
    "\u0003\u0002\u0002\u0002\u010c\u010a\u0003\u0002\u0002\u0002\u010c\u010d",
    "\u0003\u0002\u0002\u0002\u010d3\u0003\u0002\u0002\u0002\u010e\u010c",
    "\u0003\u0002\u0002\u0002\u010f\u0111\u0007\u0019\u0002\u0002\u0110\u0112",
    "\u00052\u001a\u0002\u0111\u0110\u0003\u0002\u0002\u0002\u0111\u0112",
    "\u0003\u0002\u0002\u0002\u0112\u0113\u0003\u0002\u0002\u0002\u0113\u0117",
    "\u0007\u001a\u0002\u0002\u0114\u0115\u0007\u0017\u0002\u0002\u0115\u0117",
    "\u0007\u0013\u0002\u0002\u0116\u010f\u0003\u0002\u0002\u0002\u0116\u0114",
    "\u0003\u0002\u0002\u0002\u01175\u0003\u0002\u0002\u0002\u0118\u0119",
    "\t\u0004\u0002\u0002\u01197\u0003\u0002\u0002\u0002$:<IPVZ_fjtv\u0080",
    "\u0083\u008a\u0097\u009d\u00aa\u00ae\u00b7\u00bf\u00c5\u00cd\u00d7\u00d9",
    "\u00e3\u00e5\u00ed\u00f3\u00f8\u0100\u0105\u010c\u0111\u0116"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'def'", "'return'", "'if'", "'elif'", "'else'", 
                     "'while'", "'or'", "'and'", "'not'", "'None'", "'True'", 
                     "'False'", "'pass'", "'continue'", "'break'", null, 
                     null, null, null, null, "'.'", "'*'", "'('", "')'", 
                     "','", "':'", "';'", "'='", "'+'", "'-'", "'/'", "'%'", 
                     "'<'", "'>'", "'=='", "'>='", "'<='", "'<>'", "'!='", 
                     "'+='", "'-='", "'*='", "'/='", "'%='" ];

var symbolicNames = [ null, "DEF", "RETURN", "IF", "ELIF", "ELSE", "WHILE", 
                      "OR", "AND", "NOT", "NONE", "TRUE", "FALSE", "PASS", 
                      "CONTINUE", "BREAK", "NEWLINE", "NAME", "STRING_LITERAL", 
                      "DECIMAL_INTEGER", "FLOAT_NUMBER", "DOT", "STAR", 
                      "OPEN_PAREN", "CLOSE_PAREN", "COMMA", "COLON", "SEMI_COLON", 
                      "ASSIGN", "ADD", "MINUS", "DIV", "MOD", "LESS_THAN", 
                      "GREATER_THAN", "EQUALS", "GT_EQ", "LT_EQ", "NOT_EQ_1", 
                      "NOT_EQ_2", "ADD_ASSIGN", "SUB_ASSIGN", "MULT_ASSIGN", 
                      "DIV_ASSIGN", "MOD_ASSIGN", "SKIP_", "UNKNOWN_CHAR", 
                      "INDENT", "DEDENT" ];

var ruleNames =  [ "file_input", "funcdef", "parameters", "argslist", "stmt", 
                   "simple_stmt", "small_stmt", "expr_stmt", "augassign", 
                   "compound_stmt", "if_stmt", "while_stmt", "suite", "test", 
                   "or_test", "and_test", "not_test", "comparison", "comp_op", 
                   "expr", "term", "factor", "power", "atom", "testlist", 
                   "trailer", "number" ];

function Python3Parser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

Python3Parser.prototype = Object.create(antlr4.Parser.prototype);
Python3Parser.prototype.constructor = Python3Parser;

Object.defineProperty(Python3Parser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

Python3Parser.EOF = antlr4.Token.EOF;
Python3Parser.DEF = 1;
Python3Parser.RETURN = 2;
Python3Parser.IF = 3;
Python3Parser.ELIF = 4;
Python3Parser.ELSE = 5;
Python3Parser.WHILE = 6;
Python3Parser.OR = 7;
Python3Parser.AND = 8;
Python3Parser.NOT = 9;
Python3Parser.NONE = 10;
Python3Parser.TRUE = 11;
Python3Parser.FALSE = 12;
Python3Parser.PASS = 13;
Python3Parser.CONTINUE = 14;
Python3Parser.BREAK = 15;
Python3Parser.NEWLINE = 16;
Python3Parser.NAME = 17;
Python3Parser.STRING_LITERAL = 18;
Python3Parser.DECIMAL_INTEGER = 19;
Python3Parser.FLOAT_NUMBER = 20;
Python3Parser.DOT = 21;
Python3Parser.STAR = 22;
Python3Parser.OPEN_PAREN = 23;
Python3Parser.CLOSE_PAREN = 24;
Python3Parser.COMMA = 25;
Python3Parser.COLON = 26;
Python3Parser.SEMI_COLON = 27;
Python3Parser.ASSIGN = 28;
Python3Parser.ADD = 29;
Python3Parser.MINUS = 30;
Python3Parser.DIV = 31;
Python3Parser.MOD = 32;
Python3Parser.LESS_THAN = 33;
Python3Parser.GREATER_THAN = 34;
Python3Parser.EQUALS = 35;
Python3Parser.GT_EQ = 36;
Python3Parser.LT_EQ = 37;
Python3Parser.NOT_EQ_1 = 38;
Python3Parser.NOT_EQ_2 = 39;
Python3Parser.ADD_ASSIGN = 40;
Python3Parser.SUB_ASSIGN = 41;
Python3Parser.MULT_ASSIGN = 42;
Python3Parser.DIV_ASSIGN = 43;
Python3Parser.MOD_ASSIGN = 44;
Python3Parser.SKIP_ = 45;
Python3Parser.UNKNOWN_CHAR = 46;
Python3Parser.INDENT = 47;
Python3Parser.DEDENT = 48;

Python3Parser.RULE_file_input = 0;
Python3Parser.RULE_funcdef = 1;
Python3Parser.RULE_parameters = 2;
Python3Parser.RULE_argslist = 3;
Python3Parser.RULE_stmt = 4;
Python3Parser.RULE_simple_stmt = 5;
Python3Parser.RULE_small_stmt = 6;
Python3Parser.RULE_expr_stmt = 7;
Python3Parser.RULE_augassign = 8;
Python3Parser.RULE_compound_stmt = 9;
Python3Parser.RULE_if_stmt = 10;
Python3Parser.RULE_while_stmt = 11;
Python3Parser.RULE_suite = 12;
Python3Parser.RULE_test = 13;
Python3Parser.RULE_or_test = 14;
Python3Parser.RULE_and_test = 15;
Python3Parser.RULE_not_test = 16;
Python3Parser.RULE_comparison = 17;
Python3Parser.RULE_comp_op = 18;
Python3Parser.RULE_expr = 19;
Python3Parser.RULE_term = 20;
Python3Parser.RULE_factor = 21;
Python3Parser.RULE_power = 22;
Python3Parser.RULE_atom = 23;
Python3Parser.RULE_testlist = 24;
Python3Parser.RULE_trailer = 25;
Python3Parser.RULE_number = 26;

function File_inputContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Python3Parser.RULE_file_input;
    return this;
}

File_inputContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
File_inputContext.prototype.constructor = File_inputContext;

File_inputContext.prototype.EOF = function() {
    return this.getToken(Python3Parser.EOF, 0);
};

File_inputContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(Python3Parser.NEWLINE);
    } else {
        return this.getToken(Python3Parser.NEWLINE, i);
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

File_inputContext.prototype.enterRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.enterFile_input(this);
	}
};

File_inputContext.prototype.exitRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.exitFile_input(this);
	}
};

File_inputContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Python3Visitor ) {
        return visitor.visitFile_input(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Python3Parser.File_inputContext = File_inputContext;

Python3Parser.prototype.file_input = function() {

    var localctx = new File_inputContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, Python3Parser.RULE_file_input);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 58;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << Python3Parser.DEF) | (1 << Python3Parser.RETURN) | (1 << Python3Parser.IF) | (1 << Python3Parser.WHILE) | (1 << Python3Parser.NOT) | (1 << Python3Parser.NONE) | (1 << Python3Parser.TRUE) | (1 << Python3Parser.FALSE) | (1 << Python3Parser.PASS) | (1 << Python3Parser.CONTINUE) | (1 << Python3Parser.BREAK) | (1 << Python3Parser.NEWLINE) | (1 << Python3Parser.NAME) | (1 << Python3Parser.STRING_LITERAL) | (1 << Python3Parser.DECIMAL_INTEGER) | (1 << Python3Parser.FLOAT_NUMBER) | (1 << Python3Parser.OPEN_PAREN) | (1 << Python3Parser.ADD) | (1 << Python3Parser.MINUS))) !== 0)) {
            this.state = 56;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case Python3Parser.NEWLINE:
                this.state = 54;
                this.match(Python3Parser.NEWLINE);
                break;
            case Python3Parser.DEF:
            case Python3Parser.RETURN:
            case Python3Parser.IF:
            case Python3Parser.WHILE:
            case Python3Parser.NOT:
            case Python3Parser.NONE:
            case Python3Parser.TRUE:
            case Python3Parser.FALSE:
            case Python3Parser.PASS:
            case Python3Parser.CONTINUE:
            case Python3Parser.BREAK:
            case Python3Parser.NAME:
            case Python3Parser.STRING_LITERAL:
            case Python3Parser.DECIMAL_INTEGER:
            case Python3Parser.FLOAT_NUMBER:
            case Python3Parser.OPEN_PAREN:
            case Python3Parser.ADD:
            case Python3Parser.MINUS:
                this.state = 55;
                this.stmt();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 60;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 61;
        this.match(Python3Parser.EOF);
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
    this.ruleIndex = Python3Parser.RULE_funcdef;
    return this;
}

FuncdefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FuncdefContext.prototype.constructor = FuncdefContext;

FuncdefContext.prototype.DEF = function() {
    return this.getToken(Python3Parser.DEF, 0);
};

FuncdefContext.prototype.NAME = function() {
    return this.getToken(Python3Parser.NAME, 0);
};

FuncdefContext.prototype.parameters = function() {
    return this.getTypedRuleContext(ParametersContext,0);
};

FuncdefContext.prototype.suite = function() {
    return this.getTypedRuleContext(SuiteContext,0);
};

FuncdefContext.prototype.enterRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.enterFuncdef(this);
	}
};

FuncdefContext.prototype.exitRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.exitFuncdef(this);
	}
};

FuncdefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Python3Visitor ) {
        return visitor.visitFuncdef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Python3Parser.FuncdefContext = FuncdefContext;

Python3Parser.prototype.funcdef = function() {

    var localctx = new FuncdefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, Python3Parser.RULE_funcdef);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 63;
        this.match(Python3Parser.DEF);
        this.state = 64;
        this.match(Python3Parser.NAME);
        this.state = 65;
        this.parameters();
        this.state = 66;
        this.match(Python3Parser.COLON);
        this.state = 67;
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
    this.ruleIndex = Python3Parser.RULE_parameters;
    return this;
}

ParametersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParametersContext.prototype.constructor = ParametersContext;

ParametersContext.prototype.argslist = function() {
    return this.getTypedRuleContext(ArgslistContext,0);
};

ParametersContext.prototype.enterRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.enterParameters(this);
	}
};

ParametersContext.prototype.exitRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.exitParameters(this);
	}
};

ParametersContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Python3Visitor ) {
        return visitor.visitParameters(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Python3Parser.ParametersContext = ParametersContext;

Python3Parser.prototype.parameters = function() {

    var localctx = new ParametersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, Python3Parser.RULE_parameters);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 69;
        this.match(Python3Parser.OPEN_PAREN);
        this.state = 71;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===Python3Parser.NAME) {
            this.state = 70;
            this.argslist();
        }

        this.state = 73;
        this.match(Python3Parser.CLOSE_PAREN);
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
    this.ruleIndex = Python3Parser.RULE_argslist;
    return this;
}

ArgslistContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgslistContext.prototype.constructor = ArgslistContext;

ArgslistContext.prototype.NAME = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(Python3Parser.NAME);
    } else {
        return this.getToken(Python3Parser.NAME, i);
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

ArgslistContext.prototype.enterRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.enterArgslist(this);
	}
};

ArgslistContext.prototype.exitRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.exitArgslist(this);
	}
};

ArgslistContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Python3Visitor ) {
        return visitor.visitArgslist(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Python3Parser.ArgslistContext = ArgslistContext;

Python3Parser.prototype.argslist = function() {

    var localctx = new ArgslistContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, Python3Parser.RULE_argslist);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 75;
        this.match(Python3Parser.NAME);
        this.state = 78;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===Python3Parser.ASSIGN) {
            this.state = 76;
            this.match(Python3Parser.ASSIGN);
            this.state = 77;
            this.test();
        }

        this.state = 88;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===Python3Parser.COMMA) {
            this.state = 80;
            this.match(Python3Parser.COMMA);
            this.state = 81;
            this.match(Python3Parser.NAME);
            this.state = 84;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===Python3Parser.ASSIGN) {
                this.state = 82;
                this.match(Python3Parser.ASSIGN);
                this.state = 83;
                this.test();
            }

            this.state = 90;
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
    this.ruleIndex = Python3Parser.RULE_stmt;
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

StmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.enterStmt(this);
	}
};

StmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.exitStmt(this);
	}
};

StmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Python3Visitor ) {
        return visitor.visitStmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Python3Parser.StmtContext = StmtContext;

Python3Parser.prototype.stmt = function() {

    var localctx = new StmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, Python3Parser.RULE_stmt);
    try {
        this.state = 93;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case Python3Parser.RETURN:
        case Python3Parser.NOT:
        case Python3Parser.NONE:
        case Python3Parser.TRUE:
        case Python3Parser.FALSE:
        case Python3Parser.PASS:
        case Python3Parser.CONTINUE:
        case Python3Parser.BREAK:
        case Python3Parser.NAME:
        case Python3Parser.STRING_LITERAL:
        case Python3Parser.DECIMAL_INTEGER:
        case Python3Parser.FLOAT_NUMBER:
        case Python3Parser.OPEN_PAREN:
        case Python3Parser.ADD:
        case Python3Parser.MINUS:
            this.enterOuterAlt(localctx, 1);
            this.state = 91;
            this.simple_stmt();
            break;
        case Python3Parser.DEF:
        case Python3Parser.IF:
        case Python3Parser.WHILE:
            this.enterOuterAlt(localctx, 2);
            this.state = 92;
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
    this.ruleIndex = Python3Parser.RULE_simple_stmt;
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
    return this.getToken(Python3Parser.NEWLINE, 0);
};

Simple_stmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.enterSimple_stmt(this);
	}
};

Simple_stmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.exitSimple_stmt(this);
	}
};

Simple_stmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Python3Visitor ) {
        return visitor.visitSimple_stmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Python3Parser.Simple_stmtContext = Simple_stmtContext;

Python3Parser.prototype.simple_stmt = function() {

    var localctx = new Simple_stmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, Python3Parser.RULE_simple_stmt);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 95;
        this.small_stmt();
        this.state = 100;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 96;
                this.match(Python3Parser.SEMI_COLON);
                this.state = 97;
                this.small_stmt(); 
            }
            this.state = 102;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
        }

        this.state = 104;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===Python3Parser.SEMI_COLON) {
            this.state = 103;
            this.match(Python3Parser.SEMI_COLON);
        }

        this.state = 106;
        this.match(Python3Parser.NEWLINE);
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
    this.ruleIndex = Python3Parser.RULE_small_stmt;
    return this;
}

Small_stmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Small_stmtContext.prototype.constructor = Small_stmtContext;

Small_stmtContext.prototype.expr_stmt = function() {
    return this.getTypedRuleContext(Expr_stmtContext,0);
};

Small_stmtContext.prototype.PASS = function() {
    return this.getToken(Python3Parser.PASS, 0);
};

Small_stmtContext.prototype.BREAK = function() {
    return this.getToken(Python3Parser.BREAK, 0);
};

Small_stmtContext.prototype.CONTINUE = function() {
    return this.getToken(Python3Parser.CONTINUE, 0);
};

Small_stmtContext.prototype.RETURN = function() {
    return this.getToken(Python3Parser.RETURN, 0);
};

Small_stmtContext.prototype.test = function() {
    return this.getTypedRuleContext(TestContext,0);
};

Small_stmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.enterSmall_stmt(this);
	}
};

Small_stmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.exitSmall_stmt(this);
	}
};

Small_stmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Python3Visitor ) {
        return visitor.visitSmall_stmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Python3Parser.Small_stmtContext = Small_stmtContext;

Python3Parser.prototype.small_stmt = function() {

    var localctx = new Small_stmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, Python3Parser.RULE_small_stmt);
    var _la = 0; // Token type
    try {
        this.state = 116;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case Python3Parser.NOT:
        case Python3Parser.NONE:
        case Python3Parser.TRUE:
        case Python3Parser.FALSE:
        case Python3Parser.NAME:
        case Python3Parser.STRING_LITERAL:
        case Python3Parser.DECIMAL_INTEGER:
        case Python3Parser.FLOAT_NUMBER:
        case Python3Parser.OPEN_PAREN:
        case Python3Parser.ADD:
        case Python3Parser.MINUS:
            this.enterOuterAlt(localctx, 1);
            this.state = 108;
            this.expr_stmt();
            break;
        case Python3Parser.PASS:
            this.enterOuterAlt(localctx, 2);
            this.state = 109;
            this.match(Python3Parser.PASS);
            break;
        case Python3Parser.BREAK:
            this.enterOuterAlt(localctx, 3);
            this.state = 110;
            this.match(Python3Parser.BREAK);
            break;
        case Python3Parser.CONTINUE:
            this.enterOuterAlt(localctx, 4);
            this.state = 111;
            this.match(Python3Parser.CONTINUE);
            break;
        case Python3Parser.RETURN:
            this.enterOuterAlt(localctx, 5);
            this.state = 112;
            this.match(Python3Parser.RETURN);
            this.state = 114;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << Python3Parser.NOT) | (1 << Python3Parser.NONE) | (1 << Python3Parser.TRUE) | (1 << Python3Parser.FALSE) | (1 << Python3Parser.NAME) | (1 << Python3Parser.STRING_LITERAL) | (1 << Python3Parser.DECIMAL_INTEGER) | (1 << Python3Parser.FLOAT_NUMBER) | (1 << Python3Parser.OPEN_PAREN) | (1 << Python3Parser.ADD) | (1 << Python3Parser.MINUS))) !== 0)) {
                this.state = 113;
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
    this.ruleIndex = Python3Parser.RULE_expr_stmt;
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

Expr_stmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.enterExpr_stmt(this);
	}
};

Expr_stmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.exitExpr_stmt(this);
	}
};

Expr_stmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Python3Visitor ) {
        return visitor.visitExpr_stmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Python3Parser.Expr_stmtContext = Expr_stmtContext;

Python3Parser.prototype.expr_stmt = function() {

    var localctx = new Expr_stmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, Python3Parser.RULE_expr_stmt);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 118;
        this.test();
        this.state = 129;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case Python3Parser.ADD_ASSIGN:
        case Python3Parser.SUB_ASSIGN:
        case Python3Parser.MULT_ASSIGN:
        case Python3Parser.DIV_ASSIGN:
        case Python3Parser.MOD_ASSIGN:
            this.state = 119;
            this.augassign();
            this.state = 120;
            this.test();
            break;
        case Python3Parser.NEWLINE:
        case Python3Parser.SEMI_COLON:
        case Python3Parser.ASSIGN:
            this.state = 126;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===Python3Parser.ASSIGN) {
                this.state = 122;
                this.match(Python3Parser.ASSIGN);
                this.state = 123;
                this.test();
                this.state = 128;
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
    this.ruleIndex = Python3Parser.RULE_augassign;
    return this;
}

AugassignContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AugassignContext.prototype.constructor = AugassignContext;


AugassignContext.prototype.enterRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.enterAugassign(this);
	}
};

AugassignContext.prototype.exitRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.exitAugassign(this);
	}
};

AugassignContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Python3Visitor ) {
        return visitor.visitAugassign(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Python3Parser.AugassignContext = AugassignContext;

Python3Parser.prototype.augassign = function() {

    var localctx = new AugassignContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, Python3Parser.RULE_augassign);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 131;
        _la = this._input.LA(1);
        if(!(((((_la - 40)) & ~0x1f) == 0 && ((1 << (_la - 40)) & ((1 << (Python3Parser.ADD_ASSIGN - 40)) | (1 << (Python3Parser.SUB_ASSIGN - 40)) | (1 << (Python3Parser.MULT_ASSIGN - 40)) | (1 << (Python3Parser.DIV_ASSIGN - 40)) | (1 << (Python3Parser.MOD_ASSIGN - 40)))) !== 0))) {
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
    this.ruleIndex = Python3Parser.RULE_compound_stmt;
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

Compound_stmtContext.prototype.funcdef = function() {
    return this.getTypedRuleContext(FuncdefContext,0);
};

Compound_stmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.enterCompound_stmt(this);
	}
};

Compound_stmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.exitCompound_stmt(this);
	}
};

Compound_stmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Python3Visitor ) {
        return visitor.visitCompound_stmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Python3Parser.Compound_stmtContext = Compound_stmtContext;

Python3Parser.prototype.compound_stmt = function() {

    var localctx = new Compound_stmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, Python3Parser.RULE_compound_stmt);
    try {
        this.state = 136;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case Python3Parser.IF:
            this.enterOuterAlt(localctx, 1);
            this.state = 133;
            this.if_stmt();
            break;
        case Python3Parser.WHILE:
            this.enterOuterAlt(localctx, 2);
            this.state = 134;
            this.while_stmt();
            break;
        case Python3Parser.DEF:
            this.enterOuterAlt(localctx, 3);
            this.state = 135;
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
    this.ruleIndex = Python3Parser.RULE_if_stmt;
    return this;
}

If_stmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
If_stmtContext.prototype.constructor = If_stmtContext;

If_stmtContext.prototype.IF = function() {
    return this.getToken(Python3Parser.IF, 0);
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
        return this.getTokens(Python3Parser.ELIF);
    } else {
        return this.getToken(Python3Parser.ELIF, i);
    }
};


If_stmtContext.prototype.ELSE = function() {
    return this.getToken(Python3Parser.ELSE, 0);
};

If_stmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.enterIf_stmt(this);
	}
};

If_stmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.exitIf_stmt(this);
	}
};

If_stmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Python3Visitor ) {
        return visitor.visitIf_stmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Python3Parser.If_stmtContext = If_stmtContext;

Python3Parser.prototype.if_stmt = function() {

    var localctx = new If_stmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, Python3Parser.RULE_if_stmt);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 138;
        this.match(Python3Parser.IF);
        this.state = 139;
        this.test();
        this.state = 140;
        this.match(Python3Parser.COLON);
        this.state = 141;
        this.suite();
        this.state = 149;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===Python3Parser.ELIF) {
            this.state = 142;
            this.match(Python3Parser.ELIF);
            this.state = 143;
            this.test();
            this.state = 144;
            this.match(Python3Parser.COLON);
            this.state = 145;
            this.suite();
            this.state = 151;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 155;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===Python3Parser.ELSE) {
            this.state = 152;
            this.match(Python3Parser.ELSE);
            this.state = 153;
            this.match(Python3Parser.COLON);
            this.state = 154;
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
    this.ruleIndex = Python3Parser.RULE_while_stmt;
    return this;
}

While_stmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
While_stmtContext.prototype.constructor = While_stmtContext;

While_stmtContext.prototype.WHILE = function() {
    return this.getToken(Python3Parser.WHILE, 0);
};

While_stmtContext.prototype.test = function() {
    return this.getTypedRuleContext(TestContext,0);
};

While_stmtContext.prototype.suite = function() {
    return this.getTypedRuleContext(SuiteContext,0);
};

While_stmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.enterWhile_stmt(this);
	}
};

While_stmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.exitWhile_stmt(this);
	}
};

While_stmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Python3Visitor ) {
        return visitor.visitWhile_stmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Python3Parser.While_stmtContext = While_stmtContext;

Python3Parser.prototype.while_stmt = function() {

    var localctx = new While_stmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, Python3Parser.RULE_while_stmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 157;
        this.match(Python3Parser.WHILE);
        this.state = 158;
        this.test();
        this.state = 159;
        this.match(Python3Parser.COLON);
        this.state = 160;
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
    this.ruleIndex = Python3Parser.RULE_suite;
    return this;
}

SuiteContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SuiteContext.prototype.constructor = SuiteContext;

SuiteContext.prototype.simple_stmt = function() {
    return this.getTypedRuleContext(Simple_stmtContext,0);
};

SuiteContext.prototype.NEWLINE = function() {
    return this.getToken(Python3Parser.NEWLINE, 0);
};

SuiteContext.prototype.INDENT = function() {
    return this.getToken(Python3Parser.INDENT, 0);
};

SuiteContext.prototype.DEDENT = function() {
    return this.getToken(Python3Parser.DEDENT, 0);
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

SuiteContext.prototype.enterRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.enterSuite(this);
	}
};

SuiteContext.prototype.exitRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.exitSuite(this);
	}
};

SuiteContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Python3Visitor ) {
        return visitor.visitSuite(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Python3Parser.SuiteContext = SuiteContext;

Python3Parser.prototype.suite = function() {

    var localctx = new SuiteContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, Python3Parser.RULE_suite);
    var _la = 0; // Token type
    try {
        this.state = 172;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case Python3Parser.RETURN:
        case Python3Parser.NOT:
        case Python3Parser.NONE:
        case Python3Parser.TRUE:
        case Python3Parser.FALSE:
        case Python3Parser.PASS:
        case Python3Parser.CONTINUE:
        case Python3Parser.BREAK:
        case Python3Parser.NAME:
        case Python3Parser.STRING_LITERAL:
        case Python3Parser.DECIMAL_INTEGER:
        case Python3Parser.FLOAT_NUMBER:
        case Python3Parser.OPEN_PAREN:
        case Python3Parser.ADD:
        case Python3Parser.MINUS:
            this.enterOuterAlt(localctx, 1);
            this.state = 162;
            this.simple_stmt();
            break;
        case Python3Parser.NEWLINE:
            this.enterOuterAlt(localctx, 2);
            this.state = 163;
            this.match(Python3Parser.NEWLINE);
            this.state = 164;
            this.match(Python3Parser.INDENT);
            this.state = 166; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 165;
                this.stmt();
                this.state = 168; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << Python3Parser.DEF) | (1 << Python3Parser.RETURN) | (1 << Python3Parser.IF) | (1 << Python3Parser.WHILE) | (1 << Python3Parser.NOT) | (1 << Python3Parser.NONE) | (1 << Python3Parser.TRUE) | (1 << Python3Parser.FALSE) | (1 << Python3Parser.PASS) | (1 << Python3Parser.CONTINUE) | (1 << Python3Parser.BREAK) | (1 << Python3Parser.NAME) | (1 << Python3Parser.STRING_LITERAL) | (1 << Python3Parser.DECIMAL_INTEGER) | (1 << Python3Parser.FLOAT_NUMBER) | (1 << Python3Parser.OPEN_PAREN) | (1 << Python3Parser.ADD) | (1 << Python3Parser.MINUS))) !== 0));
            this.state = 170;
            this.match(Python3Parser.DEDENT);
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
    this.ruleIndex = Python3Parser.RULE_test;
    return this;
}

TestContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TestContext.prototype.constructor = TestContext;

TestContext.prototype.or_test = function() {
    return this.getTypedRuleContext(Or_testContext,0);
};

TestContext.prototype.enterRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.enterTest(this);
	}
};

TestContext.prototype.exitRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.exitTest(this);
	}
};

TestContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Python3Visitor ) {
        return visitor.visitTest(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Python3Parser.TestContext = TestContext;

Python3Parser.prototype.test = function() {

    var localctx = new TestContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, Python3Parser.RULE_test);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 174;
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
    this.ruleIndex = Python3Parser.RULE_or_test;
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
        return this.getTokens(Python3Parser.OR);
    } else {
        return this.getToken(Python3Parser.OR, i);
    }
};


Or_testContext.prototype.enterRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.enterOr_test(this);
	}
};

Or_testContext.prototype.exitRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.exitOr_test(this);
	}
};

Or_testContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Python3Visitor ) {
        return visitor.visitOr_test(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Python3Parser.Or_testContext = Or_testContext;

Python3Parser.prototype.or_test = function() {

    var localctx = new Or_testContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, Python3Parser.RULE_or_test);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 176;
        this.and_test();
        this.state = 181;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===Python3Parser.OR) {
            this.state = 177;
            this.match(Python3Parser.OR);
            this.state = 178;
            this.and_test();
            this.state = 183;
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
    this.ruleIndex = Python3Parser.RULE_and_test;
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
        return this.getTokens(Python3Parser.AND);
    } else {
        return this.getToken(Python3Parser.AND, i);
    }
};


And_testContext.prototype.enterRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.enterAnd_test(this);
	}
};

And_testContext.prototype.exitRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.exitAnd_test(this);
	}
};

And_testContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Python3Visitor ) {
        return visitor.visitAnd_test(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Python3Parser.And_testContext = And_testContext;

Python3Parser.prototype.and_test = function() {

    var localctx = new And_testContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, Python3Parser.RULE_and_test);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 184;
        this.not_test();
        this.state = 189;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===Python3Parser.AND) {
            this.state = 185;
            this.match(Python3Parser.AND);
            this.state = 186;
            this.not_test();
            this.state = 191;
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
    this.ruleIndex = Python3Parser.RULE_not_test;
    return this;
}

Not_testContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Not_testContext.prototype.constructor = Not_testContext;

Not_testContext.prototype.NOT = function() {
    return this.getToken(Python3Parser.NOT, 0);
};

Not_testContext.prototype.not_test = function() {
    return this.getTypedRuleContext(Not_testContext,0);
};

Not_testContext.prototype.comparison = function() {
    return this.getTypedRuleContext(ComparisonContext,0);
};

Not_testContext.prototype.enterRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.enterNot_test(this);
	}
};

Not_testContext.prototype.exitRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.exitNot_test(this);
	}
};

Not_testContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Python3Visitor ) {
        return visitor.visitNot_test(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Python3Parser.Not_testContext = Not_testContext;

Python3Parser.prototype.not_test = function() {

    var localctx = new Not_testContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, Python3Parser.RULE_not_test);
    try {
        this.state = 195;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case Python3Parser.NOT:
            this.enterOuterAlt(localctx, 1);
            this.state = 192;
            this.match(Python3Parser.NOT);
            this.state = 193;
            this.not_test();
            break;
        case Python3Parser.NONE:
        case Python3Parser.TRUE:
        case Python3Parser.FALSE:
        case Python3Parser.NAME:
        case Python3Parser.STRING_LITERAL:
        case Python3Parser.DECIMAL_INTEGER:
        case Python3Parser.FLOAT_NUMBER:
        case Python3Parser.OPEN_PAREN:
        case Python3Parser.ADD:
        case Python3Parser.MINUS:
            this.enterOuterAlt(localctx, 2);
            this.state = 194;
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
    this.ruleIndex = Python3Parser.RULE_comparison;
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

ComparisonContext.prototype.enterRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.enterComparison(this);
	}
};

ComparisonContext.prototype.exitRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.exitComparison(this);
	}
};

ComparisonContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Python3Visitor ) {
        return visitor.visitComparison(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Python3Parser.ComparisonContext = ComparisonContext;

Python3Parser.prototype.comparison = function() {

    var localctx = new ComparisonContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, Python3Parser.RULE_comparison);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 197;
        this.expr();
        this.state = 203;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (Python3Parser.LESS_THAN - 33)) | (1 << (Python3Parser.GREATER_THAN - 33)) | (1 << (Python3Parser.EQUALS - 33)) | (1 << (Python3Parser.GT_EQ - 33)) | (1 << (Python3Parser.LT_EQ - 33)) | (1 << (Python3Parser.NOT_EQ_1 - 33)) | (1 << (Python3Parser.NOT_EQ_2 - 33)))) !== 0)) {
            this.state = 198;
            this.comp_op();
            this.state = 199;
            this.expr();
            this.state = 205;
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
    this.ruleIndex = Python3Parser.RULE_comp_op;
    return this;
}

Comp_opContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Comp_opContext.prototype.constructor = Comp_opContext;


Comp_opContext.prototype.enterRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.enterComp_op(this);
	}
};

Comp_opContext.prototype.exitRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.exitComp_op(this);
	}
};

Comp_opContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Python3Visitor ) {
        return visitor.visitComp_op(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Python3Parser.Comp_opContext = Comp_opContext;

Python3Parser.prototype.comp_op = function() {

    var localctx = new Comp_opContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, Python3Parser.RULE_comp_op);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 206;
        _la = this._input.LA(1);
        if(!(((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (Python3Parser.LESS_THAN - 33)) | (1 << (Python3Parser.GREATER_THAN - 33)) | (1 << (Python3Parser.EQUALS - 33)) | (1 << (Python3Parser.GT_EQ - 33)) | (1 << (Python3Parser.LT_EQ - 33)) | (1 << (Python3Parser.NOT_EQ_1 - 33)) | (1 << (Python3Parser.NOT_EQ_2 - 33)))) !== 0))) {
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
    this.ruleIndex = Python3Parser.RULE_expr;
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

ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.exitExpr(this);
	}
};

ExprContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Python3Visitor ) {
        return visitor.visitExpr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Python3Parser.ExprContext = ExprContext;

Python3Parser.prototype.expr = function() {

    var localctx = new ExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, Python3Parser.RULE_expr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 208;
        this.term();
        this.state = 215;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===Python3Parser.ADD || _la===Python3Parser.MINUS) {
            this.state = 213;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case Python3Parser.ADD:
                this.state = 209;
                this.match(Python3Parser.ADD);
                this.state = 210;
                this.term();
                break;
            case Python3Parser.MINUS:
                this.state = 211;
                this.match(Python3Parser.MINUS);
                this.state = 212;
                this.term();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
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

function TermContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Python3Parser.RULE_term;
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

TermContext.prototype.enterRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.enterTerm(this);
	}
};

TermContext.prototype.exitRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.exitTerm(this);
	}
};

TermContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Python3Visitor ) {
        return visitor.visitTerm(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Python3Parser.TermContext = TermContext;

Python3Parser.prototype.term = function() {

    var localctx = new TermContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, Python3Parser.RULE_term);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 218;
        this.factor();
        this.state = 227;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 22)) & ~0x1f) == 0 && ((1 << (_la - 22)) & ((1 << (Python3Parser.STAR - 22)) | (1 << (Python3Parser.DIV - 22)) | (1 << (Python3Parser.MOD - 22)))) !== 0)) {
            this.state = 225;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case Python3Parser.STAR:
                this.state = 219;
                this.match(Python3Parser.STAR);
                this.state = 220;
                this.factor();
                break;
            case Python3Parser.DIV:
                this.state = 221;
                this.match(Python3Parser.DIV);
                this.state = 222;
                this.factor();
                break;
            case Python3Parser.MOD:
                this.state = 223;
                this.match(Python3Parser.MOD);
                this.state = 224;
                this.factor();
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

function FactorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Python3Parser.RULE_factor;
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

FactorContext.prototype.enterRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.enterFactor(this);
	}
};

FactorContext.prototype.exitRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.exitFactor(this);
	}
};

FactorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Python3Visitor ) {
        return visitor.visitFactor(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Python3Parser.FactorContext = FactorContext;

Python3Parser.prototype.factor = function() {

    var localctx = new FactorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, Python3Parser.RULE_factor);
    try {
        this.state = 235;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case Python3Parser.ADD:
            this.enterOuterAlt(localctx, 1);
            this.state = 230;
            this.match(Python3Parser.ADD);
            this.state = 231;
            this.factor();
            break;
        case Python3Parser.MINUS:
            this.enterOuterAlt(localctx, 2);
            this.state = 232;
            this.match(Python3Parser.MINUS);
            this.state = 233;
            this.factor();
            break;
        case Python3Parser.NONE:
        case Python3Parser.TRUE:
        case Python3Parser.FALSE:
        case Python3Parser.NAME:
        case Python3Parser.STRING_LITERAL:
        case Python3Parser.DECIMAL_INTEGER:
        case Python3Parser.FLOAT_NUMBER:
        case Python3Parser.OPEN_PAREN:
            this.enterOuterAlt(localctx, 3);
            this.state = 234;
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
    this.ruleIndex = Python3Parser.RULE_power;
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

PowerContext.prototype.enterRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.enterPower(this);
	}
};

PowerContext.prototype.exitRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.exitPower(this);
	}
};

PowerContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Python3Visitor ) {
        return visitor.visitPower(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Python3Parser.PowerContext = PowerContext;

Python3Parser.prototype.power = function() {

    var localctx = new PowerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, Python3Parser.RULE_power);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 237;
        this.atom();
        this.state = 241;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===Python3Parser.DOT || _la===Python3Parser.OPEN_PAREN) {
            this.state = 238;
            this.trailer();
            this.state = 243;
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
    this.ruleIndex = Python3Parser.RULE_atom;
    return this;
}

AtomContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AtomContext.prototype.constructor = AtomContext;

AtomContext.prototype.testlist = function() {
    return this.getTypedRuleContext(TestlistContext,0);
};

AtomContext.prototype.NAME = function() {
    return this.getToken(Python3Parser.NAME, 0);
};

AtomContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

AtomContext.prototype.STRING_LITERAL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(Python3Parser.STRING_LITERAL);
    } else {
        return this.getToken(Python3Parser.STRING_LITERAL, i);
    }
};


AtomContext.prototype.NONE = function() {
    return this.getToken(Python3Parser.NONE, 0);
};

AtomContext.prototype.TRUE = function() {
    return this.getToken(Python3Parser.TRUE, 0);
};

AtomContext.prototype.FALSE = function() {
    return this.getToken(Python3Parser.FALSE, 0);
};

AtomContext.prototype.enterRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.enterAtom(this);
	}
};

AtomContext.prototype.exitRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.exitAtom(this);
	}
};

AtomContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Python3Visitor ) {
        return visitor.visitAtom(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Python3Parser.AtomContext = AtomContext;

Python3Parser.prototype.atom = function() {

    var localctx = new AtomContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, Python3Parser.RULE_atom);
    var _la = 0; // Token type
    try {
        this.state = 259;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case Python3Parser.OPEN_PAREN:
            this.enterOuterAlt(localctx, 1);
            this.state = 244;
            this.match(Python3Parser.OPEN_PAREN);
            this.state = 246;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << Python3Parser.NOT) | (1 << Python3Parser.NONE) | (1 << Python3Parser.TRUE) | (1 << Python3Parser.FALSE) | (1 << Python3Parser.NAME) | (1 << Python3Parser.STRING_LITERAL) | (1 << Python3Parser.DECIMAL_INTEGER) | (1 << Python3Parser.FLOAT_NUMBER) | (1 << Python3Parser.OPEN_PAREN) | (1 << Python3Parser.ADD) | (1 << Python3Parser.MINUS))) !== 0)) {
                this.state = 245;
                this.testlist();
            }

            this.state = 248;
            this.match(Python3Parser.CLOSE_PAREN);
            break;
        case Python3Parser.NAME:
            this.enterOuterAlt(localctx, 2);
            this.state = 249;
            this.match(Python3Parser.NAME);
            break;
        case Python3Parser.DECIMAL_INTEGER:
        case Python3Parser.FLOAT_NUMBER:
            this.enterOuterAlt(localctx, 3);
            this.state = 250;
            this.number();
            break;
        case Python3Parser.STRING_LITERAL:
            this.enterOuterAlt(localctx, 4);
            this.state = 252; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 251;
                this.match(Python3Parser.STRING_LITERAL);
                this.state = 254; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===Python3Parser.STRING_LITERAL);
            break;
        case Python3Parser.NONE:
            this.enterOuterAlt(localctx, 5);
            this.state = 256;
            this.match(Python3Parser.NONE);
            break;
        case Python3Parser.TRUE:
            this.enterOuterAlt(localctx, 6);
            this.state = 257;
            this.match(Python3Parser.TRUE);
            break;
        case Python3Parser.FALSE:
            this.enterOuterAlt(localctx, 7);
            this.state = 258;
            this.match(Python3Parser.FALSE);
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
    this.ruleIndex = Python3Parser.RULE_testlist;
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

TestlistContext.prototype.enterRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.enterTestlist(this);
	}
};

TestlistContext.prototype.exitRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.exitTestlist(this);
	}
};

TestlistContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Python3Visitor ) {
        return visitor.visitTestlist(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Python3Parser.TestlistContext = TestlistContext;

Python3Parser.prototype.testlist = function() {

    var localctx = new TestlistContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, Python3Parser.RULE_testlist);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 261;
        this.test();
        this.state = 266;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===Python3Parser.COMMA) {
            this.state = 262;
            this.match(Python3Parser.COMMA);
            this.state = 263;
            this.test();
            this.state = 268;
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
    this.ruleIndex = Python3Parser.RULE_trailer;
    return this;
}

TrailerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TrailerContext.prototype.constructor = TrailerContext;

TrailerContext.prototype.testlist = function() {
    return this.getTypedRuleContext(TestlistContext,0);
};

TrailerContext.prototype.NAME = function() {
    return this.getToken(Python3Parser.NAME, 0);
};

TrailerContext.prototype.enterRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.enterTrailer(this);
	}
};

TrailerContext.prototype.exitRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.exitTrailer(this);
	}
};

TrailerContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Python3Visitor ) {
        return visitor.visitTrailer(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Python3Parser.TrailerContext = TrailerContext;

Python3Parser.prototype.trailer = function() {

    var localctx = new TrailerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, Python3Parser.RULE_trailer);
    var _la = 0; // Token type
    try {
        this.state = 276;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case Python3Parser.OPEN_PAREN:
            this.enterOuterAlt(localctx, 1);
            this.state = 269;
            this.match(Python3Parser.OPEN_PAREN);
            this.state = 271;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << Python3Parser.NOT) | (1 << Python3Parser.NONE) | (1 << Python3Parser.TRUE) | (1 << Python3Parser.FALSE) | (1 << Python3Parser.NAME) | (1 << Python3Parser.STRING_LITERAL) | (1 << Python3Parser.DECIMAL_INTEGER) | (1 << Python3Parser.FLOAT_NUMBER) | (1 << Python3Parser.OPEN_PAREN) | (1 << Python3Parser.ADD) | (1 << Python3Parser.MINUS))) !== 0)) {
                this.state = 270;
                this.testlist();
            }

            this.state = 273;
            this.match(Python3Parser.CLOSE_PAREN);
            break;
        case Python3Parser.DOT:
            this.enterOuterAlt(localctx, 2);
            this.state = 274;
            this.match(Python3Parser.DOT);
            this.state = 275;
            this.match(Python3Parser.NAME);
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

function NumberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = Python3Parser.RULE_number;
    return this;
}

NumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberContext.prototype.constructor = NumberContext;

NumberContext.prototype.DECIMAL_INTEGER = function() {
    return this.getToken(Python3Parser.DECIMAL_INTEGER, 0);
};

NumberContext.prototype.FLOAT_NUMBER = function() {
    return this.getToken(Python3Parser.FLOAT_NUMBER, 0);
};

NumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.enterNumber(this);
	}
};

NumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof Python3Listener ) {
        listener.exitNumber(this);
	}
};

NumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof Python3Visitor ) {
        return visitor.visitNumber(this);
    } else {
        return visitor.visitChildren(this);
    }
};




Python3Parser.NumberContext = NumberContext;

Python3Parser.prototype.number = function() {

    var localctx = new NumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, Python3Parser.RULE_number);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 278;
        _la = this._input.LA(1);
        if(!(_la===Python3Parser.DECIMAL_INTEGER || _la===Python3Parser.FLOAT_NUMBER)) {
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


exports.Python3Parser = Python3Parser;