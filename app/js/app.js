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

/*start play video===========*/
document.addEventListener("DOMContentLoaded", function() {
  const videoImgs = document.querySelectorAll(".video__img");

  videoImgs.forEach(function(videoImg) {
    videoImg.addEventListener("click", function() {
      const videoInner = this.closest(".video__inner");
      if (videoInner) {
        videoInner.classList.add("play");

        const videoIframe = videoInner.querySelector(".video__bg");
        if (videoIframe) {
          const videoSrc = videoIframe.getAttribute("src");
          videoIframe.setAttribute("src", videoSrc + "?autoplay=1");
          videoIframe.play();
        }
      }
    });
  });
});

/*header*/
document.querySelector(".header__menu-btn").addEventListener("click", function () {
  document.querySelector(".header nav").classList.toggle("open");
  this.classList.toggle("active");
  document.body.classList.toggle("lock");
});


document.addEventListener("DOMContentLoaded", function() {
  const menuItems = document.querySelectorAll(".menu-item-has-children");

  menuItems.forEach(function(menuItem) {
    menuItem.addEventListener("click", function() {
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
