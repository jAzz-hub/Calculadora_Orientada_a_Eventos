let VALOR=''

function add_in_VALOR(digito){
    var numero=document.getElementById('tela').innerHTML;
    if(numero=='0' && digito!= '0'){
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