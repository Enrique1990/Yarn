function calculateTip(percentage) {
    const spendingMoney = document.getElementById("spending_money").value;
    const focus = document.getElementsByClassName("focus");
    const numberOfPeople = parseInt(
      document.getElementById("number_of_people").value
    );
    const notZeroMsg = document.getElementById("not_zero");

    if (numberOfPeople > 0) {
      document.getElementById("number_of_people").classList.remove("focus");
      notZeroMsg.style.display = "none";
      const tip = spendingMoney * (percentage / 100);

      if (numberOfPeople >= 1) {
        const tipPerPerson = tip / numberOfPeople;
        document.querySelector(".price").innerHTML =
          "$" + tipPerPerson.toFixed(2);
      } else {
        document.querySelector(".price").innerHTML = "$" + tip.toFixed(2);
      }

      document.getElementById("total").innerHTML =
        "$" + (parseFloat(spendingMoney) + tip).toFixed(2);
    } else {
      notZeroMsg.style.display = "block";
      document.getElementById("number_of_people").classList.add("focus");
      
    }
  }

  const btn10Percent = document.getElementsByClassName("btn")[0];
  const btn15Percent = document.getElementsByClassName("btn")[1];
  const btn20Percent = document.getElementsByClassName("btn")[2];
  const btn25Percent = document.getElementsByClassName("btn")[3];
  const btn50Percent = document.getElementsByClassName("btn")[4];
  const customInput = document.getElementById("custom_percentage_input");
  const resetBtn = document.getElementsByClassName("reset")[0];

  btn10Percent.addEventListener("click", function () {
    calculateTip(10);
  });
  btn15Percent.addEventListener("click", function () {
    calculateTip(15);
  });

  btn20Percent.addEventListener("click", function () {
    calculateTip(20);
  });

  btn25Percent.addEventListener("click", function () {
    calculateTip(25);
  });

  btn50Percent.addEventListener("click", function () {
    calculateTip(50);
  });

  customInput.addEventListener("input", function () {
    const customPercentage = parseFloat(customInput.value);

    if (!isNaN(customPercentage)) {
      calculateTip(customPercentage);
    }
  });
  resetBtn.addEventListener("click", function () {
    document.getElementById("spending_money").value = "";
    document.getElementById("number_of_people").value = "";
    document.getElementById("custom_percentage_input").value = "";
    document.querySelector(".price").innerHTML = "$0.00";
    document.getElementById("total").innerHTML = "$0.00";
  });