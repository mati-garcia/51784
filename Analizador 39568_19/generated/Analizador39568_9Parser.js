// Generated from c:/Users/Mati/Desktop/Nueva carpeta/Analizador 39568_19/Analizador39568_9.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import Analizador39568_9Listener from './Analizador39568_9Listener.js';
import Analizador39568_9Visitor from './Analizador39568_9Visitor.js';

const serializedATN = [4,1,15,76,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,5,0,18,8,0,10,0,12,0,21,9,0,1,0,1,0,1,1,1,1,
1,1,3,1,28,8,1,1,2,1,2,1,2,1,2,1,2,1,2,5,2,36,8,2,10,2,12,2,39,9,2,1,2,3,
2,42,8,2,1,2,1,2,1,3,1,3,1,3,1,3,5,3,50,8,3,10,3,12,3,53,9,3,1,4,1,4,1,4,
5,4,58,8,4,10,4,12,4,61,9,4,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,
1,7,1,7,1,7,0,0,8,0,2,4,6,8,10,12,14,0,1,2,0,12,12,14,14,74,0,19,1,0,0,0,
2,27,1,0,0,0,4,29,1,0,0,0,6,45,1,0,0,0,8,54,1,0,0,0,10,62,1,0,0,0,12,67,
1,0,0,0,14,73,1,0,0,0,16,18,3,2,1,0,17,16,1,0,0,0,18,21,1,0,0,0,19,17,1,
0,0,0,19,20,1,0,0,0,20,22,1,0,0,0,21,19,1,0,0,0,22,23,5,0,0,1,23,1,1,0,0,
0,24,28,3,4,2,0,25,28,3,10,5,0,26,28,3,12,6,0,27,24,1,0,0,0,27,25,1,0,0,
0,27,26,1,0,0,0,28,3,1,0,0,0,29,30,5,1,0,0,30,31,5,5,0,0,31,32,5,13,0,0,
32,33,5,6,0,0,33,37,5,7,0,0,34,36,3,6,3,0,35,34,1,0,0,0,36,39,1,0,0,0,37,
35,1,0,0,0,37,38,1,0,0,0,38,41,1,0,0,0,39,37,1,0,0,0,40,42,3,8,4,0,41,40,
1,0,0,0,41,42,1,0,0,0,42,43,1,0,0,0,43,44,5,8,0,0,44,5,1,0,0,0,45,46,5,2,
0,0,46,47,3,14,7,0,47,51,5,9,0,0,48,50,3,2,1,0,49,48,1,0,0,0,50,53,1,0,0,
0,51,49,1,0,0,0,51,52,1,0,0,0,52,7,1,0,0,0,53,51,1,0,0,0,54,55,5,3,0,0,55,
59,5,9,0,0,56,58,3,2,1,0,57,56,1,0,0,0,58,61,1,0,0,0,59,57,1,0,0,0,59,60,
1,0,0,0,60,9,1,0,0,0,61,59,1,0,0,0,62,63,5,13,0,0,63,64,5,11,0,0,64,65,3,
14,7,0,65,66,5,10,0,0,66,11,1,0,0,0,67,68,5,4,0,0,68,69,5,5,0,0,69,70,5,
12,0,0,70,71,5,6,0,0,71,72,5,10,0,0,72,13,1,0,0,0,73,74,7,0,0,0,74,15,1,
0,0,0,6,19,27,37,41,51,59];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class Analizador39568_9Parser extends antlr4.Parser {

    static grammarFileName = "Analizador39568_9.g4";
    static literalNames = [ null, "'switch'", "'case'", "'default'", "'output'", 
                            "'('", "')'", "'{'", "'}'", "':'", "';'", "'='" ];
    static symbolicNames = [ null, "SWITCH", "CASE", "DEFAULT", "OUTPUT", 
                             "PARENTESIS_IZQ", "PARENTESIS_DER", "LLAVE_IZQ", 
                             "LLAVE_DER", "DOS_PUNTOS", "PUNTO_Y_COMA", 
                             "ASIGNACION", "TEXTO", "IDENTIFICADOR", "NUMERO", 
                             "WS" ];
    static ruleNames = [ "programa", "instruccionSimple", "sentenciaSwitch", 
                         "seccionCase", "seccionDefault", "sentenciaAsignacion", 
                         "sentenciaOutput", "constante" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = Analizador39568_9Parser.ruleNames;
        this.literalNames = Analizador39568_9Parser.literalNames;
        this.symbolicNames = Analizador39568_9Parser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, Analizador39568_9Parser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 8210) !== 0)) {
	            this.state = 16;
	            this.instruccionSimple();
	            this.state = 21;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 22;
	        this.match(Analizador39568_9Parser.EOF);
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
	}



	instruccionSimple() {
	    let localctx = new InstruccionSimpleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, Analizador39568_9Parser.RULE_instruccionSimple);
	    try {
	        this.state = 27;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 24;
	            this.sentenciaSwitch();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 25;
	            this.sentenciaAsignacion();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 26;
	            this.sentenciaOutput();
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
	}



	sentenciaSwitch() {
	    let localctx = new SentenciaSwitchContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, Analizador39568_9Parser.RULE_sentenciaSwitch);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this.match(Analizador39568_9Parser.SWITCH);
	        this.state = 30;
	        this.match(Analizador39568_9Parser.PARENTESIS_IZQ);
	        this.state = 31;
	        this.match(Analizador39568_9Parser.IDENTIFICADOR);
	        this.state = 32;
	        this.match(Analizador39568_9Parser.PARENTESIS_DER);
	        this.state = 33;
	        this.match(Analizador39568_9Parser.LLAVE_IZQ);
	        this.state = 37;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 34;
	            this.seccionCase();
	            this.state = 39;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 41;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 40;
	            this.seccionDefault();
	        }

	        this.state = 43;
	        this.match(Analizador39568_9Parser.LLAVE_DER);
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
	}



	seccionCase() {
	    let localctx = new SeccionCaseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, Analizador39568_9Parser.RULE_seccionCase);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this.match(Analizador39568_9Parser.CASE);
	        this.state = 46;
	        this.constante();
	        this.state = 47;
	        this.match(Analizador39568_9Parser.DOS_PUNTOS);
	        this.state = 51;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 8210) !== 0)) {
	            this.state = 48;
	            this.instruccionSimple();
	            this.state = 53;
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
	}



	seccionDefault() {
	    let localctx = new SeccionDefaultContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, Analizador39568_9Parser.RULE_seccionDefault);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.match(Analizador39568_9Parser.DEFAULT);
	        this.state = 55;
	        this.match(Analizador39568_9Parser.DOS_PUNTOS);
	        this.state = 59;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 8210) !== 0)) {
	            this.state = 56;
	            this.instruccionSimple();
	            this.state = 61;
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
	}



	sentenciaAsignacion() {
	    let localctx = new SentenciaAsignacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, Analizador39568_9Parser.RULE_sentenciaAsignacion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.match(Analizador39568_9Parser.IDENTIFICADOR);
	        this.state = 63;
	        this.match(Analizador39568_9Parser.ASIGNACION);
	        this.state = 64;
	        this.constante();
	        this.state = 65;
	        this.match(Analizador39568_9Parser.PUNTO_Y_COMA);
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
	}



	sentenciaOutput() {
	    let localctx = new SentenciaOutputContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, Analizador39568_9Parser.RULE_sentenciaOutput);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this.match(Analizador39568_9Parser.OUTPUT);
	        this.state = 68;
	        this.match(Analizador39568_9Parser.PARENTESIS_IZQ);
	        this.state = 69;
	        this.match(Analizador39568_9Parser.TEXTO);
	        this.state = 70;
	        this.match(Analizador39568_9Parser.PARENTESIS_DER);
	        this.state = 71;
	        this.match(Analizador39568_9Parser.PUNTO_Y_COMA);
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
	}



	constante() {
	    let localctx = new ConstanteContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, Analizador39568_9Parser.RULE_constante);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        _la = this._input.LA(1);
	        if(!(_la===12 || _la===14)) {
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
	}


}

