export function changeLanguage(){

    const languageButton = document.querySelector('.button__language');

    const descriptionPL = 'Programista z <strong class="special">kilkunastoletnim doświadczeniem</strong>, majster elektroniki, <strong class="special">właściciel przyszlego klasyka</strong>. Uwielbiam eksperymentować z nowymi technologiami i zaczynac nowe projekty (ktorych juz jest za duzo).';

    const descriptionEN = 'Software developer <strong class="special">with many years of experience</strong>, proficient in electronics, <strong class="special">owner of a future classic car</strong>. <br/> I like to experiment with new technologies and start exciting new projects (already too many on the go).';

    const footerPL = 'W sieci: <a class="person__link" href="https://uk.linkedin.com/in/michal-michalski-282898a1">LinkedIn</a>,<a class="person__link" href="https://github.com/mich1990?tab=repositories">GitHub</a>.';

    const footerEN = 'Online: <a class="person__link" href="https://uk.linkedin.com/in/michal-michalski-282898a1">LinkedIn</a>,<a class="person__link" href="https://github.com/mich1990?tab=repositories">GitHub</a>.';
    if(languageButton.textContent == 'PL')
    {
        languageButton.textContent = 'EN';
        document.querySelector('.person__about--with-margin').innerHTML = descriptionPL;
        document.querySelector('.person__about--footerjs').innerHTML = footerPL;
    }
    else
    {
        languageButton.textContent = 'PL';
        document.querySelector('.person__about--with-margin').innerHTML = descriptionEN;
        document.querySelector('.person__about--footerjs').innerHTML = footerEN;
    }
} 

