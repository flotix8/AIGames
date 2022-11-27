function something(){
    console.log("Name :", prompt('What is your name or nickname ?'));
    console.log("Age :", parseInt(prompt('How old are you ?')));
    console.log("Opinion :", prompt('Do you like this web site ?'));
    console.log("Video game :", prompt('What is your favorite video game ?'));
    console.log("Technology :", prompt('Do you like the new technologies ?'));
    alert('Thank you for answering this survey.')
}



function dark(){
    var a = document.getElementById("click");
    
	var pseudotxt = document.querySelector('.pseudotxt');
    var sondage = document.querySelector('.sondageB');
    var search = document.querySelector('#scearch');
    var music = document.querySelector('#musicLogo');

    var paint = document.querySelector('.paint');
    var snake = document.querySelector('.snake');

	if(a.checked == true){
		pseudotxt.style.color = "#d9d8d8";

        
        sondage.style.backgroundColor = "#e9e9e9";
        sondage.style.color = "black";
        sondage.style.borderColor = "#4a4a4b";

        search.style.backgroundColor = "#dad8d8";
        music.style.color = "#f2f2f2";

        paint.style.color = "#000000";
        snake.style.color = "black";
	}
	else{
		pseudotxt.style.color = "#1a1919";

        sondage.style.backgroundColor = "#4d4d4d";
        sondage.style.color = "white";
        sondage.style.borderColor = "#e5e5e6";

        search.style.backgroundColor = "#1f1d1d";

        music.style.color = "#a5a5a5";

        paint.style.color = "#ffffff";
        snake.style.color = "white";
	}
}

function darkJ(){
    var a = document.getElementById("click");

    var search = document.querySelector('#scearch');
    var music = document.querySelector('#musicLogoJ');

    var bordure = document.querySelector('#bordure');
    var paint = document.querySelector('.paint');
    var snake = document.querySelector('.snake');

	if(a.checked == true){
        search.style.backgroundColor = "#dad8d8";
        music.style.color = "#f2f2f2";

        bordure.style.backgroundColor = "#bfbfbf";
        paint.style.color = "#1a1a1a";
        snake.style.color = "#1a1a1a";
	}
	else{
        search.style.backgroundColor = "#1f1d1d";
        music.style.color = "#a5a5a5";

        bordure.style.backgroundColor = "#1b1b1b";
        paint.style.color = "#dfdfdf";
        snake.style.color = "#dfdfdf";
	}
}


function darkP(){
    var a = document.getElementById("click");

    var search = document.querySelector('#scearch');
    var music = document.querySelector('#musicLogoP');

    var bordure = document.querySelector('#bordure');
    var paint = document.querySelector('.paint');
    var snake = document.querySelector('.snake');

	if(a.checked == true){
        search.style.backgroundColor = "#dad8d8";
        music.style.color = "#f2f2f2";
	}
	else{
        search.style.backgroundColor = "#1f1d1d";
        music.style.color = "#a5a5a5";
	}
}


function darkC(){
    var a = document.getElementById("click");

    var search = document.querySelector('#scearch');
    var music = document.querySelector('#musicLogoC');

    var twitter = document.querySelector('.reseaux li a.twitter');
    var instagram = document.querySelector('.reseaux li a.instagram');
    var youtube = document.querySelector('.reseaux li a.youtube');
    var github = document.querySelector('.reseaux li a.github');

	if(a.checked == true){
        search.style.backgroundColor = "#dad8d8";
        search.style.color = "black";
        music.style.color = "#f2f2f2";
        
        twitter.style.backgroundColor = "white";
        twitter.style.color = "black";
        instagram.style.backgroundColor = "white";
        instagram.style.color = "black";
        youtube.style.backgroundColor = "white";
        youtube.style.color = "black";
        github.style.backgroundColor = "white";
        github.style.color = "black";
	}
	else{
        search.style.backgroundColor = "#1f1d1d";
        search.style.color = "white";
        music.style.color = "#a5a5a5";

        twitter.style.backgroundColor = "black";
        twitter.style.color = "white";
        instagram.style.backgroundColor = "black";
        instagram.style.color = "white";
        youtube.style.backgroundColor = "black";
        youtube.style.color = "white";
        github.style.backgroundColor = "black";
        github.style.color = "white";
	}
}




