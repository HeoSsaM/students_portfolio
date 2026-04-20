document.addEventListener("DOMContentLoaded", () => {
  /* =========================
     Design Section
  ========================= */
  const designSection = document.querySelector("#design");

  if (designSection) {
    const swiperWrap = designSection.querySelector(".design-swiper-wrap");
    const swiperEl = designSection.querySelector(".designSwiper");
    const swiperSlides = designSection.querySelectorAll(".designSwiper .swiper-slide");
    const fallbackGrid = designSection.querySelector(".design-grid-fallback");

    const slideCount = swiperSlides.length;

    if (slideCount >= 3 && swiperEl) {
      fallbackGrid?.classList.remove("is-show");

      new Swiper(swiperEl, {
        slidesPerView: 1.15,
        spaceBetween: 20,
        loop: false,
        speed: 700,
        pagination: {
          el: ".design-swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".design-swiper-button.next",
          prevEl: ".design-swiper-button.prev",
        },
        breakpoints: {
          640: {
            slidesPerView: 1.4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1100: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        },
      });
    } else {
      swiperWrap?.classList.add("is-hidden");
      fallbackGrid?.classList.add("is-show");
    }
  }

  /* =========================
     Design Modal
  ========================= */
  const modal = document.querySelector("#designModal");
  const modalImage = document.querySelector("#designModalImage");
  const modalCloseBtn = document.querySelector(".design-modal-close");
  const modalDim = document.querySelector(".design-modal-dim");

  function openModal(imageSrc, imageAlt) {
    if (!modal || !modalImage) return;

    modalImage.src = imageSrc;
    modalImage.alt = imageAlt || "상세 이미지";
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  }

  function closeModal() {
    if (!modal || !modalImage) return;

    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    modalImage.src = "";
    modalImage.alt = "";
    document.body.classList.remove("modal-open");
  }

  document.addEventListener("click", (e) => {
    const card = e.target.closest(".design-card");
    if (!card) return;

    const fullImage = card.dataset.full || card.querySelector("img")?.src;
    const altText = card.querySelector("img")?.alt || "상세 이미지";

    openModal(fullImage, altText);
  });

  modalCloseBtn?.addEventListener("click", closeModal);
  modalDim?.addEventListener("click", closeModal);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  /* =========================
     Figma Swipers
  ========================= */
  const figmaSwiper01 = document.querySelector(".figmaSwiper01");
  const figmaSwiper02 = document.querySelector(".figmaSwiper02");
  const figmaSwiper03 = document.querySelector(".figmaSwiper03");

  if (figmaSwiper01) {
    new Swiper(figmaSwiper01, {
      slidesPerView: 1.3,
      spaceBetween: 18,
      speed: 700,
      loop: false,
      pagination: {
        el: ".figma-swiper-pagination-01",
        clickable: true,
      },
      navigation: {
        nextEl: ".figma-swiper-next-01",
        prevEl: ".figma-swiper-prev-01",
      },
      breakpoints: {
        640: {
          slidesPerView: 2.2,
          spaceBetween: 18,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 18,
        },
        1100: {
          slidesPerView: 4,
          spaceBetween: 18,
        },
      },
    });
  }

  if (figmaSwiper02) {
    new Swiper(figmaSwiper02, {
      slidesPerView: 1.3,
      spaceBetween: 18,
      speed: 700,
      loop: false,
      pagination: {
        el: ".figma-swiper-pagination-02",
        clickable: true,
      },
      navigation: {
        nextEl: ".figma-swiper-next-02",
        prevEl: ".figma-swiper-prev-02",
      },
      breakpoints: {
        640: {
          slidesPerView: 2.2,
          spaceBetween: 18,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 18,
        },
        1100: {
          slidesPerView: 4,
          spaceBetween: 18,
        },
      },
    });
  }
  new Swiper('.figmaSwiper03', {
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: {
    prevEl: '.figma-swiper-prev-03',
    nextEl: '.figma-swiper-next-03',
  },
  pagination: {
    el: '.figma-swiper-pagination-03',
    clickable: true,
  },
});

  /* =========================
     Publishing Bundle Swiper
     - 슬라이드 1장에 카드 2개
  ========================= */
  const publishBundleSwiper = document.querySelector(".publishBundleSwiper");

  if (publishBundleSwiper) {
    new Swiper(publishBundleSwiper, {
      slidesPerView: 1,
      spaceBetween: 24,
      speed: 700,
      loop: false,
      autoHeight: true,
      pagination: {
        el: ".publish-bundle-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".publish-bundle-next",
        prevEl: ".publish-bundle-prev",
      },
    });
  }

  /* =========================
     Team Bundle Swiper
     - 슬라이드 1장에 카드 2개
  ========================= */
  const teamBundleSwiper = document.querySelector(".teamBundleSwiper");

  if (teamBundleSwiper) {
    new Swiper(teamBundleSwiper, {
      slidesPerView: 1,
      spaceBetween: 24,
      speed: 700,
      loop: false,
      autoHeight: true,
      pagination: {
        el: ".team-bundle-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".team-bundle-next",
        prevEl: ".team-bundle-prev",
      }
    });
  }
});

/* =========================
   Figma Modal
========================= */
const figmaModal = document.querySelector("#figmaModal");
const figmaModalImage = document.querySelector("#figmaModalImage");
const figmaModalCloseBtn = document.querySelector(".figma-modal-close");
const figmaModalDim = document.querySelector(".figma-modal-dim");

function openFigmaModal(imageSrc, imageAlt) {
  if (!figmaModal || !figmaModalImage) return;

  figmaModalImage.src = imageSrc;
  figmaModalImage.alt = imageAlt || "피그마 전체 이미지";
  figmaModal.classList.add("is-open");
  figmaModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeFigmaModal() {
  if (!figmaModal || !figmaModalImage) return;

  figmaModal.classList.remove("is-open");
  figmaModal.setAttribute("aria-hidden", "true");
  figmaModalImage.src = "";
  figmaModalImage.alt = "";
  document.body.classList.remove("modal-open");
}

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".figma-full-btn");
  if (!btn) return;

  const fullImage = btn.dataset.full;
  const altText = btn.dataset.alt || "피그마 전체 이미지";

  openFigmaModal(fullImage, altText);
});

figmaModalCloseBtn?.addEventListener("click", closeFigmaModal);
figmaModalDim?.addEventListener("click", closeFigmaModal);

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeFigmaModal();
  }
});