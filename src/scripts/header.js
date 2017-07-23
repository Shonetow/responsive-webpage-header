(function () {
  let btnMenu = document.querySelector('.btn-menu')
  let elNavigation = document.querySelector('.navigation')
  btnMenu.onclick = () => {
    elNavigation.classList.toggle('open')
  }
}())
