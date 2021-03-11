// /* TABS */
$(function () {
  $('.tab-box__nav li:first').addClass('tab-box__nav-item-selected');                // Первой вкладке добавляется класс tab-box__nav-item-selected
  $('.tab-box__panels>div').hide().filter(':first').show();      // Скрываются все блоки с описанием вкладок кроме первого
  $('.tab-box__nav a').click(function () {                         // При клике на вкладку
    $('.tab-box__panels>div').hide().filter(this.hash).show();   // - показывается блок с описанием текущей вкладки
    $('.tab-box__nav li').removeClass('tab-box__nav-item-selected');                 // - удаляется класс 'tab-box__nav-item-selected' у активной ранее вкладки
    $(this).parent().addClass('tab-box__nav-item-selected');                    // - добавляется класс 'tab-box__nav-item-selected' для выбранной вкладки
    return (false);                                         // - прерывается обработка события onClick
  })
})



/* NAVIGATION, BURGER MENU */
const menuHamburgerBtnElem = document.querySelector('.menu__hamburger-btn');
const menuListElem = document.querySelector('.menu__list');
const menuListItemElem = document.querySelector('.menu__list-item');
const openMenuElem = document.querySelector('.open-menu');
const fixedPageElem = document.querySelector('.fixed-page');
const containerElem = document.querySelector('.container');

menuHamburgerBtnElem.addEventListener('click', () => {
  menuHamburgerBtnElem.classList.toggle('open-menu');
  menuListElem.classList.toggle('open-menu');
  document.body.classList.toggle('fixed-page');
});

menuListItemElem.addEventListener('click', () => {
  menuHamburgerBtnElem.classList.remove('open-menu');
  menuListElem.classList.remove('open-menu');
  document.body.classList.remove('fixed-page');
});

containerElem.addEventListener('click', () => {
  menuHamburgerBtnElem.classList.remove('open-menu');
  menuListElem.classList.remove('open-menu');
  document.body.classList.remove('fixed-page');
});



/* NAVIGATION: when user scrolls down, hide the navbar. When user scrolls up, show the navbar and add boxshadow to it*/
let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = '0';
    document.getElementById("header").style.boxShadow = '0 10px 30px -10px rgba(2,12,27,0.7)';
  } else {
    document.getElementById("header").style.top = '-111px';
  }
  if (window.pageYOffset === 0) {
    document.getElementById("header").style.boxShadow = 'unset';
    document.getElementById("header").style.top = '0px';
  }
  prevScrollpos = currentScrollPos;
}