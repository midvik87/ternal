// SHOW BORDER
const redBorders = document.querySelectorAll('*');

function showBorder() {
  var redBordersArray = Array.from(redBorders);

  redBordersArray.forEach(redBorder => {
    redBorder.classList.toggle('show');
  });
};


// BACK TO TOP
const toTopButton = document.getElementById("toTop");
const navig = document.getElementById("navig");
const link = document.querySelectorAll(".nav-links li a");

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    toTopButton.style.display = "block";
    navig.style.backgroundColor = "var(--color-background-nav-mob)";

  } else {
    toTopButton.style.display = "none";
    navig.style.backgroundColor = "transparent";
    navig.style.backdropFilter = "blur(20px)";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.onscroll = function () { scrollFunction(); };

// NAVIGATION
const links = document.querySelectorAll(".nav-links li a");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const linksLi = document.querySelectorAll(".nav-links li");

// SCROLL DISABLE NAV
let scrollEnabled = true;

function disableScrolling() {
  document.body.classList.add("pause-scrolling");
  scrollEnabled = false;
  // console.log('Scrolling disabled');
};

function enableScrolling() {
  document.body.classList.remove("pause-scrolling");
  scrollEnabled = true;
  // console.log('Scrolling enabled');
};

hamburger.addEventListener('click', () => {

  // Toggle body scroll when menu is open
  if (scrollEnabled) {
    disableScrolling('body');
  } else {
    enableScrolling('body');
  };

  // Hamburger animation & menu open
  hamburger.classList.toggle('toggle');
  hamburger.classList.toggle('toggle-colors');
  navLinks.classList.toggle('open');

  // Animate links to view if not visible
  if (navLinks.classList.contains('open')) {
    linksLi.forEach(link => {
      link.style.opacity = '1';
    });
  } else {
    linksLi.forEach(link => {
      link.style.opacity = '0';
    });
  }

  // Hide menu & links if link clicked
  var linksArray = Array.from(links);
  linksArray.forEach(link => {
    link.onclick = function () {
      navLinks.classList.toggle('open');
      hamburger.classList.toggle('toggle');
      hamburger.classList.toggle('toggle-colors');

      enableScrolling('body');

      linksLi.forEach(link => {
        link.style.opacity = '0';
      });
    };
  });

});

// FADE IN / OUT ELEMENTS

const observerOptions = {
  root: null,
  rootMargin: "1%",
  threshold: 0.3
};

function observerCallback(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // fade in observed elements that are in view
      entry.target.classList.replace('fadeOut', 'fadeIn');
    } else {
      // fade out observed elements that are not in view
      entry.target.classList.replace('fadeIn', 'fadeOut');
    }
  });
}

const observer = new IntersectionObserver(observerCallback, observerOptions);

const fadeElms = document.querySelectorAll('.fade');
fadeElms.forEach(el => observer.observe(el));

/******************************************/

// MODAL

const modalTriggerButtons = document.querySelectorAll("[data-modal-target]");
const modals = document.querySelectorAll(".modal");
const modalCloseButtons = document.querySelectorAll(".modal-close");

modalTriggerButtons.forEach(elem => {
  elem.addEventListener("click", event => toggleModal(event.currentTarget.getAttribute("data-modal-target")));
});
modalCloseButtons.forEach(elem => {
  elem.addEventListener("click", event => toggleModal(event.currentTarget.closest(".modal").id));
});
modals.forEach(elem => {
  elem.addEventListener("click", event => {
    if(event.currentTarget === event.target) toggleModal(event.currentTarget.id);
  });
});

// Maybe also close with "Esc"...
document.addEventListener("keydown", event => {
  if(event.keyCode === 27 && document.querySelector(".modal.modal-show")) {
    toggleModal(document.querySelector(".modal.modal-show").id);
  }
});

function toggleModal(modalId) {
  const modal = document.getElementById(modalId);

  if(getComputedStyle(modal).display==="flex") { // alternatively: if(modal.classList.contains("modal-show"))
    modal.classList.add("modal-hide");
    setTimeout(() => {
      document.body.style.overflow = "initial"; // Optional: in order to enable/disable page scrolling while modal is hidden/shown - in this case: "initial" <=> "visible"
      modal.classList.remove("modal-show", "modal-hide");
      modal.style.display = "none";      
    }, 200);
  }
  else {
    document.body.style.overflow = "hidden"; // Optional: in order to enable/disable page scrolling while modal is hidden/shown
    modal.style.display = "flex";
    modal.classList.add("modal-show");
  }
}