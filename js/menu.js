const menu_icon = document.querySelector(".burger-icon");
if (menu_icon) {
    const menu_list = document.querySelector(".menu-list");
    menu_icon.addEventListener("click", function(e) {
        document.body.classList.toggle("lock");
        menu_icon.classList.toggle("active");
        menu_list.classList.toggle("active");
    });
}