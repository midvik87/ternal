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
    if (link.classList.contains('scrolled')) {
      link.forEach(link => {
        link.classList.remove('scrolled')
      });
    } else {
      link.forEach(link => {
        link.classList.remove('scrolled')
      });
    }

  } else {
    toTopButton.style.display = "none";
    navig.style.backgroundColor = "transparent";
    navig.style.backdropFilter = "blur(10px)";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.onscroll = function () { scrollFunction(); };

// ACTIVE LINKS NAV

const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  let scrollY = window.pageYOffset;
  
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 150;
    sectionId = current.getAttribute("id");
    
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".nav-links a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".nav-links a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}

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

/******************************************/
/* accordion */

var accItem = document.getElementsByClassName("accordionItem");
var accHD = document.getElementsByClassName("accordionItemHeading");
var closeBtn = document.getElementById("closeBtn");
var i;
for (i = 0; i < accHD.length; i++) {
  accHD[i].addEventListener("click", toggleItem, false);
}

function toggleItem() {
  var itemClass = this.parentNode.className;
  for (i = 0; i < accItem.length; i++) {
    accItem[i].className = "accordionItem close";
    closeBtn.style.display = 'none';
  }
  if (itemClass == "accordionItem close") {
    this.parentNode.className = "accordionItem open";
    closeBtn.style.display = 'block';
  }
}

// document.getElementById('closeBtn').onclick = function(event){
//   event.stopPropagation();
// };​
document.getElementById('closeBtn').onclick = function () {
  var el = document.getElementById('closeBtn');
  if (el.style.display == 'block') {
    el.style.display = 'none';
  }
  else {
    el.style.display = 'block';
  };
};
/******************************************/
/* HTML INCLUDES */

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) { elmnt.innerHTML = this.responseText; }
          if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
};

// FADE IN / OUT ELEMENTS

const observerOptions = {
  root: null,
  rootMargin: "0px",
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