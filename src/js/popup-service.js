(() => {
  const popupForm = document.querySelector('.js-popup-service');

  popupForm.addEventListener('submit', hadlePopupSubmit);

  function hadlePopupSubmit(evt) {
    evt.preventDefault();

    new FormData(popupForm).forEach((value, name) =>
      console.log(`${name}: ${value}`),
    );

    popupForm.reset();
    alert('Your payment is accepted.');
  }
})();
