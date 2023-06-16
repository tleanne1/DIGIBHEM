window.onload = function () {
  let form = document.querySelector("form");
  form.onsubmit = function (event) {
    // in this section we get the value for each form input
    const person1Input = document.getElementById("person1Input").value;
    const person2Input = document.getElementById("person2Input").value;
    const animalInput = document.getElementById("animalInput").value;
    const exclamationInput = document.getElementById("exclamationInput").value;
    const verbInput = document.getElementById("verbInput").value;
    const adjInput = document.getElementById("adjInput").value;

    // then we set the story variables to the values we got from the form
    document.querySelector("span#person1a").innerText = person1Input;
    document.querySelector("span#person2a").innerText = person2Input;
    document.querySelector("span#animal").innerText = animalInput;
    document.querySelector("span#verb").innerText = verbInput;
    document.querySelector("span#exclamation").innerText = exclamationInput;
    document.querySelector("span#adj").innerText = adjInput;

    document.querySelector("div#story").removeAttribute("class");

    event.preventDefault();
  };
};