function change() {
    var i = document.getElementById("lan").value;
    if (i==1) {
        document.getElementById("defau").innerHTML="Default";
        document.getElementById("hap").innerHTML="Happy";
        document.getElementById("mauvais").innerHTML="Sad";
        document.getElementById("angr").innerHTML="Angry";
        document.getElementById("think").innerHTML="Thinking";
        document.getElementById("shock").innerHTML="Shocked";
        document.getElementById("spac").innerHTML="SPAAACE";

        document.querySelector(".sondageB").innerHTML="Tap to take the poll";

        document.getElementById("accueil2").innerHTML="Home";
        document.getElementById("jeux").innerHTML="Games";
        document.getElementById("projet").innerHTML="Minecraft";
        document.getElementById("contact").innerHTML="Contact";

        document.querySelector(".rateWeb").innerHTML="Rate this website";

    } else if (i==2) {
        document.getElementById("defau").innerHTML="Defaut";
        document.getElementById("hap").innerHTML="Heureux";
        document.getElementById("mauvais").innerHTML="Triste";
        document.getElementById("angr").innerHTML="Fâché";
        document.getElementById("think").innerHTML="Pensant";
        document.getElementById("shock").innerHTML="Chocker";
        document.getElementById("spac").innerHTML="Espace";

        document.querySelector(".sondageB").innerHTML="Appuyez pour répondre au sondage";

        document.getElementById("accueil2").innerHTML="Accueil";
        document.getElementById("jeux").innerHTML="Jeux";
        document.getElementById("projet").innerHTML="Minecraft";
        document.getElementById("contact").innerHTML="Contact";

        document.querySelector(".rateWeb").innerHTML="Évaluez ce site Web";
      
    } else if (i==3) {
        document.getElementById("defau").innerHTML="Defecto";
        document.getElementById("hap").innerHTML="Contento";
        document.getElementById("mauvais").innerHTML="Triste";
        document.getElementById("angr").innerHTML="Enfadado";
        document.getElementById("think").innerHTML="Pensamiento";
        document.getElementById("shock").innerHTML="Conmocionado";
        document.getElementById("spac").innerHTML="Espacio";

        document.querySelector(".sondageB").innerHTML="Toca para realizar la encuesta";

        document.getElementById("accueil2").innerHTML="Bienvenida";
        document.getElementById("jeux").innerHTML="Juegos";
        document.getElementById("projet").innerHTML="Minecraft";
        document.getElementById("contact").innerHTML="Contacto";

        document.querySelector(".rateWeb").innerHTML="Califica este sitio web";
      
    } else if (i==4) {
        document.getElementById("defau").innerHTML="默認";
        document.getElementById("hap").innerHTML="快樂的";
        document.getElementById("mauvais").innerHTML="傷心";
        document.getElementById("angr").innerHTML="生氣的";
        document.getElementById("think").innerHTML="思維";
        document.getElementById("shock").innerHTML="震驚";
        document.getElementById("spac").innerHTML="空間";

        document.querySelector(".sondageB").innerHTML="點按即可參與投票";

        document.getElementById("accueil2").innerHTML="歡迎";
        document.getElementById("jeux").innerHTML="遊戲";
        document.getElementById("projet").innerHTML="Minecraft";
        document.getElementById("contact").innerHTML="接觸";

        document.querySelector(".rateWeb").innerHTML="評價這個網站";
      
    }
}


