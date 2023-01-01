let menuClases = document.querySelectorAll(".menu__link");
for (let i = 0; i < menuClases.length; i++) {
    let link = menuClases[i];
    let menuSingle = link.closest(".menu__item").querySelector(".menu");

    link.onclick = function () {
        if (menuSingle) {
            if (link.closest(".menu__item").querySelector(".menu").classList.contains("menu_active")) {
                link.closest(".menu__item").querySelector(".menu_sub").className = "menu menu_sub";
                return false;
            }
            if (link.closest(".menu__item").querySelector(".menu_sub")) {
                link.closest(".menu__item").querySelector(".menu_sub").className = "menu menu_sub menu_active";
                return false;
            }
        }
    }

    
}
