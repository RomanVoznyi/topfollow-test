(() => {
  const form = document.querySelector('.js-service');
  const select = document.querySelector('.contact-item-select');

  form.addEventListener('submit', hadleSubmit);
  select.addEventListener('change', hadleChange);

  function hadleSubmit(evt) {
    evt.preventDefault();

    new FormData(form).forEach((value, name) =>
      console.log(`${name}: ${value}`),
    );

    form.reset();
    select.classList.remove('choosen');
    alert(
      'Your request is accepted. We will contact you shortly to clarify the details.',
    );
  }

  function hadleChange() {
    select.value === '0'
      ? select.classList.remove('choosen')
      : select.classList.add('choosen');
  }
})();
