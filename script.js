function aumentar() {
    let total = document.querySelector('.total');
    let tem = document.querySelector('.tem');

    fetch('http://localhost:8080/data')
        .then(response => response.text())
        .then(data => {
            let volume = parseInt(data);
            total.innerHTML = "Total da Caixa:" + volume + "L";
            tem.innerHTML = "Quanto tem na caixa: " + volume + "L" ;
        })
        .catch(error => {
            console.error('Ocorreu um erro:', error);
        });
}

window.onload = aumentar;
