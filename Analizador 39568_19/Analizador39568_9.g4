grammar Analizador39568_9;

programa
    : instruccionSimple* EOF
    ;

instruccionSimple
    : sentenciaSwitch
    | sentenciaAsignacion
    | sentenciaOutput
    ;

sentenciaSwitch
    : SWITCH PARENTESIS_IZQ IDENTIFICADOR PARENTESIS_DER
      LLAVE_IZQ
      seccionCase*
      seccionDefault?
      LLAVE_DER
    ;

seccionCase
    : CASE constante DOS_PUNTOS instruccionSimple*
    ;

seccionDefault
    : DEFAULT DOS_PUNTOS instruccionSimple*
    ;

sentenciaAsignacion
    : IDENTIFICADOR ASIGNACION constante PUNTO_Y_COMA
    ;

sentenciaOutput
    : OUTPUT PARENTESIS_IZQ TEXTO PARENTESIS_DER PUNTO_Y_COMA
    ;

constante
    : NUMERO
    | TEXTO
    ;

// TOKENS

SWITCH : 'switch';
CASE : 'case';
DEFAULT : 'default';
OUTPUT : 'output';

PARENTESIS_IZQ : '(';
PARENTESIS_DER : ')';

LLAVE_IZQ : '{';
LLAVE_DER : '}';

DOS_PUNTOS : ':';
PUNTO_Y_COMA : ';';

ASIGNACION : '=';

TEXTO
    : '"' ~["]* '"'
    ;

IDENTIFICADOR
    : [a-zA-Z][a-zA-Z0-9_]*
    ;

NUMERO
    : [0-9]+
    ;

WS
    : [ \t\r\n]+ -> skip
    ;