function displayRadioValue() {
  var deluxe = 2500;
  var suite = 4000;
  var a_c = 1000;
  var locker = 300;

  var roomType = document.querySelector('input[name="room"]:checked');
  if (roomType != null) {
    roomType = roomType.value;
  } else {
    roomType = "";
  }
  var amentiesType = document.querySelector('input[name="amenties"]:checked');
  if (amentiesType != null) {
    amentiesType = amentiesType.value;
  } else {
    amentiesType = "";
  }

  var checkIn = document.querySelector("#user_input2").value;
  var checkOut = document.querySelector("#user_input3").value;
  var totalDays = document.querySelector("#user_input4").value;
  var totalPeople = document.querySelector("#user_input5").value;
  var advance = document.querySelector("#user_input6").value;

  var roomCost;
  if (roomType === "Deluxe") {
    roomCost = deluxe;
  } else if (roomType === "Suite") {
    roomCost = suite;
  }

  var amentiesCost;
  if (amentiesType === "A/C") {
    amentiesCost = a_c;
  } else if (amentiesType === "Locker") {
    amentiesCost = locker;
  }

  var extraPeopleCost = 0;
  if (totalPeople > 2) {
    extraPeopleCost = 1000 * (totalPeople - 2);
  }

  var total = roomCost + amentiesCost * totalDays + extraPeopleCost;
  var balance = total - advance;

  let customerName = document.querySelector("#user_input").value;

  document.querySelector("#story").innerHTML =
    "Customer Name: " +
    customerName +
    "<br>" +
    "Check In: " +
    checkIn +
    "<br>" +
    "Check Out: " +
    checkOut +
    "<br>" +
    "Total No of Days: " +
    totalDays +
    "<br>" +
    "Total No of People: " +
    totalPeople +
    "<br>" +
    "Room Type: " +
    roomType +
    "<br>" +
    "Amenties: " +
    amentiesType +
    "<br>" +
    "Advance Amount: $" +
    advance +
    "<br>" +
    "Extra People Cost: $" +
    extraPeopleCost +
    "<br><br>" +
    "Total: $" +
    total +
    "<br>" +
    "Balance: $" +
    balance;

  function calculateCost() {
    let checkInDate = new Date(document.getElementById("user_input2").value);
    let checkOutDate = new Date(document.getElementById("user_input3").value);
    let days = (checkOutDate - checkInDate) / (1000 * 3600 * 24);

    let people = document.getElementById("user_input5").value;
    let cost = 0;
    if (people <= 2) {
      cost = 0;
    } else {
      cost = 1000 * (people - 2);
    }

    cost += days * document.querySelector('input[name="room"]:checked').value;
    cost += document.querySelector('input[name="amenties"]:checked').value;
    cost += document.getElementById("user_input6").value;

    document.getElementById("story").innerText = "Your total cost is: $" + cost;
    document.getElementById("story").classList.remove("hidden");
  }

  document
    .getElementById("register-form")
    .addEventListener("submit", calculateCost);
}
