ANALIZADOR 39568_19

Analizador léxico, sintáctico e intérprete básico desarrollado con ANTLR4 y JavaScript.

---

- Descripción:

Este proyecto implementa un analizador para un sub-lenguaje reducido de JavaScript utilizando ANTLR4.

El analizador realiza:

- Análisis léxico
- Análisis sintáctico
- Generación de tabla lexema-token
- Construcción del árbol sintáctico
- Interpretación básica de instrucciones

---

Tecnologías utilizadas:

- ANTLR4
- JavaScript
- Node.js
- Visual Studio Code

---

Funcionalidades:

1) Análisis léxico

Reconocimiento de tokens:

- IDENTIFICADOR
- NUMERO
- TEXTO
- SWITCH
- CASE
- DEFAULT
- OUTPUT

---

2) Análisis sintáctico

Validación de estructuras del lenguaje.

Ejemplo:

```js
x = 2;

output("inicio");

switch (x) {

  case 1:
    output("uno");

  case 2:
    output("dos");

  default:
    output("otro");

}
```

---

3) Árbol sintáctico

El proyecto permite visualizar el árbol sintáctico:

- En formato texto (`toStringTree`)
- Mediante el plugin ANTLR4 para VS Code (F5)

---

4) Interpretación

El Visitor implementado permite:

- Asignación de variables
- Ejecución de output
- Ejecución de switch/case/default

---

Estructura del proyecto

```txt
.
├── .antlr/
├── .vscode/
├── generated/
├── node_modules/
├── Analizador39568_9.g4
├── CustomVisitor.js
├── antlr-4.13.2-complete.jar
├── index.js
├── input.txt
├── package-lock.json
├── package.json
└── README.md
```

---

Ejecución

1) Generar lexer y parser

```bash
java -jar antlr-4.13.2-complete.jar -Dlanguage=JavaScript -visitor -listener -o generated Analizador39568_9.g4
```

2) Ejecutar el analizador

```bash
node index.js
```

---

Ejemplo de salida

```txt
=== ANALISIS SINTACTICO ===
Entrada correcta

=== INTERPRETACION ===
inicio
dos
```

---
