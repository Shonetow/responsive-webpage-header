'use strict';

(function () {
  var settings = {
    shrinkHeaderAfter: 50
  };

  var mainHeader = document.querySelector('.main-header');
  var btnMenu = document.querySelector('.btn-menu');
  var elNavigation = document.querySelector('.navigation');

  /**
   * Toggle the class on navigation
   */
  btnMenu.onclick = function () {
    elNavigation.classList.toggle('open');
  };

  window.onscroll = function () {
    'use strict';

    console.log(document.documentElement.scrollTop);
    if (document.body.scrollTop > settings.shrinkHeaderAfter || document.documentElement > settings.shrinkHeaderAfter) {
      mainHeader.classList.add('shrink');
    } else {
      mainHeader.classList.remove('shrink');
    }
  };
})();
//# sourceMappingURL=header.js.map
