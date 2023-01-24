console.log('Aplicación Calculadora');
function sumar(){
    let formulario=document.getElementById('form');
    let operandoA=formulario['operandoA'];
    let operandoB=formulario['operandoB'];
    let resultado= parseInt(operandoA.value)+parseInt(operandoB.value)
    if(isNaN(resultado))
        resultado='Solo se admiten valores númericos';
    document.getElementById('resultado').innerHTML=`El resultado es: ${resultado}`
    console.log(`El resultado es: ${resultado}`);
}