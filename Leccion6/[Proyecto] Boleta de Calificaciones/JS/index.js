let table = document.getElementById("table");

let gradesHolder = document.getElementById("table-childs");

let results = document.getElementById("results");

let materias = ["Quimica", "Geografia", "Matematicas", "Sexualidad", "Deportes"];
let notas = [7, 3, 10, 8, 9];

let mc = false;
let pro = false;
let re = false;

function init(){
    table.hidden = true;
}

function mostrarNotas(){
    let childs = gradesHolder.childNodes;
    
    for(let i = childs.length - 1; i >= 0; i--){
        gradesHolder.removeChild(childs[i]);
    }

    table.hidden = false;

    for(let i in notas){
        let data = document.createElement("tr");
        let datachild = document.createElement("td");
        let grade = document.createElement("td");

        datachild.textContent = materias[i];
        datachild.classList.add("tr-Mat");

        grade.textContent = notas[i];
        grade.classList.add("notas");

        gradesHolder.appendChild(data);
        data.appendChild(datachild);
        data.appendChild(grade);
    }
}

function mejorCalificacion(){

    if(mc === true) return;

    let mejor= -1;
    let mat = '';

    for(let n in notas){
        if (notas[n] > mejor){
            mejor = notas[n];
            mat = materias[n]
        }
    }
    
    let p = document.createElement("p");
    p.textContent = "La mejor calificacion fue en " + mat + " con un " + mejor;

    results.appendChild(p);
    mc = true;
}

function promedio(){
    if(pro === true) return;
    let sum = 0;

    for(let n of notas){
        sum += n;
    }
    sum = sum / notas.length;

    let p = document.createElement("p");
    p.textContent = "El promedio fue de " + sum;

    results.appendChild(p);

    pro = true;
}

function reprobo(){
    if (re === true) return; 

    let reprobo = false;
    for(let n of notas){
        if (n < 6){
            reprobo = true;
            break
        }
    }

    let p = document.createElement("p");
    p.textContent = "El alumno " + (reprobo ? "si" : "no") + " reprobo";

    results.appendChild(p);

    re = true;
}