//Timer
let timeLeft = 30;
let intervalID;

//Componentes HTML
let timeCountText = document.getElementById("timeLeft");

//Botones
let reiniciarBoton = document.getElementById("reiniciar");
let aceptarBoton = document.getElementById("aceptar");

//Text fields
let text1 = document.getElementById("t1");
let text2 = document.getElementById("t2");
let text3 = document.getElementById("t3");
let text4 = document.getElementById("t4");
let text5 = document.getElementById("t5");

function StartTimer(){
    reiniciarBoton.hidden = true;
    
    intervalID = setInterval(Timer, 1000);
}
function Timer(){
    timeLeft -= 1;

    if (timeLeft >= 0)
        timeCountText.textContent = "00:" + String(timeLeft).padStart(2, "0");
    else
        TimeEnded();
}

function TimeEnded(){
    reiniciarBoton.hidden = false;
    aceptarBoton.hidden = true;

    clearInterval(intervalID);
    alert("Game Over");
}

function Aceptar(){
    let validFields = 0;

    if (text1.value != "")
        validFields += 1;
    if (text2.value != "")
        validFields += 1;
    if (text3.value != "")
        validFields += 1;
    if (text4.value != "")
        validFields += 1;
    if (text5.value != "")
        validFields += 1;

    if (validFields == 5){
        clearInterval(intervalID);
        
        let alertTxt = "RESPUESTAS\n" + text1.value + "\n" + text2.value + "\n" + text3.value + "\n" + text4.value + "\n" + text5.value;
        let date = new Date();

        reiniciarBoton.hidden = false;
        aceptarBoton.hidden = true;

        alert(date.toLocaleDateString() + "\n" + alertTxt)
    }
}

function Reintentar(){
    location.reload();
}