Analizador39568_9Parser.EOF = antlr4.Token.EOF;
Analizador39568_9Parser.SWITCH = 1;
Analizador39568_9Parser.CASE = 2;
Analizador39568_9Parser.DEFAULT = 3;
Analizador39568_9Parser.OUTPUT = 4;
Analizador39568_9Parser.PARENTESIS_IZQ = 5;
Analizador39568_9Parser.PARENTESIS_DER = 6;
Analizador39568_9Parser.LLAVE_IZQ = 7;
Analizador39568_9Parser.LLAVE_DER = 8;
Analizador39568_9Parser.DOS_PUNTOS = 9;
Analizador39568_9Parser.PUNTO_Y_COMA = 10;
Analizador39568_9Parser.ASIGNACION = 11;
Analizador39568_9Parser.TEXTO = 12;
Analizador39568_9Parser.IDENTIFICADOR = 13;
Analizador39568_9Parser.NUMERO = 14;
Analizador39568_9Parser.WS = 15;

Analizador39568_9Parser.RULE_programa = 0;
Analizador39568_9Parser.RULE_instruccionSimple = 1;
Analizador39568_9Parser.RULE_sentenciaSwitch = 2;
Analizador39568_9Parser.RULE_seccionCase = 3;
Analizador39568_9Parser.RULE_seccionDefault = 4;
Analizador39568_9Parser.RULE_sentenciaAsignacion = 5;
Analizador39568_9Parser.RULE_sentenciaOutput = 6;
Analizador39568_9Parser.RULE_constante = 7;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Analizador39568_9Parser.RULE_programa;
    }

	EOF() {
	    return this.getToken(Analizador39568_9Parser.EOF, 0);
	};

	instruccionSimple = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionSimpleContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionSimpleContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof Analizador39568_9Listener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Analizador39568_9Listener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Analizador39568_9Visitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionSimpleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Analizador39568_9Parser.RULE_instruccionSimple;
    }

	sentenciaSwitch() {
	    return this.getTypedRuleContext(SentenciaSwitchContext,0);
	};

	sentenciaAsignacion() {
	    return this.getTypedRuleContext(SentenciaAsignacionContext,0);
	};

	sentenciaOutput() {
	    return this.getTypedRuleContext(SentenciaOutputContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Analizador39568_9Listener ) {
	        listener.enterInstruccionSimple(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Analizador39568_9Listener ) {
	        listener.exitInstruccionSimple(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Analizador39568_9Visitor ) {
	        return visitor.visitInstruccionSimple(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenciaSwitchContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Analizador39568_9Parser.RULE_sentenciaSwitch;
    }

	SWITCH() {
	    return this.getToken(Analizador39568_9Parser.SWITCH, 0);
	};

	PARENTESIS_IZQ() {
	    return this.getToken(Analizador39568_9Parser.PARENTESIS_IZQ, 0);
	};

	IDENTIFICADOR() {
	    return this.getToken(Analizador39568_9Parser.IDENTIFICADOR, 0);
	};

	PARENTESIS_DER() {
	    return this.getToken(Analizador39568_9Parser.PARENTESIS_DER, 0);
	};

	LLAVE_IZQ() {
	    return this.getToken(Analizador39568_9Parser.LLAVE_IZQ, 0);
	};

	LLAVE_DER() {
	    return this.getToken(Analizador39568_9Parser.LLAVE_DER, 0);
	};

	seccionCase = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SeccionCaseContext);
	    } else {
	        return this.getTypedRuleContext(SeccionCaseContext,i);
	    }
	};

	seccionDefault() {
	    return this.getTypedRuleContext(SeccionDefaultContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Analizador39568_9Listener ) {
	        listener.enterSentenciaSwitch(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Analizador39568_9Listener ) {
	        listener.exitSentenciaSwitch(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Analizador39568_9Visitor ) {
	        return visitor.visitSentenciaSwitch(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SeccionCaseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Analizador39568_9Parser.RULE_seccionCase;
    }

	CASE() {
	    return this.getToken(Analizador39568_9Parser.CASE, 0);
	};

	constante() {
	    return this.getTypedRuleContext(ConstanteContext,0);
	};

	DOS_PUNTOS() {
	    return this.getToken(Analizador39568_9Parser.DOS_PUNTOS, 0);
	};

	instruccionSimple = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionSimpleContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionSimpleContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof Analizador39568_9Listener ) {
	        listener.enterSeccionCase(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Analizador39568_9Listener ) {
	        listener.exitSeccionCase(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Analizador39568_9Visitor ) {
	        return visitor.visitSeccionCase(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SeccionDefaultContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Analizador39568_9Parser.RULE_seccionDefault;
    }

	DEFAULT() {
	    return this.getToken(Analizador39568_9Parser.DEFAULT, 0);
	};

	DOS_PUNTOS() {
	    return this.getToken(Analizador39568_9Parser.DOS_PUNTOS, 0);
	};

	instruccionSimple = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionSimpleContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionSimpleContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof Analizador39568_9Listener ) {
	        listener.enterSeccionDefault(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Analizador39568_9Listener ) {
	        listener.exitSeccionDefault(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Analizador39568_9Visitor ) {
	        return visitor.visitSeccionDefault(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenciaAsignacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Analizador39568_9Parser.RULE_sentenciaAsignacion;
    }

	IDENTIFICADOR() {
	    return this.getToken(Analizador39568_9Parser.IDENTIFICADOR, 0);
	};

	ASIGNACION() {
	    return this.getToken(Analizador39568_9Parser.ASIGNACION, 0);
	};

	constante() {
	    return this.getTypedRuleContext(ConstanteContext,0);
	};

	PUNTO_Y_COMA() {
	    return this.getToken(Analizador39568_9Parser.PUNTO_Y_COMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Analizador39568_9Listener ) {
	        listener.enterSentenciaAsignacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Analizador39568_9Listener ) {
	        listener.exitSentenciaAsignacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Analizador39568_9Visitor ) {
	        return visitor.visitSentenciaAsignacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenciaOutputContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Analizador39568_9Parser.RULE_sentenciaOutput;
    }

	OUTPUT() {
	    return this.getToken(Analizador39568_9Parser.OUTPUT, 0);
	};

	PARENTESIS_IZQ() {
	    return this.getToken(Analizador39568_9Parser.PARENTESIS_IZQ, 0);
	};

	TEXTO() {
	    return this.getToken(Analizador39568_9Parser.TEXTO, 0);
	};

	PARENTESIS_DER() {
	    return this.getToken(Analizador39568_9Parser.PARENTESIS_DER, 0);
	};

	PUNTO_Y_COMA() {
	    return this.getToken(Analizador39568_9Parser.PUNTO_Y_COMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Analizador39568_9Listener ) {
	        listener.enterSentenciaOutput(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Analizador39568_9Listener ) {
	        listener.exitSentenciaOutput(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Analizador39568_9Visitor ) {
	        return visitor.visitSentenciaOutput(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConstanteContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Analizador39568_9Parser.RULE_constante;
    }

	NUMERO() {
	    return this.getToken(Analizador39568_9Parser.NUMERO, 0);
	};

	TEXTO() {
	    return this.getToken(Analizador39568_9Parser.TEXTO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Analizador39568_9Listener ) {
	        listener.enterConstante(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Analizador39568_9Listener ) {
	        listener.exitConstante(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Analizador39568_9Visitor ) {
	        return visitor.visitConstante(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




Analizador39568_9Parser.ProgramaContext = ProgramaContext; 
Analizador39568_9Parser.InstruccionSimpleContext = InstruccionSimpleContext; 
Analizador39568_9Parser.SentenciaSwitchContext = SentenciaSwitchContext; 
Analizador39568_9Parser.SeccionCaseContext = SeccionCaseContext; 
Analizador39568_9Parser.SeccionDefaultContext = SeccionDefaultContext; 
Analizador39568_9Parser.SentenciaAsignacionContext = SentenciaAsignacionContext; 
Analizador39568_9Parser.SentenciaOutputContext = SentenciaOutputContext; 
Analizador39568_9Parser.ConstanteContext = ConstanteContext; 
