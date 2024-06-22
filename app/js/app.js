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
  slidesPerView: 1.5,
  spaceBetween: 50,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
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