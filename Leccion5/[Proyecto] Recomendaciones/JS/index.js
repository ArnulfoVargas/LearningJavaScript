let inputField = document.getElementById("input");
let rec = document.getElementById("recomendaciones");
let image = document.getElementById("image");
let title = document.getElementById("movie-title");

let age = 0;

function hideRecomendations(){
    rec.hidden = true;
}
function validate(){
    let value = inputField.value;

    if (value == ""){
        value = "0";
    }
    age = value;
    inputField.value = value;
}

function genderSelect(value){
    switch(value){
        case 0:
            comedyMovies();
            break;
        case 1:
            horrorMovies();
            break;
        case 2:
            superHeroesMovies();
            break;
        case 3:
            romanceMovies();
            break;
    }
}
function comedyMovies(){
    if(age < 10){
        image.src = "https://m.media-amazon.com/images/I/81VxuVBN1cL.jpg";
        title.textContent = "Super Mario Bros. The Movie"
    }
    else if(age >= 10 && age < 16){
        image.src = "https://deadline.com/wp-content/uploads/2023/04/barbie-BARBIE_VERT_TSR_W_TALENT_2764x4096_DOM_rgb.jpg?w=800";
        title.textContent = "Barbie"
    }
    else {
        image.src = "https://moviepostermexico.com/cdn/shop/products/babylon_ver8_xxlg_1024x1024@2x.jpg?v=1679694504";
        title.textContent = "Babylon"
    }
    
    rec.hidden = false;
}
function horrorMovies(){
    if(age < 10){
        image.src = "https://m.media-amazon.com/images/I/51Zzd5zhAeL._AC_UF894,1000_QL80_.jpg";
        title.textContent = "ParaNorman"
    }
    else if(age >= 10 && age < 16){
        image.src = "https://criticasdecinesinspoilers.files.wordpress.com/2015/05/insidious-poster.jpg";
        title.textContent = "Insidious"
    }
    else {
        image.src = "https://static.cinepolis.com/resources/mx/movies/posters/414x603/42129-729588-20230405074853.jpg";
        title.textContent = "Evil Dead Rise"
    }
    
    rec.hidden = false;
}
function superHeroesMovies(){
    if(age < 10){
        image.src = "https://m.media-amazon.com/images/M/MV5BYTJjMDBjNjgtYjc2Ni00NDZiLWE2YjQtODQ1YTBlYTFkOWE4XkEyXkFqcGdeQXVyNjk1Mzk1NzI@._V1_FMjpg_UX1000_.jpg";
        title.textContent = "My Adventures with Superman"
    }
    else if(age >= 10 && age < 16){
        image.src = "https://m.media-amazon.com/images/I/8105Oc1+FPL.jpg";
        title.textContent = "Spider-Man: Across the Spider-verse"
    }
    else {
        image.src = "https://m.media-amazon.com/images/I/51EojTi9IiL._AC_UF894,1000_QL80_.jpg";
        title.textContent = "Hancock"
    }
    
    rec.hidden = false;
}
function romanceMovies(){
    if(age < 10){
        image.src = "https://lumiere-a.akamaihd.net/v1/images/image_d287bac4.jpeg?region=0%2C0%2C540%2C810";
        title.textContent = "Elemental"
    }
    else if(age >= 10 && age < 16){
        image.src = "https://m.media-amazon.com/images/I/91WlTjCgu4L.jpg";
        title.textContent = "Titanic"
    }
    else {
        image.src = "https://media1.popsugar-assets.com/files/thumbor/RMQONjbAjec7GWBXMCpUeYxJoiM/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2023/05/24/663/n/1922283/f366bdd16c384124_RWRB_Poster/i/Red-White-Royal-Blue-Poster-2.jpg";
        title.textContent = "Red, White & Royal Blue"
    }
    
    rec.hidden = false;
}