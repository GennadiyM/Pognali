(function(){
  const keycode = {
    ENTER: 13,
    SPACE: 31,
  }

  const selector = {
    BUTTON_MENU: `.js-menu-toggle`,
    MENU: `.main-nav`,
  };

  const clases = {
    NOJS: `main-nav--nojs`,
    OPENED: `main-nav--opened`,
    CLOSED: `main-nav--closed`,
  }

  const menu = document.querySelector(selector.MENU);
  const button = document.querySelector(selector.BUTTON_MENU);

  if (menu.classList.contains(clases.NOJS)){
    menu.classList.remove(clases.NOJS);
  }
  
  setTimeout(function() {
    menu.classList.add(clases.CLOSED);
  }, 500);

  const onOpenMenu = function () {
    menu.classList.toggle(clases.CLOSED);
    menu.classList.toggle(clases.OPENED);
  };

  button.addEventListener('click', onOpenMenu);
})();
