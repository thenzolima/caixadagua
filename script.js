function aumentar(){
    let agua = document.querySelector('.conteudo');
    let txt = document.querySelector('.mostrador')
    let volume = 50;
    agua.style.height = volume + "%";
    txt.innerHTML = volume + ' Litros'
}

window.onload = aumentar();
