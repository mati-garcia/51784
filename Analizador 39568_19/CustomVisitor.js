import Analizador39568_9Visitor from './generated/Analizador39568_9Visitor.js';

export default class CustomVisitor extends Analizador39568_9Visitor {

    constructor() {

        super();

        this.variables = {};

    }

    // ---------------- PROGRAMA ----------------

    visitPrograma(ctx) {

        return this.visitChildren(ctx);

    }

    // ---------------- ASIGNACION ----------------

    visitSentenciaAsignacion(ctx) {

        const nombre = ctx.IDENTIFICADOR().getText();

        const valor = this.visit(ctx.constante());

        this.variables[nombre] = valor;

        return null;

    }

    // ---------------- CONSTANTE ----------------

    visitConstante(ctx) {

        if (ctx.NUMERO()) {

            return Number(ctx.NUMERO().getText());

        }

        if (ctx.TEXTO()) {

            return ctx.TEXTO()
                .getText()
                .replace(/"/g, '');

        }

    }

    // ---------------- OUTPUT ----------------

    visitSentenciaOutput(ctx) {

        const texto = ctx.TEXTO()
            .getText()
            .replace(/"/g, '');

        console.log(texto);

        return null;

    }

    // ---------------- SWITCH ----------------

    visitSentenciaSwitch(ctx) {

        const nombreVariable =
            ctx.IDENTIFICADOR().getText();

        const valorVariable =
            this.variables[nombreVariable];

        let ejecutado = false;

        // recorrer cases
        for (const caseSection of ctx.seccionCase()) {

            const valorCase =
                this.visit(caseSection.constante());

            if (valorVariable === valorCase) {

                ejecutado = true;

                for (const instruccion of caseSection.instruccionSimple()) {

                    this.visit(instruccion);

                }

            }

        }

        // default
        if (!ejecutado && ctx.seccionDefault()) {

            for (const instruccion of ctx
                .seccionDefault()
                .instruccionSimple()) {

                this.visit(instruccion);

            }

        }

        return null;

    }

}