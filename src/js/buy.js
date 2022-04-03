//create list of options
import tplFolowers from '../partials/templates/folowers-item.hbs';
import tplBenefits from '../partials/templates/benefits-item.hbs';
import tplPopup from '../partials/templates/popup-item.hbs';
import { folowers, benefits, likes } from './db';

const choosenOption = {
  newprice: 0,
  oldprice: 0,
  count: 0,
  type: '',
  discont: '',
};

const folowersList = document.querySelector('.folowers-list');
const benefitsList = document.querySelector('.benefits-list');

folowersList.innerHTML = tplFolowers(folowers);
benefitsList.innerHTML = tplBenefits(benefits);

//listen choosen option
const radioBtnList = document.querySelectorAll('.radio-btn');
radioBtnList.forEach(el => el.addEventListener('change', handleChange));
listenOptions(folowers);

function listenOptions(base) {
  const folowersItens = document.querySelectorAll('.folowers-item');
  const choosenNewprice = document.querySelector('.choosen-newprice');
  const choosenOldprice = document.querySelector('.choosen-oldprice');
  const choosenEconomy = document.querySelector('.saved-economy');

  folowersItens.forEach(el => el.addEventListener('click', checkClass));
  folowersItens[0].classList.add('choosen');
  choosenNewprice.innerHTML = base[0].newprice;
  choosenOldprice.innerHTML = base[0].oldprice;
  choosenEconomy.innerHTML =
    Math.round((base[0].oldprice - base[0].newprice) * 100) / 100;
  changeChoosenoption(base[0]);

  function checkClass(evt) {
    const id = evt.currentTarget.dataset.id;

    folowersItens.forEach(el =>
      el.dataset.id === id
        ? el.classList.add('choosen')
        : el.classList.remove('choosen'),
    );

    const data = base.find(el => el.id === id);
    choosenNewprice.innerHTML = data.newprice;
    choosenOldprice.innerHTML = data.oldprice;
    choosenEconomy.innerHTML =
      Math.round((data.oldprice - data.newprice) * 100) / 100;
    changeChoosenoption(data);
  }
}

function changeChoosenoption(data) {
  choosenOption.newprice = data.newprice;
  choosenOption.oldprice = data.oldprice;
  choosenOption.count = data.count;
  choosenOption.type = data.type;
  choosenOption.discont = data.discont;
}

function handleChange(evt) {
  const id = evt.currentTarget.id;
  if (id === 'buyfollowers') {
    folowersList.innerHTML = tplFolowers(folowers);
    listenOptions(folowers);
  } else {
    folowersList.innerHTML = tplFolowers(likes);
    listenOptions(likes);
  }
}

//popup
const buyBtn = document.querySelector('.buybutton');
const backdrop = document.querySelector('.popup-overflow');
const popup = document.querySelector('.popup-item');
const totalPrice = document.querySelector('.popup-total');
buyBtn.addEventListener('click', openPopup);
backdrop.addEventListener('click', closePopup);

function openPopup() {
  popup.innerHTML = tplPopup(choosenOption);
  totalPrice.innerHTML = `$${choosenOption.newprice}`;
  document.body.classList.add('modal-open');
  backdrop.classList.remove('is-hidden');
  window.addEventListener('keydown', closePopup);
}

function closePopup(evt) {
  if (
    (evt.type === 'keydown' && evt.key === 'Escape') ||
    (evt.type === 'click' && evt.target === evt.currentTarget)
  ) {
    document.body.classList.remove('modal-open');
    backdrop.classList.add('is-hidden');
    window.removeEventListener('keydown', closePopup);
  }
}
