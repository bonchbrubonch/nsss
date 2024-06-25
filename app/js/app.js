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
  if (document.querySelector('.emblem')) {
    var Emblem = {
      init: function (el, str) {
        var element = document.querySelector(el);
        var text = str ? str : element.innerHTML;
        element.innerHTML = '';
        for (var i = 0; i < text.length; i++) {
          var letter = text[i];
          var span = document.createElement('span');
          var node = document.createTextNode(letter);
          var r = (360 / text.length) * i;
          var x = (Math.PI / text.length).toFixed(0) * i;
          var y = (Math.PI / text.length).toFixed(0) * i;
          span.appendChild(node);
          span.style.webkitTransform = 'rotateZ(' + r + 'deg) translate3d(' + x + 'px,' + y + 'px,0)';
          span.style.transform = 'rotateZ(' + r + 'deg) translate3d(' + x + 'px,' + y + 'px,0)';
          element.appendChild(span);
        }
      }
    };

    Emblem.init('.emblem');
  }
});

var swiper = new Swiper(".intro__slider", {
  slidesPerView: 1.2,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    992: {
      spaceBetween: 50,
      slidesPerView: 1.5,
    },
  },
});


/*header*/
document.querySelector(".header__menu-btn").addEventListener("click", function () {
  document.querySelector(".header nav").classList.toggle("open");
  this.classList.toggle("active");
  document.body.classList.toggle("lock");
});


document.addEventListener("DOMContentLoaded", function () {
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