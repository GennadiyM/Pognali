(function(){
  const keycode = {
    ENTER: 13,
    SPACE: 31,
  }

  const selector = {
    BUTTON_MENU: `.js-menu-toggle`,
    MENU: `.main-nav`,
    BUTTON_OPEN_TARIFF: `.js-link-tariff-open`,
    BUTTON_CLOSE_TARIFF: `.js-link-tariff-close`,
    TARIFF_MODAL: `.js-tariff-modal`,
  };

  const clases = {
    NOJS: `main-nav--nojs`,
    OPENED: `main-nav--opened`,
    CLOSED: `main-nav--closed`,
    SCROLL: `main-nav--scroll`,
    TARIF_OPEN: `price__modal--show`,
  }

  const menu = document.querySelector(selector.MENU);
  const button = document.querySelector(selector.BUTTON_MENU);
  const tariffModal = document.querySelector(selector.TARIFF_MODAL);
  const buttonOpenTariff = document.querySelector(selector.BUTTON_OPEN_TARIFF);
  const buttonCloseTariff = document.querySelector(selector.BUTTON_CLOSE_TARIFF);

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

  const onOpenTariffModal = function (evt) {
    evt.preventDefault();
    tariffModal.classList.add(clases.TARIF_OPEN);
  };

  const onCloseTariffModal = function (evt) {
    evt.preventDefault();
    tariffModal.classList.remove(clases.TARIF_OPEN);
  };

  window.onscroll = function() {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 0) {
      menu.classList.toggle(clases.SCROLL, true);
    } else {
      menu.classList.toggle(clases.SCROLL, false);
    }
  }

  button.addEventListener('click', onOpenMenu);
  buttonOpenTariff.addEventListener('click', onOpenTariffModal);
  buttonCloseTariff.addEventListener('click', onCloseTariffModal);
})();
