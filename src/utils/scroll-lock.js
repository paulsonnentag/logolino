/* scrollLock (element)
 * disables scrolling for fixed sized Elements
 * enable scrolling for children by setting data-scrollable to true
 * */
export default function scrollLock (element) {

  element.addEventListener('touchmove', (evt) => {

    if (!evt.target.dataset.scrollable) {
      evt.preventDefault();
    }
  });
}