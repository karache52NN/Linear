
window.onload=init;
function init() {
    function onchangeHandler1(event) {
        var firstdigit = document.getElementById("extentionFirstNumber");
        var secondDigit = document.getElementById("numberTwo");

        if(event.target.value==7){
            firstdigit.style.backgroundColor = "yellow";
            secondDigit.classList.remove("hidden");
        }
        else{
            firstdigit.style.backgroundColor = "red";
            secondDigit.classList.add("hidden");
        }
        var numberOne=document.getElementById("numberOne");
        numberOne.style.width=(event.target.value*39)+"px";


    }
    function onchangeHandler2(event) {
        var seconddigit = document.getElementById("extentionSecondNumber");
        var resfield=document.getElementById("resOfExtention");
        var numberTwo=document.getElementById("numberTwo");
        numberTwo.style.width=(event.target.value*40)+"px";


        if(event.target.value==4){
            seconddigit.style.backgroundColor = "yellow";
            resfield.classList.remove("hidden");


        }
        else{
            seconddigit.style.backgroundColor = "red";
            resfield.classList.add("hidden");

        }
        var numberTwo=document.getElementById("numberTwo");
        numberTwo.style.width=(event.target.value*38)+"px";


    }
    function resChecker (event) {
        var Rezult= document.getElementById("resOfExtention");
        var Summand1= document.getElementById("extentionFirstNumber");
        var Summand2= document.getElementById("extentionSecondNumber");
        if (event.target.value==11){
            Rezult.style.backgroundColor="green";
            Summand1.style.backgroundColor="green";
            Summand2.style.backgroundColor="green";
        }
        else{
            Rezult.style.backgroundColor="red";
            Summand1.style.backgroundColor="yellow";
            Summand2.style.backgroundColor="yellow";
        }
    }

    var form = document.getElementById("summandOne");
    form.onchange = onchangeHandler1;
    var form1 = document.getElementById("summandTwo");
    form1.onchange = onchangeHandler2;
    var resultField=document.getElementById("resOfExtention");
    resultField.onchange= resChecker;


}