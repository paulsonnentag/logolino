/* disables scrolling for fixed sized Elements
 * enable scrolling for children by setting data-scrollable to true
 * */
export default function scrollLock (element) {

  element.addEventListener('touchmove', (evt) => {

    if (!isScrollable(evt.target)) {
      evt.preventDefault();
    }
  });
}

// check if element or any of its parents has data-scrollable set
function isScrollable (element) {
  if (element === null) {
    return false;
  }
  return element.dataset.scrollable || isScrollable(element.parentNode);
}