function changeJ() {
    var i = document.getElementById("lan").value;
    if (i==1) {
        document.getElementById("accueil").innerHTML="Home";
        document.getElementById("jeux2").innerHTML="Games";
        document.getElementById("projet").innerHTML="Minecraft";
        document.getElementById("contact").innerHTML="Contact";

        document.querySelector(".rateWeb").innerHTML="Rate this website";

    } else if (i==2) {
        document.getElementById("accueil").innerHTML="Accueil";
        document.getElementById("jeux2").innerHTML="Jeux";
        document.getElementById("projet").innerHTML="Minecraft";
        document.getElementById("contact").innerHTML="Contact";

        document.querySelector(".rateWeb").innerHTML="Évaluez ce site Web";
      
    } else if (i==3) {
        document.getElementById("accueil").innerHTML="Bienvenida";
        document.getElementById("jeux2").innerHTML="Juegos";
        document.getElementById("projet").innerHTML="Minecraft";
        document.getElementById("contact").innerHTML="Contacto";

        document.querySelector(".rateWeb").innerHTML="Califica este sitio web";
      
    } else if (i==4) {
        document.getElementById("accueil").innerHTML="歡迎";
        document.getElementById("jeux2").innerHTML="遊戲";
        document.getElementById("projet").innerHTML="Minecraft";
        document.getElementById("contact").innerHTML="接觸";

        document.querySelector(".rateWeb").innerHTML="評價這個網站";
      
    }
}


function changeP() {
    var i = document.getElementById("lan").value;
    if (i==1) {
        document.getElementById("accueil").innerHTML="Home";
        document.getElementById("jeux").innerHTML="Games";
        document.getElementById("projet2").innerHTML="Minecraft";
        document.getElementById("contact").innerHTML="Contact";

        document.querySelector(".rateWeb").innerHTML="Rate this website";

    } else if (i==2) {
        document.getElementById("accueil").innerHTML="Accueil";
        document.getElementById("jeux").innerHTML="Jeux";
        document.getElementById("projet2").innerHTML="Minecraft";
        document.getElementById("contact").innerHTML="Contact";

        document.querySelector(".rateWeb").innerHTML="Évaluez ce site Web";
      
    } else if (i==3) {
        document.getElementById("accueil").innerHTML="Bienvenida";
        document.getElementById("jeux").innerHTML="Juegos";
        document.getElementById("projet2").innerHTML="Minecraft";
        document.getElementById("contact").innerHTML="Contacto";

        document.querySelector(".rateWeb").innerHTML="Califica este sitio web";
      
    } else if (i==4) {
        document.getElementById("accueil").innerHTML="歡迎";
        document.getElementById("jeux").innerHTML="遊戲";
        document.getElementById("projet2").innerHTML="Minecraft";
        document.getElementById("contact").innerHTML="接觸";

        document.querySelector(".rateWeb").innerHTML="評價這個網站";
      
    }
}


function changeC() {
    var i = document.getElementById("lan").value;
    if (i==1) {
        document.getElementById("accueil").innerHTML="Home";
        document.getElementById("jeux").innerHTML="Games";
        document.getElementById("projet").innerHTML="Minecraft";
        document.getElementById("contact2").innerHTML="Contact";

        document.querySelector(".rateWeb").innerHTML="Rate this website";

    } else if (i==2) {
        document.getElementById("accueil").innerHTML="Accueil";
        document.getElementById("jeux").innerHTML="Jeux";
        document.getElementById("projet").innerHTML="Minecraft";
        document.getElementById("contact2").innerHTML="Contact";

        document.querySelector(".rateWeb").innerHTML="Évaluez ce site Web";
      
    } else if (i==3) {
        document.getElementById("accueil").innerHTML="Bienvenida";
        document.getElementById("jeux").innerHTML="Juegos";
        document.getElementById("projet").innerHTML="Minecraft";
        document.getElementById("contact2").innerHTML="Contacto";

        document.querySelector(".rateWeb").innerHTML="Califica este sitio web";
      
    } else if (i==4) {
        document.getElementById("accueil").innerHTML="歡迎";
        document.getElementById("jeux").innerHTML="遊戲";
        document.getElementById("projet").innerHTML="Minecraft";
        document.getElementById("contact2").innerHTML="接觸";

        document.querySelector(".rateWeb").innerHTML="評價這個網站";
      
    }
}
