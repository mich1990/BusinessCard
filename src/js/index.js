/* 
 * Michal Michalski BusinessCard main.js 
*/
import '../scss/main.scss';

import {changeLanguage} from './language_change.js';

document.querySelector('.button__language').addEventListener('click', changeLanguage);