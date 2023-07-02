
function compute()
{
    var principal = document.getElementById("principal").value;
    //var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var rate = document.getElementById("slider").value;
    //document.getElementById("rate").innerText=rate;
    var year = new Date().getFullYear()+parseInt(years);
    // function updateRate() {
    //     var rate  = document.getElementById("slider").value;
    //     document.getElementById("rate").innerText=rate;
    // };
    var amount = principal * years * parseFloat(rate) /100;
    
    if ((principal==0) || (principal<0) ){
        alert("Enter a positive number for the principal value.");
        var txt = document.getElementById("principal").focus();

    } else {
        document.getElementById("result").innerHTML="\<br\>If you deposit \<span class='highlight'\>£"+principal+"\</span\>,\<br\>at an interest rate of \<span class='highlight'\>"+parseFloat(rate)+"\</span\>%\<br\>You will receive an amount of \<span class='highlight'\>"+amount+"\</span\>,\<br\>in the year \<span class='highlight'\>"+year+"\</span\>\<br\>"
    };

}
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    //console.log(rateval);
    document.getElementById("rate").innerText=parseFloat(rateval);

}
