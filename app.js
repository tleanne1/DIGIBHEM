function displayRadioValue() {
  document.getElementById("name").innerHTML =
    "Customer Name: " + document.getElementById("user_input").value;
  document.getElementById("checkin").innerHTML =
    "Check In: " + document.getElementById("user_input2").value;
  document.getElementById("checkout").innerHTML =
    "Check Out: " + document.getElementById("user_input3").value;
  document.getElementById("days").innerHTML =
    "Total No of Days: " + document.getElementById("user_input4").value;
  document.getElementById("people").innerHTML =
    "Total No of People: " + document.getElementById("user_input5").value;

  document.querySelector("div#story").removeAttribute("class");

  var ele = document.getElementsByName("room");

  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked)
      document.getElementById("result").innerHTML = "Room: " + ele[i].value;
  }

  var ele = document.getElementsByName("amenties");

  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked)
      document.getElementById("sex.result").innerHTML =
        "Amenties: " + ele[i].value;
  }
}
