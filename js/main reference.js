const main = function () {
  new Swiper("#swiper-1", {
    effect: "cube", // delete for sideways motion, use fade
    autoplay: {
      delay: 6500,
    },
    pagination: {
      el: "#swiper-1 .swiper-pagination",
      clickable: true,
    },
    lazyloading: true,
    loop: true,
  });

  const scrollButton = document.querySelector(".go-to-top");
      scrollButton.style.display = "none";

  scrollButton.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });

  document.addEventListener("scroll", (e) => {
    if (document.documentElement.scrollTop <= 750) {
      scrollButton.style.display = "none";
    } else {
      scrollButton.style.display = "block";
    }
  });
};

const init = function () {
  c(74);
  main();
};

window.onload = function () {
  init();
};
