function toggleContent(options) {
  const { container, expandable, triggerer, autoClose } = options,
    contents = document.querySelectorAll(container),
    buttonText = ['Read more', 'Read less'];
  let current = null; // Keeps book of the currently open expandee

  function toggle(e) {
    const button = e.target;
    if (!button.matches(triggerer)) { return; } // Quit, an irrelevant element clicked 
    const commonParent = button.closest(expandable);
    if (!commonParent) { return; } // Quit, the expandable element was not found
    if (autoClose && current && button !== current) {
      // If autoClose is on, closes the current expandee
      toggle({ target: current });
    }
    const state = +commonParent.classList.toggle('expanded');
    button.textContent = buttonText[state];
    current = state ? button : null;
  }

  // Add click listeners to all elements containing expandables
  contents.forEach(cont => cont.addEventListener('click', toggle));
}

// Activate ContentToggler
toggleContent({
  container: '.expandables-container', // Selector for the elements containing expandable elements
  expandable: '.expandable',   // Selector for expandable elements
  triggerer: '.toggle-button', // Selector for the element triggering expansion
  autoClose: true              // Indicates whether the expanded element is closed when a new element is expanded (optional)
});

  // var widths = [0, 768];

// function resizeFn() {
//   if (window.innerWidth >= widths[0] && window.innerWidth < widths[1]) {
//     toggleContent();
//   } else {
//     return;
//   }
// }
// window.onresize = resizeFn;
// resizeFn();