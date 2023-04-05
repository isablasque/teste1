document.addEventListener("click", showcolor);

document.getElementById("botao").addEventListener("click", showname)

document.getElementById("btn-soma").addEventListener("click", soma)

function showcolor()
{
    document.body.style.backgroundColor = "red";
}

function showname() 
{
    let usuário = document.getElementById("nome").value;
    document.getElementById("mensagem").innerHTML= "Meu nome é: " + usuário;
    document.getElementById("nome").value = "";
}

function soma() 
{
    let numero1 = document.getElementById("num1").value;
    let numero2 = document.getElementById("num2").value;
    document.getElementById("resultado1").innerHTML= parseFloat(numero1) + parseFloat(numero2)
}

