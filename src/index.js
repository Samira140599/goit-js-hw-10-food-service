
import "./styles.css";
import dishes from "./menu.json";
import itemsTemplate from "./gallery-items.hbs"; 

const bodyRef = document.querySelector('body');
const checkboxRef = document.getElementById('theme-switch-toggle');
const galleryRef = document.querySelector('.js-menu');

const markup = itemsTemplate(dishes);
galleryRef.insertAdjacentHTML('beforeend', markup);

bodyRef.classList.add('light-theme');
checkboxRef.addEventListener('change', ()=> ChangeTheme());

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const key =localStorage.getItem('theme');

function UpdateTheme(){
  if(key=== Theme.DARK){
    checkboxRef.checked=true;
    bodyRef.classList.remove('light-theme');
    bodyRef.classList.add('dark-theme');
};
};

UpdateTheme();

function ChangeTheme()
{
      if (!checkboxRef.checked){
      bodyRef.classList.remove('dark-theme');
      bodyRef.classList.add('light-theme');
      localStorage.setItem('theme', Theme.LIGHT);
      }
      else  {
      bodyRef.classList.remove('light-theme');
      bodyRef.classList.add('dark-theme');
      localStorage.setItem('theme', Theme.DARK);
      }
};




