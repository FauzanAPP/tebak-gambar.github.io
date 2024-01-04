const icon = document.getElementById("icon");
const navList = document.getElementById("nav-list");

icon.onclick = () => {
  icon.classList.toggle("rotate-icon");
  navList.classList.toggle("nav-show");
};

const navbar = document.querySelector("nav");

// document.addEventListener("scroll", (event) => {
//   const scroll = window.scrollY;
//   if (scroll >= 100) {
//     navbar.classList.add("nav-scroll");
//   } else {
//     navbar.classList.remove("nav-scroll");
//   }
// });

const menu = document.getElementById("menu");
const observ = new IntersectionObserver(
  (event) => {
    const [entry] = event;

    if (entry.isIntersecting) {
      navbar.classList.remove("nav-scroll");
    } else {
      navbar.classList.add("nav-scroll");
    }
  },
  { threshold: 0.9 }
);

observ.observe(menu);
