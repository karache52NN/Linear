
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
        numberOne.style.width=(event.target.value*38)+"px";


    }
    function onchangeHandler2(event) {
        var seconddigit = document.getElementById("extentionSecondNumber");
        var res=document.getElementById("extentionResult");


        if(event.target.value==4){
            seconddigit.style.backgroundColor = "yellow";
            res.innerHTML="11";

        }
        else{
            seconddigit.style.backgroundColor = "red";
            res.innerHTML="?";

        }
        var numberTwo=document.getElementById("numberTwo");
        numberTwo.style.width=(event.target.value*38)+"px";


    }

    var form = document.getElementById("summandOne");
    form.onchange = onchangeHandler1;
    var form1 = document.getElementById("summandTwo");
    form1.onchange = onchangeHandler2;

}