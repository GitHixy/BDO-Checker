function toggleMusic() {
    const music = document.getElementById('backgroundMusic');
    if (music.paused) {
      music.play();
    } else {
      music.pause();
      music.currentTime = 0; // Reset playback to the beginning
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
