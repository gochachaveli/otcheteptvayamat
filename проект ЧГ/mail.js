let popupBg = document.querySelector(".popup__bg");
let popup = document.querySelector(".popup")
let openPopupButtons = document.querySelectorAll(".open-popup")
let closePopupButton = document.querySelector(".close-popup")

console.log(popupBg)
console.log(popup)
console.log(openPopupButtons)
console.log(closePopupButton)

openPopupButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        popupBg.classList.add("active");
        popup.classList.add("active");
    })
});

closePopupButton.addEventListener("click",() => {
    popupBg.classList.remove("active");
    popup.classList.remove("active");
})

document.addEventListener("click", (e) => {
    if(e.target === popupBg){
        popupBg.classList.remove("active");
        popup.classList.remove("active");
    }
})

const pushbar = new Pushbar({
    blur:true,
    overlay:true,
  });

  var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });