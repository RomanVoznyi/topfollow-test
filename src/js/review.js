//create list of reviews
import tplReview from '../partials/templates//review-item.hbs';
import { reviews } from './db';

const reviewList = document.querySelector('.reviews-list');

reviewList.innerHTML = tplReview(reviews);

//fill vote width
const starsBoxList = document.querySelectorAll('.stars-box-outer');
starsBoxList.forEach(
  (el, i) => (el.style.width = `${(reviews[i].vote / 5) * 110}px`),
);
