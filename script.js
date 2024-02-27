function aumentar() {
    let total = document.querySelector('.total');
    let tem = document.querySelector('.tem');

    fetch('http://localhost:8080/data')
        .then(response => response.text())
        .then(data => {
            let totalValue = parseInt(totalValue);
            let temValue = paserInt(temValue)
            total.innerHTML = "Total da Caixa:" + totalValue + "L";
            tem.innerHTML = "Quanto tem na caixa: " + temValue + "L" ;
        })
        .catch(error => {
            console.error('Ocorreu um erro:', error);
        });
}

window.onload = aumentar;
