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

const el = document.getElementById('closeBtn');
el.onclick = function () {
    if (el.style.display == 'block') {
        el.style.display = 'none';
    }
    else {
        el.style.display = 'block';
    };
};