function displayRadioValue() {
  var deluxe = 2500;
  var suite = 4000;
  var a_c = 1000;
  var locker = 300;

  var roomType = document.querySelector('input[name="room"]:checked').value;
  var amentiesType = document.querySelector(
    'input[name="amenties"]:checked'
  ).value;
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

  var total = roomCost + amentiesCost * totalDays;
  var balance = total - advance;

  document.querySelector("#story").innerHTML =
    "Room Type: " +
    roomType +
    "<br>" +
    "Amenties: " +
    amentiesType +
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
    "Advance Amount: $" +
    advance +
    "<br><br>" +
    "Total: $" +
    total +
    "<br>" +
    "Balance: $" +
    balance;
  document.querySelector("#story").classList.remove("hidden");
}
