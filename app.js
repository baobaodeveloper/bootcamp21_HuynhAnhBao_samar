const count1 = document.querySelector(".counter-number1");
const count2 = document.querySelector(".counter-number2");
const count3 = document.querySelector(".counter-number3");
const count4 = document.querySelector(".counter-number4");

const features = document.querySelectorAll(".feature-item");
// count
function updateCount(count) {
  count.textContent = "0";
  const dataTarget = +count.getAttribute("data-target");
  const time = 4000 / dataTarget;
  let total = 0;
  const update = () => {
    total += 1;
    console.log(total);
    if (total <= dataTarget) {
      count.textContent = `${total}`;

      setTimeout(update, time);
    }
  };
  update();
}
updateCount(count1);
updateCount(count2);
updateCount(count3);
updateCount(count4);
// mouseenter

features.forEach((feature) => {
  feature.addEventListener("mouseenter", (e) => {
    features.forEach((item) => item.classList.remove("is-active"));
    e.target.classList.add("is-active");
  });
});

// choose plan

const btnMonth = document.querySelector(".btn-month");
const btnYear = document.querySelector(".btn-year");
const pricingtableMonth = document.querySelectorAll(".pricingtable-month");
const pricingtableYear = document.querySelectorAll(".pricingtable-year");

btnYear.addEventListener("click", () => {
  if (!btnMonth) return;
  btnMonth.classList.remove("is-active");
  if (!btnYear) return;
  btnYear.classList.add("is-active");

  if (!pricingtableMonth) return;

  pricingtableMonth.forEach((item) => {
    item.classList.remove("is-show");
  });

  pricingtableYear.forEach((item) => {
    item.classList.add("is-show");
  });
});

btnMonth.addEventListener("click", () => {
  if (!btnYear) return;
  btnYear.classList.remove("is-active");
  if (!btnMonth) return;
  btnMonth.classList.add("is-active");

  if (!pricingtableYear) return;

  pricingtableYear.forEach((item) => {
    item.classList.remove("is-show");
  });

  pricingtableMonth.forEach((item) => {
    item.classList.add("is-show");
  });
});

var testimonialThumbs = new Swiper(".testimonial-client", {
  spaceBetween: 10,
  slidesPerView: 3,
  centeredSlides: true,
  freeMode: true,
  autoplay: true,
  loop: true,
  speed: 2000,
});

const testimonialContent = new Swiper(".testimonial-content", {
  spaceBetween: 10,
  autoplay: true,
  loop: true,
  speed: 2000,
  centeredSlides: true,

  thumbs: {
    swiper: testimonialThumbs,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const blogs = new Swiper(".blog-container", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 2000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const brand = new Swiper(".brand-wrap", {
  slidesPerView: 6,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 2500,
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
  },
});
