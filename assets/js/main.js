/* ----- NAVIGATION BAR FUNCTION ----- */
const menuBtn = document.getElementById("myNavMenu");
function myMenuFunction() {
  

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

window.onscroll = function () {
  headerShadow();
};

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

/* ----- TYPING EFFECT ----- */
let typingEffect = new Typed(".typedText", {
  strings: ["Developer", "Designer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    let params = {
      from_name: document.getElementById("from_name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    let auto_reply_params = {
      from_name: params.from_name,
      email: params.email,
    };

    const serviceID = "service_6t60ssl";
    const templateID = "template_hcx98mh";
    const autoreply_templateID = "template_rym38pf";

   
      emailjs
      .send(serviceID, templateID, params)
      .then(function () {
        alert("Email sent successfully!");
      })
      .catch(function (error) {
        console.error("Error sending email:", error);
      });

    emailjs.send(serviceID, autoreply_templateID, auto_reply_params);

    document.getElementById("contact-form").reset();
  });

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    console.log(link)
    menuBtn.classList.remove("responsive");
  });
});

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

const images = [
  {
    url: "assets/images/amazon.png",
    alt: "AmazonClone",
    title: "Amazon Clone",
    description: "Amazon clone project with React.js, Tailwind CSS, and Vite. Also used Axios, react-router, react-redux, and Swiper. (not responsive)",
    repo: "https://github.com/tutusjr/amazon-clone",
    href: "https://amazon-clone-tutusjr.vercel.app",
  },
  {
    url: "assets/images/form-website.png",
    alt: "FormWebsite",
    title: "Form Website",
    description:
      "Responsive form page with React.js, Tailwind, Vite and Formik-Yup validation",
    href: "https://formwebsite-tutusjr.vercel.app",
    repo: "https://github.com/tutusjr/FrontendChallenges/tree/main/contact-form-main",
  },
  {
    url: "assets/images/ecommerce.png",
    alt: "EcommerceWebsite",
    title: "Ecommerce Website",
    description: " Ecommerce fully responsive website with React.js, Tailwind CSS, Vite and flowbite-react, react-slick",
    href: "https://ecommerce-website-tutusjr.vercel.app",
    repo: "https://github.com/tutusjr/Ecommerce-Website",
  },
  {
    url: "assets/images/greenharvest.png",
    alt: "GreenHarvest",
    title: "Green Harvest",
    description:
      "Project done as a team,fully responsive with HTML, CSS and JavaScript.",
    href: "https://tech-titans-tt.github.io/Green-Harvest/",
    repo: "https://github.com/Tech-Titans-TT/Green-Harvest",
  },
  {
    url: "assets/images/nike.png",
    alt: "Nike2.0",
    title: "Nike 2.0 Website",
    description:
      "NIKE V2 fully responsive project with React.js, Tailwind CSS and Vite",
    href: "https://nike-website-tutusjr.vercel.app",
    repo: "https://github.com/tutusjr/nike-website",
  },
  {
    url: "assets/images/caloriecard.png",
    alt: "CalorieCard",
    title: "Calorie-card",
    description:
      "My very first project fully responsive with React.js and SASS. Also used Formik-yup validation, react-modal, react-helmet, react-router-dom, react-slideshow-image ",
    href: "https://calorie-card.netlify.app",
    repo: "https://github.com/tutusjr/Calori-card",
  },
  {
    url: "assets/images/x-clone.png",
    alt: "XClone",
    title: "X Clone",
    description:
      " X Clone project with React.js, Tailwind CSS and Vite. Also used Virtua, prop-types, classnames, react-use, react-modal, react-router-dom. (not responsive)",
    href: "https://twitterclone-tutusjr.vercel.app",
    repo: "https://github.com/tutusjr/twitterClone",
  },
  {
    url: "assets/images/subs-website.png",
    alt: "Subscription",
    title: "Subscription Website",
    description:
      "Subs website fully responsive project with HTML, CSS and JavaScript.",
    href: "https://subscribe-website-tutusjr.vercel.app",
    repo: "https://github.com/tutusjr/FrontendChallenges/tree/main/newsletter",
  },
];

const gallery = document.querySelector(".glide__slides");

const markup = images
  .map(
    (image) => `
  <li class="glide__slide">
    <div class="project-img-div">
      <a class="project-link" target="_blank" href="${image.href}">
        <img class="project-img" src="${image.url}" alt="${image.alt}" />
      </a>
    </div>
    <div class="project-info">
      <h3>${image.title}</h3>
      <p>${image.description}</p>
    </div>
    <a class="repo" target="_blank" href="${image.repo}"> <i class="uil uil-github-alt"></i> Github Repo <i class="uil uil-external-link-alt"></i></a>
  </li>
  `
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

const scrollDown = document.querySelector(".scroll-btn");

scrollDown.addEventListener("click", () => {
  window.scrollTo({ top: window.innerHeight});
  scrollDown.style.animationPlayState = "paused";
});

window.addEventListener('scroll', () => {
  if (window.scrollY === 0) {
      scrollDown.style.animationPlayState = 'running';
  }
});