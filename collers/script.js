document.addEventListener("DOMContentLoaded", function () {
  /* Popup video */
  const videoThumbnail = document.querySelector(".play-video");
  const modal = document.getElementById("myModal");
  const videoIframe = document.getElementById("video");
  const closeModal = document.querySelector(".close");

  videoThumbnail.addEventListener("click", function () {
    // YouTube video linkini buraya ekleyin
    const videoURL =
      "https://www.youtube.com/embed/3WsqeUIW4tY?si=o44dOMrMI5rEboux?autoplay=1";

    // Video URL'sini iframe'e ekliyoruz
    videoIframe.src = videoURL;

    // Modal'ı gösteriyoruz
    modal.style.display = "block";
  });

  // Modal'ı kapatma fonksiyonu
  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
    videoIframe.src = ""; // Videoyu durdurmak için src'yi temizliyoruz
  });

  // Modal dışında bir yere tıklanırsa modal'ı kapatma
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      videoIframe.src = ""; // Videoyu durdurmak için src'yi temizliyoruz
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  /* Popup video */
  const videoThumbnail = document.querySelector(".video-thumbnail");
  const modal = document.getElementById("myModal");
  const videoIframe = document.getElementById("video");
  const closeModal = document.querySelector(".close");

  videoThumbnail.addEventListener("click", function () {
    // YouTube video linkini buraya ekleyin
    const videoURL =
      "https://www.youtube.com/embed/3WsqeUIW4tY?si=o44dOMrMI5rEboux?autoplay=1";

    // Video URL'sini iframe'e ekliyoruz
    videoIframe.src = videoURL;

    // Modal'ı gösteriyoruz
    modal.style.display = "block";
  });

  // Modal'ı kapatma fonksiyonu
  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
    videoIframe.src = ""; // Videoyu durdurmak için src'yi temizliyoruz
  });

  // Modal dışında bir yere tıklanırsa modal'ı kapatma
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      videoIframe.src = ""; // Videoyu durdurmak için src'yi temizliyoruz
    }
  });

  /* tab active icon */
  const navLinks = document.querySelectorAll(".tab");

  // Ok ikonu SVG elemanı oluştur
  const createArrowIcon = () => {
    const img = document.createElement("img");
    img.setAttribute("src", "./img/svgs/arrow-right.svg");
    img.setAttribute("alt", "arrow-right");
    img.setAttribute("class", "js-arrow-icon ms-2"); // Özel sınıf eklendi
    return img;
  };

  // Sayfa yüklendiğinde aktif olan nav-link'e SVG ekle
  navLinks.forEach((link) => {
    if (link.classList.contains("active")) {
      link.appendChild(createArrowIcon());
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Tüm nav linklerinden active sınıfını ve özel sınıfa sahip ok ikonunu kaldır
      navLinks.forEach((link) => {
        link.classList.remove("active");
        const icon = link.querySelector(".js-arrow-icon"); // Özel sınıfa sahip SVG'yi seç
        if (icon) {
          icon.remove();
        }
      });

      // Tıklanan nav linkine active sınıfını ekle ve ok ikonunu ekle
      this.classList.add("active");
      this.appendChild(createArrowIcon());
    });
  });
});

/* Kayan kartlar */
const cardWrapper = document.querySelector(".card-wrapper");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentIndex = 0;
const cardCount = document.querySelectorAll(".card").length;
const cardWidth = document.querySelector(".card").offsetWidth;

function updateTransform() {
  cardWrapper.style.transform = `translateX(-${
    currentIndex * (cardWidth / 2)
  }px)`;
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % cardCount;
  updateTransform();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + cardCount) % cardCount;
  updateTransform();
});

document.addEventListener("DOMContentLoaded", function () {
  /* Navbar */
  window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".navbar");
    navbar.classList.toggle("transparent", window.scrollY === 0);
  });

  const navItems = document.querySelectorAll("#navbarNav .nav-link");

  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Remove active class and bold style from all nav items
      navItems.forEach((nav) => {
        nav.parentElement.classList.remove("active");
        nav.style.fontWeight = "normal";
      });

      // Add active class and bold style to the clicked nav item
      this.parentElement.classList.add("active");
      this.style.fontWeight = "bold";
    });
  });
});
