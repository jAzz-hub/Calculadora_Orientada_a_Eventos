let VALOR="";

let MemoryStack = Array();
let MemoryQueue = Array();

function doNothing()
{

}

function handlerEventsClick(event)
{
    const button = event.target;
    const buttonId = button.getAttribute("value");
    add_in_VALOR(buttonId);
}


document.addEventListener("keydown", handlerEventsKeyboard);
function handlerEventsKeyboard(event)
{
    const key = parseFloat(event.which);

    switch (event.which)
    {

        case 8:
            DEL();
            break;

        case 27:
            AC();
            break;

        case 48:
            add_in_VALOR('0');
            break;
        case 49:
            add_in_VALOR('1');
            break;
        case 50:
            add_in_VALOR('2');
            break;
        case 51:
            add_in_VALOR('3');
            break;
        case 52:
            add_in_VALOR('4');
            break;
        case 53:
            add_in_VALOR(event.key);
            break;
        case 54:
            add_in_VALOR('6');
            break;
        case 55:
            add_in_VALOR('7');
            break;
        case 56:
            add_in_VALOR(event.key);
            break;
        case 57:
            add_in_VALOR('9');
            break;
        
        case 13 || event.key == '=':
            igual();
            break;

        case 187:
            if (event.key == '+')
            {
                add_in_VALOR('+');
            }
            else
            {
                doNothing();
            }
            break;

        case 189:
            add_in_VALOR('-');
            break;

        case 81 || 191:
            add_in_VALOR('/');
            break;
    }

}


// .addEventListener afunila todos os botões da classe números.
// Assim podemos utilizar handlerEvents para capturar qualquer eventos destes.
const Number_buttons = document.querySelectorAll(".numeros");
Number_buttons.forEach(
    (button) => 
    {
        button.addEventListener("click", handlerEventsClick);
    }
)

function add_in_VALOR(e)
{
    
    var numero = document.getElementById("tela").innerHTML;

    if(numero=="0"){
        document.getElementById("tela").innerHTML=""
    }
    document.getElementById("tela").innerHTML+=e;
}


function AC()
{
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

function porcentagem()
{
    document.getElementById("tela").innerHTML=(document.getElementById("tela").innerHTML)/100
}
document.getElementById("btn_sum").addEventListener("btn_percent",porcentagem)

function DEL()
{
    let screenText = document.getElementById("tela").innerHTML.split("");
    
    screenText.pop();
    
    afterDel = screenText.join("");

    console.log(typeof afterDel);

    afterDel;
    document.getElementById("tela").innerHTML = '';
    document.getElementById("tela").innerHTML += afterDel;


}
document.getElementById("btn_delete").addEventListener("",DEL)

function igual()
{
    document.getElementById("tela").innerHTML=eval( document.getElementById("tela").innerHTML).toString();
}
document.getElementById("btn_sum").addEventListener("",add_in_VALOR)

function add_in_MEMORY()
{

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

function sub_in_MEMORY()
{

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
    else if(MemoryStack[0]>=parseFloat(document.getElementById("tela").innerHTML)){

        if (document.getElementById("tela").innerHTML.includes('.'))
        {
            MemoryStack[0] = MemoryStack[0] - parseFloat(document.getElementById("tela").innerHTML);
        }
        else
        {
        
            MemoryStack[0] = MemoryStack[0] - parseInt(document.getElementById("tela").innerHTML);
    
        }
    }
    else
    {
        window.alert("A última subtração em memória não pode ser realizada pois o número inserido é menor que o número da memória");
        return;
    }

    if (MemoryQueue.length == 2)
    {
        MemoryQueue.push('-');
        MemoryQueue.shift();
    }
    else
    {
        MemoryQueue.push('-')
    }

}
document.getElementById("btn_subMem").addEventListener("",sub_in_MEMORY)

function clear_in_MEMORY()
{
    MemoryStack.pop();
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


