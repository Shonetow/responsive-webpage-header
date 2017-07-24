(function () {
  let settings = {
    shrinkHeaderAfter: 50
  }

  let mainHeader = document.querySelector('.main-header')
  let btnMenu = document.querySelector('.btn-menu')
  let elNavigation = document.querySelector('.navigation')

  /**
   * Toggle the class on navigation
   */
  btnMenu.onclick = () => {
    elNavigation.classList.toggle('open')
  }

  window.onscroll = () => {
    'use strict'
    console.log(document.documentElement.scrollTop)
    if (document.body.scrollTop > settings.shrinkHeaderAfter || document.documentElement > settings.shrinkHeaderAfter) {
      mainHeader.classList.add('shrink')
    } else {
      mainHeader.classList.remove('shrink')
    }
  }
}())
