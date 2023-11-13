function toggleMusic() {
  const music = document.getElementById("backgroundMusic");
  if (music.paused) {
    music.play();
  } else {
    music.pause();
    music.currentTime = 0;
  }
}
function checkConfirmation(type, isPositive = true) {
  const resultElement = document.getElementById(`${type}Result`);
  if (!resultElement.textContent) {
    resultElement.textContent = isPositive
      ? "Yes, prepared and ready!"
      : "No, better check again!";
    resultElement.className = isPositive ? "green" : "red";
  }
}

function chooseGrind(grindType) {
  if (grindType === "silver") {
    document.getElementById("silverGrind").style.display = "block";
    document.getElementById("expGrind").style.display = "none";
  } else {
    document.getElementById("silverGrind").style.display = "none";
    document.getElementById("expGrind").style.display = "block";
  }
}

function checkKratuga(type, isPositive = true) {
  const resultElement = document.getElementById("kratugaResult");
  if (!resultElement.textContent) {
    resultElement.textContent = isPositive
      ? "Kratuga awaits! Remember to activate Agris!"
      : "No worries, enjoy your grind!";
    resultElement.className = isPositive ? "green" : "red";

    if (isPositive) {
      const agrisActivation = confirm(
        "Have you activated Agris for your Kratuga adventure?"
      );
      if (!agrisActivation) {
        alert("Agris is recommended for an enhanced Kratuga experience!");
      }
    }
  }
}

function checkSilverGrind(item) {
  const confirmedList = document.getElementById("silverGrindList");
  if (confirmedList.innerHTML.indexOf(item) === -1) {
    confirmedList.innerHTML += `<li>${item}</li>`;
    document.getElementById("confirmedSilverGrind").style.display = "block";
  }
}

function checkExpGrind(item) {
  const confirmedList = document.getElementById("expGrindList");
  if (confirmedList.innerHTML.indexOf(item) === -1) {
    confirmedList.innerHTML += `<li>${item}</li>`;
    document.getElementById("confirmedExpGrind").style.display = "block";
  }
}
function resetInputs() {
  const crystalInput = document.getElementById("crystalInput");
  const questInput = document.getElementById("questInput");
  const silverGrindInput = document.getElementById("silverGrindInput");
  const expGrindInput = document.getElementById("expGrindInput");
  const kratugaInput = document.getElementById("kratugaInput");
  const agrisInput = document.getElementById("agrisInput");

  if (crystalInput) crystalInput.value = "";
  if (questInput) questInput.value = "";
  if (silverGrindInput) silverGrindInput.checked = false;
  if (expGrindInput) expGrindInput.checked = false;
  if (kratugaInput) kratugaInput.checked = false;
  if (agrisInput) agrisInput.checked = false;

  const crystalsResult = document.getElementById("crystalsResult");
  const questResult = document.getElementById("questResult");
  const kratugaResult = document.getElementById("kratugaResult");
  const silverGrindList = document.getElementById("silverGrindList");
  const expGrindList = document.getElementById("expGrindList");

  if (crystalsResult) crystalsResult.innerHTML = "";
  if (questResult) questResult.innerHTML = "";
  if (kratugaResult) kratugaResult.innerHTML = "";
  if (silverGrindList) silverGrindList.innerHTML = "";
  if (expGrindList) expGrindList.innerHTML = "";

  const confirmedSilverGrind = document.getElementById("confirmedSilverGrind");
  const confirmedExpGrind = document.getElementById("confirmedExpGrind");

  if (confirmedSilverGrind) confirmedSilverGrind.style.display = "none";
  if (confirmedExpGrind) confirmedExpGrind.style.display = "none";

  alert("Inputs and Results reset successfully!");
}
