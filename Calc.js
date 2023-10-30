let VALOR='';
let MEMORY = '';

function add_in_VALOR(digito){
    var numero=document.getElementById('tela').innerHTML;
    if(numero=='0'){
        document.getElementById('tela').innerHTML=''
    }
    document.getElementById('tela').innerHTML+=digito;
}
function AC(){
    document.getElementById('tela').innerHTML='0'
}
function porcentagem(){
    document.getElementById('tela').innerHTML=(document.getElementById('tela').innerHTML)/100
}
function DEL(){
    document.getElementById('tela').innerHTML=document.getElementById('tela').innerHTML.substring(0,(document.getElementById('tela').innerHTML.length)-1);
}
function igual(){
    document.getElementById('tela').innerHTML=eval( document.getElementById('tela').innerHTML).toString();
}
function add_in_MEMORY(){
    MEMORY=document.getElementById('tela').innerHTML;
    document.getElementById('tela').innerHTML='0'
}
function minus_MEMORY(){
    var numero= document.getElementById('tela').innerHTML;
    var expression = MEMORY
    expression += "-"
    expression += numero
    document.getElementById('tela').innerHTML=eval(expression).toString();
    MEMORY=document.getElementById('tela').innerHTML;
}
function MEMORY_CLEAR(){
    MEMORY='0';
}
function MEMORY_RETRIEVE(){
    document.getElementById('tela').innerHTML=MEMORY
}