// Generated from c:/Users/Mati/Desktop/Analizador 39568_19/Analizador39568_9.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class Analizador39568_9Lexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		SWITCH=1, CASE=2, DEFAULT=3, OUTPUT=4, PARENTESIS_IZQ=5, PARENTESIS_DER=6, 
		LLAVE_IZQ=7, LLAVE_DER=8, DOS_PUNTOS=9, PUNTO_Y_COMA=10, ASIGNACION=11, 
		TEXTO=12, IDENTIFICADOR=13, NUMERO=14, WS=15;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"SWITCH", "CASE", "DEFAULT", "OUTPUT", "PARENTESIS_IZQ", "PARENTESIS_DER", 
			"LLAVE_IZQ", "LLAVE_DER", "DOS_PUNTOS", "PUNTO_Y_COMA", "ASIGNACION", 
			"TEXTO", "IDENTIFICADOR", "NUMERO", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'switch'", "'case'", "'default'", "'output'", "'('", "')'", "'{'", 
			"'}'", "':'", "';'", "'='"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "SWITCH", "CASE", "DEFAULT", "OUTPUT", "PARENTESIS_IZQ", "PARENTESIS_DER", 
			"LLAVE_IZQ", "LLAVE_DER", "DOS_PUNTOS", "PUNTO_Y_COMA", "ASIGNACION", 
			"TEXTO", "IDENTIFICADOR", "NUMERO", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public Analizador39568_9Lexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Analizador39568_9.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u000fd\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0005\u0001"+
		"\u0005\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\b\u0001\b"+
		"\u0001\t\u0001\t\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0005\u000bK"+
		"\b\u000b\n\u000b\f\u000bN\t\u000b\u0001\u000b\u0001\u000b\u0001\f\u0001"+
		"\f\u0005\fT\b\f\n\f\f\fW\t\f\u0001\r\u0004\rZ\b\r\u000b\r\f\r[\u0001\u000e"+
		"\u0004\u000e_\b\u000e\u000b\u000e\f\u000e`\u0001\u000e\u0001\u000e\u0000"+
		"\u0000\u000f\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b"+
		"\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0019\r\u001b"+
		"\u000e\u001d\u000f\u0001\u0000\u0005\u0001\u0000\"\"\u0002\u0000AZaz\u0004"+
		"\u000009AZ__az\u0001\u000009\u0003\u0000\t\n\r\r  g\u0000\u0001\u0001"+
		"\u0000\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001"+
		"\u0000\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000"+
		"\u0000\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000"+
		"\u0000\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000"+
		"\u0000\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000"+
		"\u0000\u0000\u0017\u0001\u0000\u0000\u0000\u0000\u0019\u0001\u0000\u0000"+
		"\u0000\u0000\u001b\u0001\u0000\u0000\u0000\u0000\u001d\u0001\u0000\u0000"+
		"\u0000\u0001\u001f\u0001\u0000\u0000\u0000\u0003&\u0001\u0000\u0000\u0000"+
		"\u0005+\u0001\u0000\u0000\u0000\u00073\u0001\u0000\u0000\u0000\t:\u0001"+
		"\u0000\u0000\u0000\u000b<\u0001\u0000\u0000\u0000\r>\u0001\u0000\u0000"+
		"\u0000\u000f@\u0001\u0000\u0000\u0000\u0011B\u0001\u0000\u0000\u0000\u0013"+
		"D\u0001\u0000\u0000\u0000\u0015F\u0001\u0000\u0000\u0000\u0017H\u0001"+
		"\u0000\u0000\u0000\u0019Q\u0001\u0000\u0000\u0000\u001bY\u0001\u0000\u0000"+
		"\u0000\u001d^\u0001\u0000\u0000\u0000\u001f \u0005s\u0000\u0000 !\u0005"+
		"w\u0000\u0000!\"\u0005i\u0000\u0000\"#\u0005t\u0000\u0000#$\u0005c\u0000"+
		"\u0000$%\u0005h\u0000\u0000%\u0002\u0001\u0000\u0000\u0000&\'\u0005c\u0000"+
		"\u0000\'(\u0005a\u0000\u0000()\u0005s\u0000\u0000)*\u0005e\u0000\u0000"+
		"*\u0004\u0001\u0000\u0000\u0000+,\u0005d\u0000\u0000,-\u0005e\u0000\u0000"+
		"-.\u0005f\u0000\u0000./\u0005a\u0000\u0000/0\u0005u\u0000\u000001\u0005"+
		"l\u0000\u000012\u0005t\u0000\u00002\u0006\u0001\u0000\u0000\u000034\u0005"+
		"o\u0000\u000045\u0005u\u0000\u000056\u0005t\u0000\u000067\u0005p\u0000"+
		"\u000078\u0005u\u0000\u000089\u0005t\u0000\u00009\b\u0001\u0000\u0000"+
		"\u0000:;\u0005(\u0000\u0000;\n\u0001\u0000\u0000\u0000<=\u0005)\u0000"+
		"\u0000=\f\u0001\u0000\u0000\u0000>?\u0005{\u0000\u0000?\u000e\u0001\u0000"+
		"\u0000\u0000@A\u0005}\u0000\u0000A\u0010\u0001\u0000\u0000\u0000BC\u0005"+
		":\u0000\u0000C\u0012\u0001\u0000\u0000\u0000DE\u0005;\u0000\u0000E\u0014"+
		"\u0001\u0000\u0000\u0000FG\u0005=\u0000\u0000G\u0016\u0001\u0000\u0000"+
		"\u0000HL\u0005\"\u0000\u0000IK\b\u0000\u0000\u0000JI\u0001\u0000\u0000"+
		"\u0000KN\u0001\u0000\u0000\u0000LJ\u0001\u0000\u0000\u0000LM\u0001\u0000"+
		"\u0000\u0000MO\u0001\u0000\u0000\u0000NL\u0001\u0000\u0000\u0000OP\u0005"+
		"\"\u0000\u0000P\u0018\u0001\u0000\u0000\u0000QU\u0007\u0001\u0000\u0000"+
		"RT\u0007\u0002\u0000\u0000SR\u0001\u0000\u0000\u0000TW\u0001\u0000\u0000"+
		"\u0000US\u0001\u0000\u0000\u0000UV\u0001\u0000\u0000\u0000V\u001a\u0001"+
		"\u0000\u0000\u0000WU\u0001\u0000\u0000\u0000XZ\u0007\u0003\u0000\u0000"+
		"YX\u0001\u0000\u0000\u0000Z[\u0001\u0000\u0000\u0000[Y\u0001\u0000\u0000"+
		"\u0000[\\\u0001\u0000\u0000\u0000\\\u001c\u0001\u0000\u0000\u0000]_\u0007"+
		"\u0004\u0000\u0000^]\u0001\u0000\u0000\u0000_`\u0001\u0000\u0000\u0000"+
		"`^\u0001\u0000\u0000\u0000`a\u0001\u0000\u0000\u0000ab\u0001\u0000\u0000"+
		"\u0000bc\u0006\u000e\u0000\u0000c\u001e\u0001\u0000\u0000\u0000\u0005"+
		"\u0000LU[`\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}