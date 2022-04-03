//create list of questions
import tplFAQ from '../partials/templates/faq-item.hbs';
import { questions } from './db';

const faqList = document.querySelector('.faq-list');

faqList.innerHTML = tplFAQ(questions);

//listen choosen question
const faqItens = document.querySelectorAll('.faq-item');

faqItens.forEach(el => el.addEventListener('click', toggleOpen));
faqItens[0].classList.add("open");

function toggleOpen(evt) {
  evt.currentTarget.classList.toggle("open");  
}
