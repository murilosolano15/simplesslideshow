/**
 * Simples slide show
 * @author Murilo Solano Oliva
 */

let intervalo = 2500 // 2500 milisegundos

function slide1() {
    document.getElementById('banner').src = 'banner1.jpg'
    //a linha abaixo executa a função após 3 segundos 
    setTimeout('slide2()', intervalo)
}

function slide2() {
    document.getElementById('banner').src = 'banner2.jpg'
    setTimeout('slide3()', intervalo)
}


function slide3() {
    document.getElementById('banner').src = 'banner3.jpg'
    setTimeout('slide1()', intervalo)
}