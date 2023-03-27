function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


  
// Expected output: 0, 1 or 2
var cscore = 0;
var uscore = 0;
function check(input){

    var winner = "";
    var choices = ["rock","paper","scissor"];
    var ind = getRandomInt(3);
    console.log(ind);
    var comp = choices[ind];

    
    if (input =="rock"){
        if (comp == "scissor"){
            winner="user";
            uscore++;
            document.getElementById("compo").innerHTML='<img src="c2.png">';
            document.getElementById("cscore").innerHTML="COMPUTER: "+ cscore;
            document.getElementById("uscore").innerHTML="YOU: "+ uscore;


        }
        else if (comp == "paper"){
            winner="comp";
            cscore++;
            document.getElementById("compo").innerHTML='<img src="c1.png">';
            document.getElementById("cscore").innerHTML="COMPUTER: "+ cscore;
            document.getElementById("uscore").innerHTML="YOU: "+ uscore;



        }
        else if (comp == "rock"){
            winner="tie";
            document.getElementById("compo").innerHTML='<img src="c3.png">';
            document.getElementById("cscore").innerHTML="COMPUTER: "+ cscore;
            document.getElementById("uscore").innerHTML="YOU: "+ uscore;




        }
    }
    else if (input =="paper"){
        if (comp == "scissor"){
            winner="comp";
            cscore++;
            document.getElementById("compo").innerHTML='<img src="c2.png">';
            document.getElementById("cscore").innerHTML="COMPUTER: "+ cscore;
            document.getElementById("uscore").innerHTML="YOU: "+ uscore;

            


        }
        else if (comp == "rock"){
            winner="user";
            uscore++;
            document.getElementById("compo").innerHTML='<img src="c3.png">';
            document.getElementById("cscore").innerHTML="COMPUTER: "+ cscore;
            document.getElementById("uscore").innerHTML="YOU: "+ uscore;
   


        }
        else if (comp == "paper"){
            winner="tie";
            document.getElementById("compo").innerHTML='<img src="c1.png">';
            document.getElementById("cscore").innerHTML="COMPUTER: "+ cscore;
            document.getElementById("uscore").innerHTML="YOU: "+ uscore;




        }
    }
    else if (input =="scissor"){
        if (comp == "rock"){
            winner="comp";
            cscore++;
            document.getElementById("compo").innerHTML='<img src="c3.png">';
            document.getElementById("cscore").innerHTML="COMPUTER: "+ cscore;
            document.getElementById("uscore").innerHTML="YOU: "+ uscore;

            



        }
        else if (comp == "paper"){
            winner="user";
            uscore++;
            document.getElementById("compo").innerHTML='<img src="c1.png">';
            document.getElementById("cscore").innerHTML="COMPUTER: "+ cscore;
            document.getElementById("uscore").innerHTML="YOU: "+ uscore;
            document.getElementByTagName("body").innerHTML=' style="background-color: aquamarine;"';
   
            


        }
        else if (comp == "scissor"){
            winner="tie";
            document.getElementById("compo").innerHTML='<img src="c2.png">';
            document.getElementById("cscore").innerHTML="COMPUTER: " + cscore;
            document.getElementById("uscore").innerHTML="YOU: "+ uscore;


        }
    };

    console.log(winner)
    return(winner);


}

function changeCom(){
    console.log(uscore)
    if (cscore> uscore){
        document.getElementById("cscore").style.backgroundColor = "#BFDB38";
        document.getElementById("uscore").style.backgroundColor = "#EB455F";

    }
    else if (cscore < uscore){
        document.getElementById("uscore").style.backgroundColor = "#BFDB38";
        document.getElementById("cscore").style.backgroundColor = "#EB455F";


    }
    else{
        document.getElementById("cscore").style.backgroundColor = "#BFDB38";
        document.getElementById("uscore").style.backgroundColor = "#BFDB38";


    }
}