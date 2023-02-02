

// set .active-link class to highlight changed headers
// links
window.addEventListener('hashchange', function () {
  setTimeout( ()=> {
    const section = document.querySelector('#main')
    const element = section.querySelector(
      `#main :is(h1,h2,h3,h4,h5,h6) > a[href='${window.location.hash}']`
    )
    if (!element) return;
    element.classList.add('active-link')
  }, 0)
});
