let VALOR="";

let MemoryStack = Array();
let MemoryQueue = Array();

// Ideia:

    //O que?
        // Pegar qualquer coisa que eu aperte na interface e jogar dentro de uma variável
        // para depois rodar um switch case para adicionar eventListener nela


    // Por quê?
        // Dessa forma cria-se um afunilamento para a ordem do usuário 
        // Torna o código menos verboso e mais elegante



function handlerEvents(event)
{
    const button = event.target;
    const buttonId = button.getAttribute("value");
    add_in_VALOR(buttonId);
}

// .addEventListener afunila todos os botões da classe números.
// Assim podemos utilizar handlerEvents para capturar qualquer eventos destes.
const Number_buttons = document.querySelectorAll(".numeros");
Number_buttons.forEach(
    (button) => 
    {
        button.addEventListener("click", handlerEvents);
    }
)

function add_in_VALOR(e){
    
    // window.alert(e);
    // mapa = {e.target: 0};

    var numero = document.getElementById("tela").innerHTML;
    if(numero=="0"){
        document.getElementById("tela").innerHTML="0"
    }
    document.getElementById("tela").innerHTML+=e;
}


function AC(){
    document.getElementById("tela").innerHTML="0"
    
    if (MemoryQueue.length == 2)
    {
        MemoryQueue.push("refresh");
        MemoryQueue.shift();
    }
    else
    {
        MemoryQueue.push("refresh")
    }
}
document.getElementById("btn_clear").addEventListener("click",AC)

function porcentagem(){
    document.getElementById("tela").innerHTML=(document.getElementById("tela").innerHTML)/100
}
document.getElementById("btn_sum").addEventListener("btn_percent",porcentagem)

function DEL(){

    document.getElementById('tela').innerHTML=document.getElementById('tela').innerHTML.substring(0,(document.getElementById('tela').innerHTML.length)-1);
    // document.getElementById("tela").innerHTML=document.getElementByI
    // d("tela").innerHTML.substring(0,(document.getElementById("tela").innerHTML.length)-1);
}
document.getElementById("btn_delete").addEventListener("",DEL)

function igual(){
    document.getElementById("tela").innerHTML=eval( document.getElementById("tela").innerHTML).toString();
}
document.getElementById("btn_sum").addEventListener("",add_in_VALOR)

function add_in_MEMORY(){

    if(MemoryStack[0] == undefined)
    {
        if (document.getElementById("tela").innerHTML.includes('.'))
        {
            MemoryStack.push(parseFloat(document.getElementById("tela").innerHTML));
        }
        else
        {
        
            MemoryStack.push(parseInt(document.getElementById("tela").innerHTML));
    
        }
    }
    else
    {
        if (document.getElementById("tela").innerHTML.includes('.'))
        {
            MemoryStack[0] = MemoryStack[0] + parseFloat(document.getElementById("tela").innerHTML);
        }
        else
        {
        
            MemoryStack[0] = MemoryStack[0] + parseInt(document.getElementById("tela").innerHTML);
    
        }
    }

    if (MemoryQueue.length == 2)
    {
        MemoryQueue.push('+');
        MemoryQueue.shift();
    }
    else
    {
        MemoryQueue.push('+')
    }

}
document.getElementById("btn_sumMem").addEventListener("",add_in_MEMORY)

function sub_in_MEMORY(){

    if(MemoryStack[0] == undefined)
    {
        if (document.getElementById("tela").innerHTML.includes('.'))
        {
            MemoryStack.push(parseFloat(document.getElementById("tela").innerHTML));
        }
        else
        {
        
            MemoryStack.push(parseInt(document.getElementById("tela").innerHTML));
    
        }
    }
    else
    {
        if (document.getElementById("tela").innerHTML.includes('.'))
        {
            MemoryStack[0] = MemoryStack[0] + parseFloat(document.getElementById("tela").innerHTML);
        }
        else
        {
        
            MemoryStack[0] = MemoryStack[0] + parseInt(document.getElementById("tela").innerHTML);
    
        }
    }

    if (MemoryQueue.length == 2)
    {
        MemoryQueue.push('+');
        MemoryQueue.shift();
    }
    else
    {
        MemoryQueue.push('+')
    }

}
document.getElementById("btn_subMem").addEventListener("",sub_in_MEMORY)

function MEMORY_CLEAR(){
    MEMORY="0";
}
document.getElementById("btn_sum").addEventListener("",add_in_VALOR)

function read_in_MEMORY()
{
    if (MemoryStack[0] != undefined)
    {
        document.getElementById("tela").innerHTML = MemoryStack[0];    
    }
    else
        document.getElementById("tela").innerHTML = 0

    if (MemoryQueue.length == 2)
    {
        MemoryQueue.push("read");
        MemoryQueue.shift();
    }
    else
    {
        MemoryQueue.push("read")
    }

    if (MemoryQueue[0] == 'read' && MemoryQueue[1] == 'read')
    {
        MemoryStack.pop();
    }
}
document.getElementById("btn_readMem").addEventListener("",read_in_MEMORY)



// Ideia:

    //Arrow Functions? Ou não?

const sum = (a, b) => a + b;

const subtraction = (a, b) => a - b;

const times = (a, b) => a * b;

const divide = (a, b) => a / b;

function alerta () 
{ window.alert("AQUI!!");}


document.getElementById("teste").addEventListener('click', console.log('Oi!'))


