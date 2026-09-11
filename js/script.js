const menuButton = document.getElementById("navigation-menu-button");
const navigationMenu = document.getElementById("navigation-menu");
const menuButtonIcon = menuButton.querySelector("i");

menuButton.addEventListener("click", () => {
  navigationMenu.classList.toggle("open");

  const isMenuOpen = navigationMenu.classList.contains("open");

  menuButton.setAttribute("aria-expanded", isMenuOpen);

  menuButtonIcon.setAttribute(
    "class",
    isMenuOpen ? "ri-close-line" : "ri-menu-line",
  );
});

navigationMenu.addEventListener("click", () => {
  navigationMenu.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButtonIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOptions = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".hero__title", {
  ...scrollRevealOptions,
});

ScrollReveal().reveal(".rental-search", {
  ...scrollRevealOptions,
  delay: 500,
});

ScrollReveal().reveal(".hero__image img", {
  ...scrollRevealOptions,
  delay: 1000,
});

ScrollReveal().reveal(".vehicle-category", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".location-section__image img", {
  ...scrollRevealOptions,
  origin: "right",
});

ScrollReveal().reveal(".location-section__content .section-title", {
  ...scrollRevealOptions,
  delay: 500,
});

ScrollReveal().reveal(".location-section__content .section-description", {
  ...scrollRevealOptions,
  delay: 1000,
});

ScrollReveal().reveal(".location-section__actions", {
  ...scrollRevealOptions,
  delay: 1500,
});

const vehicleCards = document.querySelectorAll(".vehicle-card");
const rentalPrices = ["225", "455", "275", "625", "395"];
const rentalPriceElement = document.getElementById("vehicle-rental-price");

if (vehicleCards.length > 0) {
  vehicleCards[0].classList.add("show-specifications");
}

function updateVehicleInformation(eventName, argumentsList) {
  if (eventName !== "slideChangeTransitionStart") {
    return;
  }

  const activeIndex = argumentsList?.[0]?.realIndex ?? 0;

  rentalPriceElement.textContent = rentalPrices[activeIndex];

  vehicleCards.forEach((card) => {
    card.classList.remove("show-specifications");
  });

  if (vehicleCards[activeIndex]) {
    vehicleCards[activeIndex].classList.add("show-specifications");
  }
}

const vehicleSwiper = new Swiper(".swiper", {
  loop: true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",

  coverflowEffect: {
    rotate: 0,
    depth: 500,
    modifier: 1,
    scale: 0.75,
    slideShadows: false,
    stretch: -100,
  },

  onAny(eventName, ...argumentsList) {
    updateVehicleInformation(eventName, argumentsList);
  },
});

ScrollReveal().reveal(".story-card", {
  ...scrollRevealOptions,
  interval: 500,
});

const vehicleBanner = document.querySelector(".vehicle-banner__wrapper");

if (vehicleBanner) {
  const bannerItems = Array.from(vehicleBanner.children);

  bannerItems.forEach((item) => {
    const duplicateItem = item.cloneNode(true);

    duplicateItem.setAttribute("aria-hidden", "true");

    vehicleBanner.appendChild(duplicateItem);
  });
}

ScrollReveal().reveal(".app-download__image img", {
  ...scrollRevealOptions,
  origin: "right",
});

ScrollReveal().reveal(".app-download__content .section-title", {
  ...scrollRevealOptions,
  delay: 500,
});

ScrollReveal().reveal(".app-download__links", {
  ...scrollRevealOptions,
  delay: 1000,
});
