document.addEventListener("click" , showcolor );

document. getElementById("botao").addEventListener("click" , exibenome );

document. getElementById("btn-soma").addEventListener("click" , soma );

document. getElementById("btn-dividir").addEventListener("click" , dividir );

document. getElementById("btn-multiplicar").addEventListener("click" , multiplicar);

document. getElementById("btn-subtrair").addEventListener("click" , subtrair );

function showcolor()
{
    document.body.style.backgroundColor = "red";
}

function exibenome()
{
    let usuario = document.getElementById("nome").value;
    document.getElementById("mensagem").innerHTML = "Meu nome é:" + usuario;
    document.getElementById("nome").value = "";
}

function soma()
{
    let numero1 = document.getElementById("num1").value;
    let numero2 = document.getElementById("num2").value;
    document.getElementById("resultado1").innerHTML = parseFloat(numero1) + parseFloat(numero2);
}

function dividir()
{
    let numero1 = document.getElementById("num3").value;
    let numero2 = document.getElementById("num4").value;
    document.getElementById("resultado2").innerHTML = parseFloat(numero1) / parseFloat(numero2);
}
function multiplicar()
{
    let numero1 = document.getElementById("num5").value;
    let numero2 = document.getElementById("num6").value;
    document.getElementById("resultado3").innerHTML = parseFloat(numero1) * parseFloat(numero2);
}
function subtrair()
{
    let numero1 = document.getElementById("num7").value;
    let numero2 = document.getElementById("num8").value;
    document.getElementById("resultado4").innerHTML = parseFloat(numero1) - parseFloat(numero2);
}


