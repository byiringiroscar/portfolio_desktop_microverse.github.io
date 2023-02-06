/* eslint-disable quotes */
window.onload = function () {
  const mobileBtn = document.querySelector(".mob-icon");
  const mobileBtnClose = document.querySelector(".close-btn");
  const mobileBody = document.querySelector(".mobile-body");
  const navMain = document.querySelector(".main-nav");
  // const mainLogo = document.querySelector(".main-logo");
  mobileBtn.addEventListener("click", () => {
    mobileBtn.classList.remove("is-active");
    mobileBtnClose.classList.add("is-active");
    mobileBody.classList.add("is-active");
    // mobileBody.style.transition = "all 3s";
    navMain.style.position = "fixed";
    document.querySelector(".logo-link").style.display = "none";
  });
  mobileBtnClose.addEventListener("click", () => {
    mobileBtn.classList.add("is-active");
    mobileBtnClose.classList.remove("is-active");
    mobileBody.classList.remove("is-active");
    navMain.style.position = "static";
    document.querySelector(".logo-link").style.display = "block";
  });
};
