
import './styles.css';
import dishes from './menu.json';
import itemsTemplate from '../templates/gallery-items.hbs';


const body = document.querySelector('body');
body.classList.add('dark-theme');
const checkbox = document.getElementById('theme-switch-toggle');
const currentTheme = '';
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
checkbox.addEventListener('change', function () { ChangeTheme(); });

function ChangeTheme()
{
        if (currentTheme===Theme.LIGHT){
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
        }
        else if(currentTheme===Theme.DARK){
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
        }
     
};

 const galleryRef = document.querySelector('js-menu');
 const markup = itemsTemplate(dishes);
 galleryRef.insertAdjacentHTML('beforeend', markup);

  