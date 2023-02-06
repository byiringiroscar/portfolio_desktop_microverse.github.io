window.onload = function(){
    const mobile_btn = document.querySelector(".mob-icon");
    const mobile_btn_close = document.querySelector(".close-btn");
    const mobile_body = document.querySelector(".mobile-body");
    const nav_main = document.querySelector(".main-nav");
    // const mainLogo = document.querySelector(".main-logo");
    mobile_btn.addEventListener('click', function(){
        mobile_btn.classList.remove('is-active');
        mobile_btn_close.classList.add('is-active');
        mobile_body.classList.add("is-active");
        nav_main.style.position = "fixed";

    });
    mobile_btn_close.addEventListener('click', function(){
        mobile_btn.classList.add('is-active');
        mobile_btn_close.classList.remove('is-active');
        mobile_body.classList.remove("is-active");
        nav_main.style.position = "static";
    });
}

