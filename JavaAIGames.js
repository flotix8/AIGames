function dark(){
    var a = document.getElementById("click");

    var search = document.querySelector('#scearch');

    var paint = document.querySelector('.paint');
    var snake = document.querySelector('.snake');

	if(a.checked == true){

        search.style.backgroundColor = "#dad8d8";

        paint.style.color = "#000000";
        snake.style.color = "black";
	}
	else{

        search.style.backgroundColor = "#1f1d1d";

        paint.style.color = "#ffffff";
        snake.style.color = "white";
	}
}

function darkJ(){
    var a = document.getElementById("click");

    var search = document.querySelector('#scearch');

    var bordure = document.querySelector('#bordure');
    var paint = document.querySelector('.paint');
    var snake = document.querySelector('.snake');

	if(a.checked == true){
        search.style.backgroundColor = "#dad8d8";

        bordure.style.backgroundColor = "#bfbfbf";
        paint.style.color = "#1a1a1a";
        snake.style.color = "#1a1a1a";
	}
	else{
        search.style.backgroundColor = "#1f1d1d";

        bordure.style.backgroundColor = "#1b1b1b";
        paint.style.color = "#dfdfdf";
        snake.style.color = "#dfdfdf";
	}
}


function darkP(){
    var a = document.getElementById("click");

    var search = document.querySelector('#scearch');

    var bodyG = document.querySelector(".bodyG")

	if(a.checked == true){
        search.style.backgroundColor = "#dad8d8";
        bodyG.style.background = "#cccccc"
	}
	else{
        search.style.backgroundColor = "#1f1d1d";
        bodyG.style.background = "#181818"
	}
}


function darkC(){
    var a = document.getElementById("click");

    var search = document.querySelector('#scearch');

    var twitter = document.querySelector('.reseaux li a.twitter');
    var instagram = document.querySelector('.reseaux li a.instagram');
    var youtube = document.querySelector('.reseaux li a.youtube');
    var github = document.querySelector('.reseaux li a.github');

	if(a.checked == true){
        search.style.backgroundColor = "#dad8d8";
        search.style.color = "black";
        
        twitter.style.background = "white";
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

        twitter.style.background = "black";
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
        document.getElementById("accueil2").innerHTML="Home";
        document.getElementById("jeux").innerHTML="Project";
        document.getElementById("projet").innerHTML="Games";
        document.getElementById("contact").innerHTML="Contact";

        document.querySelector(".rateWeb").innerHTML="Rate this website";

    } else if (i==2) {
        document.getElementById("accueil2").innerHTML="Accueil";
        document.getElementById("jeux").innerHTML="Projet";
        document.getElementById("projet").innerHTML="Jeux";
        document.getElementById("contact").innerHTML="Contact";

        document.querySelector(".rateWeb").innerHTML="Évaluez ce site Web";
      
    } else if (i==3) {
        document.getElementById("accueil2").innerHTML="Bienvenida";
        document.getElementById("jeux").innerHTML="Proyecto";
        document.getElementById("projet").innerHTML="Juegos";
        document.getElementById("contact").innerHTML="Contacto";

        document.querySelector(".rateWeb").innerHTML="Califica este sitio web";
      
    } else if (i==4) {
        document.getElementById("accueil2").innerHTML="歡迎";
        document.getElementById("jeux").innerHTML="项目";
        document.getElementById("projet").innerHTML="游戏";
        document.getElementById("contact").innerHTML="接觸";

        document.querySelector(".rateWeb").innerHTML="評價這個網站";
      
    }
}


function changeJ() {
    var i = document.getElementById("lan").value;
    if (i==1) {
        document.getElementById("accueil").innerHTML="Home";
        document.getElementById("jeux2").innerHTML="Project";
        document.getElementById("projet").innerHTML="Games";
        document.getElementById("contact").innerHTML="Contact";

        document.querySelector(".rateWeb").innerHTML="Rate this website";

    } else if (i==2) {
        document.getElementById("accueil").innerHTML="Accueil";
        document.getElementById("jeux2").innerHTML="Projet";
        document.getElementById("projet").innerHTML="Jeux";
        document.getElementById("contact").innerHTML="Contact";

        document.querySelector(".rateWeb").innerHTML="Évaluez ce site Web";
      
    } else if (i==3) {
        document.getElementById("accueil").innerHTML="Bienvenida";
        document.getElementById("jeux2").innerHTML="Proyecto";
        document.getElementById("projet").innerHTML="Juegos";
        document.getElementById("contact").innerHTML="Contacto";

        document.querySelector(".rateWeb").innerHTML="Califica este sitio web";
      
    } else if (i==4) {
        document.getElementById("accueil").innerHTML="歡迎";
        document.getElementById("jeux2").innerHTML="项目";
        document.getElementById("projet").innerHTML="游戏";
        document.getElementById("contact").innerHTML="接觸";

        document.querySelector(".rateWeb").innerHTML="評價這個網站";
      
    }
}


