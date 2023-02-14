// ACTIVE LINKS NAV

const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  let scrollY = window.pageYOffset;
  
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 150;
    const sectionId = current.getAttribute("id");
    
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

// ACCORDION

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

document.getElementById('closeBtn').onclick = function () {
  var el = document.getElementById('closeBtn');
  if (el.style.display == 'block') {
    el.style.display = 'none';
  }
  else {
    el.style.display = 'block';
  };
};