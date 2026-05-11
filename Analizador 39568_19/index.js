import antlr4 from 'antlr4';
import fs from 'fs';

import Analizador39568_9Lexer from './generated/Analizador39568_9Lexer.js';
import Analizador39568_9Parser from './generated/Analizador39568_9Parser.js';

import CustomVisitor from './CustomVisitor.js';

// Leer archivo
const input = fs.readFileSync('input.txt', 'utf8');

console.log('=== CODIGO FUENTE ===');
console.log(input);

// Crear flujo de caracteres
const chars = new antlr4.InputStream(input);

// ---------------- LEXER ----------------

const lexer = new Analizador39568_9Lexer(chars);

const tokens = lexer.getAllTokens();

console.log('\n=== TABLA DE TOKENS ===');

const nombresTokens = [
    null,
    "SWITCH",
    "CASE",
    "DEFAULT",
    "OUTPUT",
    "PARENTESIS_IZQ",
    "PARENTESIS_DER",
    "LLAVE_IZQ",
    "LLAVE_DER",
    "DOS_PUNTOS",
    "PUNTO_Y_COMA",
    "ASIGNACION",
    "TEXTO",
    "IDENTIFICADOR",
    "NUMERO",
    "WS"
];

tokens.forEach(token => {

    console.log(
        `Lexema: "${token.text}" -> Token: ${nombresTokens[token.type]}`
    );

});

// ---------------- PARSER ----------------

// Volver a crear lexer
const lexer2 = new Analizador39568_9Lexer(
    new antlr4.InputStream(input)
);

// Crear stream de tokens
const tokenStream = new antlr4.CommonTokenStream(lexer2);

// Crear parser
const parser = new Analizador39568_9Parser(tokenStream);

// Punto inicial de la gramática
const tree = parser.programa();

console.log('\n=== ANALISIS SINTACTICO ===');

if (parser._syntaxErrors === 0) {

    console.log('Entrada correcta');

} else {

    console.log('Se encontraron errores sintacticos');

}

console.log('\n=== ARBOL SINTACTICO ===');

console.log(tree.toStringTree(parser.ruleNames));

console.log('\n=== INTERPRETACION ===');

const visitor = new CustomVisitor();

visitor.visit(tree);