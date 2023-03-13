const menu = document.getElementById('menu');
const main_aside = document.getElementById('main-aside');
const close_menu =  document.getElementById('close-menu');
const main_nav = document.querySelector('.main-nav');
const content = document.querySelector('.content');
const frame = document.getElementById('main-frame');
const hide_menu = () => {
  main_aside.style.display = 'none';
  main_nav.style.width = '100%';
  content.style.width = '100%';
  content.style.left = '0%';
};
menu.addEventListener('click', () => {
  main_aside.style.display = 'block';
  if(window.screen.width >= 768){
    main_nav.style.width = '80%';
    content.style.width = '80%';
    content.style.left = '20%';
  }
  
});
close_menu.addEventListener('click', hide_menu);
const renderFrame = (element, file) => {
  let parent = element.parentElement;
  let lis = document.querySelectorAll(".container__body__li");
  if(window.screen.width < 768){
    hide_menu();
  }
  lis.forEach(li => {
    li.style.background = "#3C4B64";
    li.style.padding = "0px";
  });
  if(parent.classList.value === 'container__body__li'){
    parent.style.background = "#fff"
    parent.style.padding = "10px";
  }
  
  frame.src = `./src/${file}.html`;
};
