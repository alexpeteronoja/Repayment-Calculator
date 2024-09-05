document.querySelector(".reset").addEventListener("click", function() {
    document.querySelector("#mortgage-calculator").reset();

})

document.querySelector("#mortgage-calculator").addEventListener("submit", function(event) {
    event.preventDefault();



    // Getting the Variables

    var principal = document.getElementById("mort-amount").value;
    var numOfYears = document.querySelector(".years").value;
    var intPercent = document.querySelector(".percentage").value;
    let radios = document.getElementsByName("mortgate-type");

    // Error Message

    if (principal === "") {
        document.getElementById("hide-mort-amt").classList.remove("hide");
        document.querySelector(".input-p-left").classList.add("hide-textcolor");

    } else {
        document.getElementById("hide-mort-amt").classList.add("hide");
        document.querySelector(".input-p-left").classList.remove("hide-textcolor");
    }


    if (numOfYears === "") {
        document.getElementById("hide-mort-term").classList.remove("hide");
        document.querySelector(".term").classList.add("hide-textcolor");

    } else {
        document.getElementById("hide-mort-term").classList.add("hide");
        document.querySelector(".term").classList.remove("hide-textcolor");
    }

    if (intPercent === "") {
        document.getElementById("hide-interest").classList.remove("hide");
        document.querySelector(".rate").classList.add("hide-textcolor");
    } else {
        document.getElementById("hide-interest").classList.add("hide");
        document.querySelector(".rate").classList.remove("hide-textcolor");
    }

    if (radios[0].checked || radios[1].checked) {
        document.getElementById("selection").classList.add("hide");
    } else {
        document.getElementById("selection").classList.remove("hide");
        document.getElementById("selection").style.color = "hsl(4, 69%, 50%)";
    }

    // Calculations

    let intRate = (intPercent / 100) / 12;
    let morgateTerm = numOfYears * 12;
    let rate = Math.pow((1 + intRate), morgateTerm);


    let repayment = (principal * intRate * rate) / (rate - 1)
    repayment = parseFloat(repayment.toFixed(2));

    let yearlyRepayment = repayment * 12;
    yearlyRepayment = yearlyRepayment.toFixed(2);
    console.log(repayment);

    // Calculation for only Interest

    let yearInterest = (yearlyRepayment - principal).toFixed(2);
    let monthlyInterest = (yearInterest / 12).toFixed(2);

    //Output Result

    if (repayment === "" || isNaN(repayment) || repayment === Infinity) {
        document.querySelector(".result-section").classList.remove("hide");
        document.querySelector(".repayment-container").classList.add("hide");


    } else if (radios[0].checked) {
        document.querySelector(".result-section").classList.add("hide");
        document.querySelector(".repayment-container").classList.remove("hide");
        document.querySelector(".mont-repay").innerHTML = "£" + repayment;
        document.querySelector(".year-repay").innerHTML = "£" + yearlyRepayment;
    } else if (radios[1].checked) {
        document.querySelector(".result-section").classList.add("hide");
        document.querySelector(".repayment-container").classList.remove("hide");
        document.querySelector(".mont-repay").innerHTML = "£" + monthlyInterest;
        document.querySelector(".year-repay").innerHTML = "£" + yearInterest;
    }


})