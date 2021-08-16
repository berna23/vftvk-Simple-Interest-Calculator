function compute()
{
    p = document.getElementById("principal").value;

    if(p<=0){
        alert("Enter a positive number.")
        document.getElementById("principal").focus()
    }
    else{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal*years*rate/100;
    var year = new Date().getFullYear()+parseInt(years);

    var text ="<br>If you deposit "+principal+",<br>at an interest rate of "+rate+"%.<br>You will receive an amount of "+interest+",<br>in the year "+year+""
    document.getElementById("result").innerHTML=text
    }
}

function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
          
