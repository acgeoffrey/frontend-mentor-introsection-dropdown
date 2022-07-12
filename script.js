"use strict";

const featuresEl = document.getElementById("features");
const companyEl = document.getElementById("company");
const menuOpenEl = document.getElementById("menu-open");
const menuCloseEL = document.getElementById("menu-close");

featuresEl.addEventListener("click", function () {
  document.querySelector(".nav-drop-features").classList.toggle("hidden");
  document.getElementById("mob-nav-features").classList.toggle("hidden");
  document.querySelector(".nav-drop-company").classList.add("hidden");
  document.getElementById("features-arrow").src = "images/icon-arrow-up.svg";
  if (
    document.querySelector(".nav-drop-features").classList.contains("hidden")
  ) {
    document.getElementById("features-arrow").src =
      "images/icon-arrow-down.svg";
  }
  document.getElementById("company-arrow").src = "images/icon-arrow-down.svg";
});

companyEl.addEventListener("click", function () {
  document.querySelector(".nav-drop-company").classList.toggle("hidden");
  document.getElementById("mob-nav-company").classList.toggle("hidden");
  document.querySelector(".nav-drop-features").classList.add("hidden");
  document.getElementById("features-arrow").src = "images/icon-arrow-down.svg";
  document.getElementById("company-arrow").src = "images/icon-arrow-up.svg";

  if (
    document.querySelector(".nav-drop-company").classList.contains("hidden")
  ) {
    document.getElementById("company-arrow").src = "images/icon-arrow-down.svg";
  }
});

menuOpenEl.addEventListener("click", function () {
  document.querySelector(".mobile-nav-bar-blur").classList.toggle("hidden");
});

menuCloseEL.addEventListener("click", function () {
  document.querySelector(".mobile-nav-bar-blur").classList.toggle("hidden");
});
