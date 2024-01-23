const menu = document.getElementById("menu");
const up = document.getElementById("up");
const middle = document.getElementById("middle");
const down = document.getElementById("down");
const banner = document.getElementById("menu-banner")

let clickCount = true;

menu.addEventListener("click", () => {
    if(clickCount){
        middle.classList.add("middle");
        middle.addEventListener("animationend", () => {
            middle.style.display = 'none';

        up.classList.add("up");
        up.addEventListener("animationend", () => {
                up.style.transform = "rotate(-45deg)";
            });

        down.classList.add("down");
        down.addEventListener("animationend", () => {
                down.style.transform = "rotate(45deg)";
            });
    });
        down.classList.remove("down");
        banner.classList.add('menu-banner-anm');
        banner.addEventListener("animationend", () => {
            banner.style.top = "0";
        });


        clickCount = false;
    }
    else{
        middle.classList.remove('middle');
        up.classList.remove("up");
        down.classList.remove("down");
        down.classList.add("down-rm");


        banner.classList.remove('menu-banner-anm');
        banner.classList.add('menu-banner-anm-remove');
        banner.addEventListener("animationend", () => {
            banner.style.top = "-700px";
            banner.classList.remove('menu-banner-anm-remove');
        });
        


        up.style.transform = "rotate(0deg)";
        down.style.transform = "rotate(0deg)";
        middle.style.display = 'block';
        banner.style.top = '-700px'

        clickCount = true;
    }
    

})