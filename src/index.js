
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

function ChangeTheme()
{
      if (!checkboxRef.checked){
      bodyRef.classList.remove('dark-theme');
      bodyRef.classList.add('light-theme');
      }
      else  {
      bodyRef.classList.remove('light-theme');
      bodyRef.classList.add('dark-theme');
      }
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

localStorage.setItem('theme', Theme.DARK);

 


 
 

 


  