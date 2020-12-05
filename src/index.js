
import "./styles.css";
import dishes from "./menu.json";
import itemsTemplate from "./gallery-items.hbs"; 

const bodyRef = document.querySelector('body');
const checkboxRef = document.getElementById('theme-switch-toggle');
const galleryRef = document.querySelector('.js-menu');

const markup = itemsTemplate(dishes);
galleryRef.insertAdjacentHTML('beforeend', markup);

bodyRef.classList.add('light-theme');
checkboxRef.addEventListener('change', ()=> changeTheme());

const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeValue =localStorage.getItem('theme');

function updateTheme(){
  if(themeValue=== theme.DARK){
    checkboxRef.checked=true;
    bodyRef.classList.remove('light-theme');
    bodyRef.classList.add('dark-theme');
};
};

updateTheme();

function changeTheme()
{
      if (!checkboxRef.checked){
      bodyRef.classList.remove('dark-theme');
      bodyRef.classList.add('light-theme');
      localStorage.setItem('theme', theme.LIGHT);
      }
      else  {
      bodyRef.classList.remove('light-theme');
      bodyRef.classList.add('dark-theme');
      localStorage.setItem('theme', theme.DARK);
      }
};




