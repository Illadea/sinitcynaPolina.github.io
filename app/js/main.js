window.addEventListener('DOMContentLoaded', () => {

  // TABS
 const tabs = document.querySelectorAll('.tab-box__nav-item'),
       tabsContent = document.querySelectorAll('.tab-box__content'),
       tabsParent = document.querySelector('.tab-box__nav'); 

 function hideTabContent() {
   tabsContent.forEach(item => {
     item.classList.add('hide');
     item.classList.remove('show', 'fade');
   });

   tabs.forEach(item => {
     item.classList.remove('tab-box__nav-item_active');
   });

 }

 function showTabContent(i = 0) {
   tabsContent[i].classList.add('show', 'fade');
   tabsContent[i].classList.remove('hide');
   tabs[i].classList.add('tab-box__nav-item_active');
 }

 hideTabContent();
 showTabContent();
 
 tabsParent.addEventListener('click', (e) => {
   const target = e.target;

   if(target && target.classList.contains('tab-box__nav-item')) {
     tabs.forEach((item, i) => {
       if (target == item) {
         hideTabContent();
         showTabContent(i);
       } 
     });
   }
 });
 

  // NAVIGATION, BURGER MENU 
  const menuHamburgerBtn = document.querySelector('.menu__hamburger-btn'),
        menuList = document.querySelector('.menu__list'),
        menuListItems = document.querySelectorAll('.menu__list-item'),
        container = document.querySelector('.container');


  function closeMenu() {
    menuHamburgerBtn.classList.remove('open-menu');
    menuList.classList.remove('open-menu');
    document.body.classList.remove('fixed-page');
  } 

  menuHamburgerBtn.addEventListener('click', () => {
    menuHamburgerBtn.classList.toggle('open-menu');
    menuList.classList.toggle('open-menu');
    document.body.classList.toggle('fixed-page');
  });

  menuListItems.forEach(item => {
    item.addEventListener('click', () => {
      closeMenu();
    });
  });

  container.addEventListener('click', () => {
    closeMenu();
  });


  // NAVIGATION: when user scrolls down, hide the navbar. When user scrolls up, show the navbar and add boxshadow to it
  let prevScrollpos = window.pageYOffset;
  window.addEventListener('scroll', () => {
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
  });
});





