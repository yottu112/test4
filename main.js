const imgSrc = new Array('img/dice1.png', 'img/dice2.png', 'img/dice3.png', 'img/dice4.png', 'img/dice5.png', 'img/dice6.png');
const startBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset-btn');
const saikoroImg = document.getElementById('shake');
const saikoroImg2 = document.getElementById('shake2');
const saikoroImg3 = document.getElementById('shake3');

let count

const resetSrc = "img/saikoro.png";

resetBtn.onclick = function() {
    saikoroImg.src = resetSrc;
    saikoroImg2.src = resetSrc;
    saikoroImg3.src = resetSrc;
}

startBtn.onclick = function() {
    function shake() {
        const random = Math.floor(Math.random() * imgSrc.length);
        saikoroImg.src = imgSrc[random];

        const random1 = Math.floor(Math.random() * imgSrc.length);
        saikoroImg2.src = imgSrc[random1];

        const random2 = Math.floor(Math.random() * imgSrc.length);
        saikoroImg3.src = imgSrc[random2];
    }

    function saikoroAnime() {

        if (count > 10) { 
            count = 0;
            startBtn.disabled = false;
            return;
        }
        shake();
        count++;
        setTimeout(saikoroAnime, 100); 
    }

    function btnSave() {
        count = 0;
        startBtn.disabled = true;
        saikoroAnime();
    }
    btnSave()

}
