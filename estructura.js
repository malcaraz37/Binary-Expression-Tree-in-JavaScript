class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.izquierda = null;
        this.derecha = null;
    }
}

class ArbolBinario {
    constructor() {
        this.raiz = null;
    }

    construirDesdeInfijo(expresion) {
        let operadores = [];
        let operandos = [];

        for (let char of expresion) {
            if (!isNaN(char)) {
                operandos.push(new Nodo(char));
            } else if ("+-*/".includes(char)) {
                while (
                    operadores.length > 0 &&
                    this.obtenerPrecedencia(char) <=
                        this.obtenerPrecedencia(operadores[operadores.length - 1])
                ) {
                    this.procesarNodo(operadores, operandos);
                }
                operadores.push(char);
            }
        }

        while (operadores.length > 0) {
            this.procesarNodo(operadores, operandos);
        }

        this.raiz = operandos.pop();
    }

    procesarNodo(operadores, operandos) {
        const nodo = new Nodo(operadores.pop());
        nodo.derecha = operandos.pop();
        nodo.izquierda = operandos.pop();
        operandos.push(nodo);
    }

    obtenerPrecedencia(operador) {
        if (operador === "+" || operador === "-") return 1;
        if (operador === "*" || operador === "/") return 2;
        return 0;
    }

    evaluar(nodo) {
        if (!nodo) return 0;
        if (!isNaN(nodo.valor)) return parseFloat(nodo.valor);

        const izquierda = this.evaluar(nodo.izquierda);
        const derecha = this.evaluar(nodo.derecha);

        switch (nodo.valor) {
            case "+":
                return izquierda + derecha;
            case "-":
                return izquierda - derecha;
            case "*":
                return izquierda * derecha;
            case "/":
                return izquierda / derecha;
        }
    }

    resolverPreorden(expresion) {
        const pila = [];
        for (let i = expresion.length - 1; i >= 0; i--) {
            const char = expresion[i];
            if (!isNaN(char)) {
                pila.push(parseFloat(char));
            } else {
                const op1 = pila.pop();
                const op2 = pila.pop();
                pila.push(this.operar(char, op1, op2));
            }
        }
        return pila.pop();
    }

    resolverPostorden(expresion) {
        const pila = [];
        for (let char of expresion) {
            if (!isNaN(char)) {
                pila.push(parseFloat(char));
            } else {
                const op2 = pila.pop();
                const op1 = pila.pop();
                pila.push(this.operar(char, op1, op2));
            }
        }
        return pila.pop();
    }

    operar(operador, op1, op2) {
        switch (operador) {
            case "+":
                return op1 + op2;
            case "-":
                return op1 - op2;
            case "*":
                return op1 * op2;
            case "/":
                return op1 / op2;
        }
    }
}
