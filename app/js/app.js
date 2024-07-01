$(function () {
  $(".day").select2({
    placeholder: "День",
    minimumResultsForSearch: -1
  });
  $(".month").select2({
    placeholder: "Місяць",
    minimumResultsForSearch: -1
  });
  $(".year").select2({
    placeholder: "Рік",
    minimumResultsForSearch: -1
  });
  $(".u-class").select2({
    placeholder: "1 клас",
    minimumResultsForSearch: -1
  });
  $(".u-year").select2({
    placeholder: "2024-2025",
    minimumResultsForSearch: -1
  });

});
/*circle text*/
document.addEventListener("DOMContentLoaded", function () {
  const emblems = document.querySelectorAll('.emblem');

  if (emblems.length > 0) {
    const Emblem = {
      init: function (element, str) {
        const text = str ? str : element.innerHTML;
        element.innerHTML = '';
        for (let i = 0; i < text.length; i++) {
          const letter = text[i];
          const span = document.createElement('span');
          const node = document.createTextNode(letter);
          const r = (360 / text.length) * i;
          const x = (Math.PI / text.length).toFixed(0) * i;
          const y = (Math.PI / text.length).toFixed(0) * i;
          span.appendChild(node);
          span.style.webkitTransform = `rotateZ(${r}deg) translate3d(${x}px,${y}px,0)`;
          span.style.transform = `rotateZ(${r}deg) translate3d(${x}px,${y}px,0)`;
          element.appendChild(span);
        }
      }
    };

    emblems.forEach(emblem => {
      Emblem.init(emblem);
    });
  }
});


var swiper = new Swiper(".intro__slider", {
  slidesPerView: 1.2,
  spaceBetween: 20,
  loop: true,
  allowTouchMove: false,
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  breakpoints: {
    992: {
      spaceBetween: 50,
      slidesPerView: 1.5,
      freeMode: true,
      watchSlidesProgress: true,
    },
  },
});
var swiper2 = new Swiper(".product__slider", {
  loop: true,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

/*header*/
document.querySelector(".header__menu-btn").addEventListener("click", function () {
  document.querySelector(".header nav").classList.toggle("open");
  this.classList.toggle("active");
  document.querySelector("header").classList.toggle("active");
  document.body.classList.toggle("lock");
});



document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth < 1200) {
    const menuItems = document.querySelectorAll(".menu-item-has-children");

    menuItems.forEach(function (menuItem) {
      menuItem.addEventListener("click", function () {
        const subMenu = menuItem.querySelector(".sub-menu");
        if (subMenu) {
          if (subMenu.style.display === "flex") {
            subMenu.style.display = "none";
          } else {
            subMenu.style.display = "flex";
          }
        }
      });
    });
  }
});


/*accordion*/
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".accordion-item");

  items.forEach((item) => {
    item.addEventListener("click", function () {
      if (!this.classList.contains("active")) {
        closeAllAccordions();
        this.classList.add("active");
      }
    });
  });

  // Open the first accordion item on load
  items[0].classList.add("active");
});

function closeAllAccordions() {
  const items = document.querySelectorAll(".accordion-item");
  items.forEach((item) => {
    item.classList.remove("active");
  });
}

//header
const navOffset = $(".header").offset().top + 200;
$(window).scroll(function () {

  const scrolled = $(this).scrollTop();

  if (scrolled > navOffset) {
    $('header').addClass("sticky");
  } else if (scrolled < navOffset) {
    $('header').removeClass("sticky");
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const header = document.querySelector("header");
  if (header) {
    const nextElement = header.nextElementSibling;
    if (nextElement) {
      nextElement.classList.add("margin-top");
    }
  }
});

