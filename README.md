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
└── Analizador 39568_19/
    ├── .antlr/
    ├── .vscode/
    ├── generated/
    ├── node_modules/
    ├── Analizador39568_9.g4
    ├── antlr-4.13.2-complete.jar
    ├── CustomVisitor.js
    ├── index.js
    ├── input.txt
    ├── package.json
    └── package-lock.json
├── gramatica_asignada.txt
├── Input Correcto 1.txt
├── Input Correcto 2.txt
├── Input Incorrecto 1.txt
├── Input Incorrecto 2.txt
├── README.md
```

EJEMPLO PARA EJECUCIÓN DE INPUT CORRECTO 1 E INPUT INCORRECTO 1 :

Ejecución utilizando la extensión ANTLR4 de Visual Studio Code

El proyecto incluye la configuración necesaria para utilizar la extensión ANTLR4 y visualizar el árbol sintáctico generado automáticamente.

Pasos para ejecutar un ejemplo

1. Abrir el archivo `Analizador39568_9.g4`
2. Copiar el contenido del archivo de entrada deseado dentro de `input.txt`
3. Guardar los cambios
4. Presionar `F5`
5. La extensión ejecutará el parser y mostrará:
   - El árbol sintáctico concreto
   - Los tokens reconocidos
   - Los errores sintácticos en caso de existir

---

EJEMPLO DE INPUT CORRECTO 1

Archivo utilizado:

```txt
Input Correcto 1.txt
```

Contenido:

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

Resultado esperado

- El análisis léxico reconoce correctamente los tokens
- El análisis sintáctico valida correctamente la entrada
- Se genera el árbol sintáctico concreto
- La interpretación ejecuta correctamente el programa

Captura del árbol sintáctico

<img width="2380" height="1336" alt="Input Correcto 1" src="https://github.com/user-attachments/assets/2e52d2c7-4d0b-4196-b0ef-475fe3ee2b91" />


---



EJEMPLO DE INPUT INCORRECTO 1

Archivo utilizado:

```txt
Input Incorrecto 1.txt
```

Contenido:

```js
x = ;

output("hola");
```

Resultado esperado

- El lexer reconoce los tokens existentes
- El parser detecta un error sintáctico
- Se informa la línea donde ocurre el error
- La entrada no es válida según la gramática

---

Captura del error detectado

<img width="2387" height="1364" alt="Input Incorrecto 1" src="https://github.com/user-attachments/assets/cd4e9abd-2226-47e7-b376-85815864e85f" />




