const navMenu = document.querySelectorAll(".header__menu__item__link");
const itemLink = document.querySelectorAll(".header__menu__item__link");

itemLink.forEach((elem, i) => {
  elem.addEventListener("click", function(event){
    navMenu.forEach((item, i) => {
      if(item.classList.contains("active")){
        item.classList.remove("active");
      }
    });
    this.classList.add("active");
  });
});

