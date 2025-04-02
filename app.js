function procesarExpresionInfijo() {
    const expresion = document.getElementById("expresionInfijo").value;
    const arbol = new ArbolBinario();
    arbol.construirDesdeInfijo(expresion);
    const resultado = arbol.evaluar(arbol.raiz);
    document.getElementById("resultadoInfijo").innerHTML = `Resultado: ${resultado}`;
}

function procesarExpresionPreorden() {
    const expresion = document.getElementById("expresionPreorden").value;
    const arbol = new ArbolBinario();
    const resultado = arbol.resolverPreorden(expresion);
    document.getElementById("resultadoPreorden").innerHTML = `Resultado: ${resultado}`;
}

function procesarExpresionPostorden() {
    const expresion = document.getElementById("expresionPostorden").value;
    const arbol = new ArbolBinario();
    const resultado = arbol.resolverPostorden(expresion);
    document.getElementById("resultadoPostorden").innerHTML = `Resultado: ${resultado}`;
}