function changeP() {
    var i = document.getElementById("lan").value;
    if (i==1) {
        document.getElementById("accueil").innerHTML="Home";
        document.getElementById("jeux").innerHTML="Project";
        document.getElementById("projet2").innerHTML="Games";
        document.getElementById("contact").innerHTML="Contact";

        document.querySelector(".rateWeb").innerHTML="Rate this website";

    } else if (i==2) {
        document.getElementById("accueil").innerHTML="Accueil";
        document.getElementById("jeux").innerHTML="Projet";
        document.getElementById("projet2").innerHTML="Jeux";
        document.getElementById("contact").innerHTML="Contact";

        document.querySelector(".rateWeb").innerHTML="Évaluez ce site Web";
      
    } else if (i==3) {
        document.getElementById("accueil").innerHTML="Bienvenida";
        document.getElementById("jeux").innerHTML="Proyecto";
        document.getElementById("projet2").innerHTML="Juegos";
        document.getElementById("contact").innerHTML="Contacto";

        document.querySelector(".rateWeb").innerHTML="Califica este sitio web";
      
    } else if (i==4) {
        document.getElementById("accueil").innerHTML="歡迎";
        document.getElementById("jeux").innerHTML="项目";
        document.getElementById("projet2").innerHTML="游戏";
        document.getElementById("contact").innerHTML="接觸";

        document.querySelector(".rateWeb").innerHTML="評價這個網站";
      
    }
}


function changeC() {
    var i = document.getElementById("lan").value;
    if (i==1) {
        document.getElementById("accueil").innerHTML="Home";
        document.getElementById("jeux").innerHTML="Project";
        document.getElementById("projet").innerHTML="Games";
        document.getElementById("contact2").innerHTML="Contact";

        document.querySelector(".rateWeb").innerHTML="Rate this website";

    } else if (i==2) {
        document.getElementById("accueil").innerHTML="Accueil";
        document.getElementById("jeux").innerHTML="Projet";
        document.getElementById("projet").innerHTML="Jeux";
        document.getElementById("contact2").innerHTML="Contact";

        document.querySelector(".rateWeb").innerHTML="Évaluez ce site Web";
      
    } else if (i==3) {
        document.getElementById("accueil").innerHTML="Bienvenida";
        document.getElementById("jeux").innerHTML="Proyecto";
        document.getElementById("projet").innerHTML="Juegos";
        document.getElementById("contact2").innerHTML="Contacto";

        document.querySelector(".rateWeb").innerHTML="Califica este sitio web";
      
    } else if (i==4) {
        document.getElementById("accueil").innerHTML="歡迎";
        document.getElementById("jeux").innerHTML="项目";
        document.getElementById("projet").innerHTML="游戏";
        document.getElementById("contact2").innerHTML="接觸";

        document.querySelector(".rateWeb").innerHTML="評價這個網站";      
    }
}



function SelecteGame() {
	var e = document.getElementById("GameSelect2").value;
	var Power4 = document.querySelector('.power4');
	var tic_tac_toe = document.querySelector('.tic-tac-toe');
    var BallGame = document.querySelector('#canvas');
    var snakeGame = document.querySelector('#SnakeGame');
    var chess = document.querySelector('.containerChess');
    if (e==1) {
        tic_tac_toe.style.visibility = "visible";
		Power4.style.visibility = "hidden";
        BallGame.style.visibility = "hidden";
        snakeGame.style.visibility = "hidden";
        chess.style.visibility = "hidden";
    } else if (e==2) {
        tic_tac_toe.style.visibility = "hidden";
		Power4.style.visibility = "visible";
        BallGame.style.visibility = "hidden";
        snakeGame.style.visibility = "hidden";
        chess.style.visibility = "hidden";
    } else if (e==3) {
        tic_tac_toe.style.visibility = "hidden";
		Power4.style.visibility = "hidden";
        BallGame.style.visibility = "visible";
        snakeGame.style.visibility = "hidden";
        chess.style.visibility = "hidden";
    } else if (e==4) {
        tic_tac_toe.style.visibility = "hidden";
		Power4.style.visibility = "hidden";
        BallGame.style.visibility = "hidden";
        snakeGame.style.visibility = "visible";
        chess.style.visibility = "hidden";
    } else if (e==5) {
        tic_tac_toe.style.visibility = "hidden";
		Power4.style.visibility = "hidden";
        BallGame.style.visibility = "hidden";
        snakeGame.style.visibility = "hidden";
        chess.style.visibility = "visible";
    }
}
