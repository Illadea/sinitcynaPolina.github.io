/* TABS */
$(function(){
  $('.tab-box__nav li:first').addClass('tab-box__nav-item-selected');                // Первой вкладке добавляется класс tab-box__nav-item-selected
  $('.tab-box__panels>div').hide().filter(':first').show();      // Скрываются все блоки с описанием вкладок кроме первого
  $('.tab-box__nav a').click(function(){                         // При клике на вкладку
    $('.tab-box__panels>div').hide().filter(this.hash).show();   // - показывается блок с описанием текущей вкладки
    $('.tab-box__nav li').removeClass('tab-box__nav-item-selected');                 // - удаляется класс 'tab-box__nav-item-selected' у активной ранее вкладки
    $(this).parent().addClass('tab-box__nav-item-selected');                    // - добавляется класс 'tab-box__nav-item-selected' для выбранной вкладки
    return (false);                                         // - прерывается обработка события onClick
  })
})

/* NAVIGATION, BURGER MENU */
$(document).ready(function() {
  $('.menu__hamburger-btn').click(function() {
      $('.menu__hamburger-btn').toggleClass('open-menu');
      $('.menu__list').toggleClass('open-menu');
      $('body').toggleClass('fixed-page');
  });
});

$(document).ready(function() {
  $('.container').click(function() {
      $('.menu__hamburger-btn').removeClass('open-menu');
      $('.menu__list').removeClass('open-menu');
      $('body').removeClass('fixed-page');
  });
});

$(document).ready(function() {
  $('.menu__list-item').click(function() {
      $('.menu__hamburger-btn').removeClass('open-menu');
      $('.menu__list').removeClass('open-menu');
      $('body').removeClass('fixed-page');
  });
});

/* NAVIGATION: when user scrolls down, hide the navbar. When user scrolls up, show the navbar and add boxshadow to it*/
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
    document.getElementById("header").style.boxShadow = "0 10px 30px -10px rgba(2,12,27,0.7)";
  } 
  else {
    document.getElementById("header").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}