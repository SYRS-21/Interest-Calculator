function get_interest()
{
    var principle = document.getElementById("Principle").value;

    if(principle == "" || principle <= 0)
    {
        alert("Enter a positive number");
        document.getElementById("Principle").focus();
        return;
    }

    var Rate = document.getElementById("Rate").value;
    var date1 = new Date(document.getElementById("date1").value);
    var date2 = new Date(document.getElementById("date2").value);

    if(Rate == "" || Rate <= 0)
    {
        alert("Enter a positive number");
        document.getElementById("Rate").focus();
        return;
    }

    if (date2 < date1) {
        alert("Enter the Correct date");
        document.getElementById("date2").focus();
        return;
    }

    var time_diff = Math.abs (date2.getTime() - date1.getTime());
    var day_diff = Math.ceil(time_diff / (1000 * 3600 * 24)) ;
    var Time = day_diff / 30.41; 
    var interest = (principle * Time * Rate) / 100 ;

    var displayInterest = document.getElementById("interest");
    displayInterest.innerHTML = "" + Math.round(interest);

    var TotalAmount = Number (principle) + Number(Math.round(interest));
    var displayTotalAmount = document.getElementById("Total");
    displayTotalAmount.innerHTML = "" + TotalAmount;

    var CompoundInterest = principle * (Math.pow((1 + Rate / 100), Time));
    var displayCI = document.getElementById("CompoundInterest");
    displayCI.innerHTML = ""+ Math.round(CompoundInterest);

    var TotalCompoundInterest = Number(principle) + Number(Math.round(CompoundInterest));
    var displayTotalAmount = document.getElementById("TotalCI");
    displayTotalAmount.innerHTML = "" + TotalCompoundInterest;

}


function resetInput(){
    document.getElementById("formInput").reset();
}




