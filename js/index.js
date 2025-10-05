import _ from "https://cdn.jsdelivr.net/npm/underscore@1.13.6/modules/index-all.js";

document.addEventListener("DOMContentLoaded", function () {
  // Your code here

  //>  ████████████████████████████████████  SPINNER
  const loader = document.querySelector(".loader-wrapper");
  const content = document.querySelector(".content");

  // Show content and start fading out loader
  content.style.display = "block";
  loader.style.opacity = "0";
  // Hide loader completely after fade-out transition so it can't be interacted with
  loader.addEventListener("transitionend", () => {
    loader.style.display = "none";
  });

  //>  ████████████████████████████████████  RELOAD BUTTON
  const reloadButton = document.getElementById("reload-button");
  if (reloadButton) {
    reloadButton.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the link from navigating
      location.reload();
    });
  }

  document.body.style.backgroundColor = "green";

  //>  ███████████████ OPEN WEATHER API d1a7fcdb2d6f38c6b216b37322444de9

  function r(min, max) {
    // 2.0, accepts single value for 1-x
    if (max === undefined) {
      max = min;
      min = 1;
    }
    const randomNumber = min - 1 + Math.ceil(Math.random() * (max + 1 - min));
    return randomNumber;
  }

  //>  ████████████████████████████████████  BRIGHT BACKGROUND

  // function getBrightRandomRGB() {
  //     const rrr = r(86, 255);
  //     const ggg = r(86, 255);
  //     const bbb = r(86, 255);
  //     const rgbColor = `rgb(${rrr}, ${ggg}, ${bbb})`;
  //     return rgbColor;
  // }

  // document.body.style.backgroundColor = getBrightRandomRGB();

  //>  ████████████████████████████████████  BRIGHT BACKGROUND GRADIENT

  function getBrightRandomGradientRGB() {
    const rrr1 = r(86, 255);
    const ggg1 = r(86, 255);
    const bbb1 = r(86, 255);
    const rrr2 = r(46, 200);
    const ggg2 = r(46, 200);
    const bbb2 = r(46, 200);
    const rgbColor1 = `rgb(${rrr1}, ${ggg1}, ${bbb1})`;
    const rgbColor2 = `rgb(${rrr2}, ${ggg2}, ${bbb2})`;
    return [rgbColor1, rgbColor2];
  }

  const [color1, color2] = getBrightRandomGradientRGB();
  // Set the gradient as a CSS variable on the root element (<html>)
  document.documentElement.style.setProperty(
    "--gradient",
    `linear-gradient(${color1}, ${color2})`
  );
  // Add a class to the body to trigger the CSS animation
  document.body.classList.add("animated-gradient");

  //>  ████████████████████████████████████  DARK TITLE

  // function getDarkTitleRGB() {
  //   return getVividHSL();
  // }

  // function getDarkTitleRGB() {
  //   const rrrt = r(45, 125);
  //   const gggt = r(45, 125);
  //   const bbbt = r(45, 125);
  //   const rgbColort = `rgb(${rrrt}, ${gggt}, ${bbbt})`;
  //   return rgbColort;
  // }

  // const colort = getDarkTitleRGB();
  // //   console.table(colort); // Log the color to the console for debugging
  // const h1Elements1 = document.querySelectorAll(".h1Dark");
  // h1Elements1.forEach((h1) => {
  //   h1.style.color = colort;
  // });
  //>  ████████████████████████████████████  LIGHT TITLE
  function getLightTitleRGB() {
    const rrrl = r(86, 255);
    const gggl = r(86, 255);
    const bbbl = r(86, 255);
    const rgbColorl = `rgb(${rrrl}, ${gggl}, ${bbbl})`;
    return rgbColorl;
  }

  const colorl = getLightTitleRGB();
  //   console.table(colort); // Log the color to the console for debugging
  const h1Elements2 = document.querySelectorAll(".h1Light");
  h1Elements2.forEach((h1) => {
    h1.style.color = colorl;
  });

  //_ ████████████████████████████████████  DATA STRUCTURES

  //_ ████████████████████████████████████  DATA STRUCTURES

  //>  ████████████████████████████████████  GENERAL PROGRAM

  //?  ████████████████████████████████████  ASYNC AWAIT

  //>  ████████████████████████████████████  GENERAL PROGRAM
});

// console.log(document.documentElement);

//^ ████████████████████████████████████  MISC
