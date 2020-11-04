
setTimeout(()=>{
    document.getElementById('caixaTexto').style.visibility = 'visible';
},5000);

caixaTexto.onclick = ()=> {
    document.getElementById('caixaTexto').style.visibility = 'hidden';
};