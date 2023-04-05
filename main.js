document.addEventListener("click", showcolor);

document.getElementById("botao").addEventListener("click", showname)

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
function soma(a = required(), b = required()) { return a + b; } console. log(soma(1, 2));