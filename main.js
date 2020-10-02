/* 
 *
*/
const descriptionPL = 'Programista z <strong class="special">kilkunastoletnim doświadczeniem</strong>, majster elektroniki, <strong class="special">właściciel przyszlego klasyka</strong>. Uwielbiam eksperymentować z nowymi technologiami i zaczynac nowe projekty (ktorych juz jest za duzo).';

const descriptionEN = 'Software developer <strong class="special">with many years of experience</strong>, proficient in electronics, <strong class="special">owner of a future classic car</strong>. I like to experiment with new technologies and start exciting new projects (already too many on the go).';

const buttonPL = document.querySelector('.button__PL');
const buttonEN = document.querySelector('.button__EN');

console.log(document.querySelector('.person__about--with-margin strong').innerText);

const buttonPLClick = () => document.querySelector('.person__about--with-margin').innerHTML = descriptionPL;

buttonPL.addEventListener('click', buttonPLClick);

const buttonENClick = () => document.querySelector('.person__about--with-margin').innerHTML = descriptionEN;

buttonEN.addEventListener('click', buttonENClick);


