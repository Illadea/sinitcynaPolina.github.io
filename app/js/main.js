$(function(){
  $('.tab-box__nav li:first').addClass('select');                // Первой вкладке добавляетсякласс select
  $('.tab-box__panels>div').hide().filter(':first').show();      // Скрываются все блоки с описанием вкладок кроме первого
  $('.tab-box__nav a').click(function(){                         // При клике на вкладку
    $('.tab-box__panels>div').hide().filter(this.hash).show();   // - показывается блок с описанием текущей вкладки
    $('.tab-box__nav li').removeClass('select');                 // - удаляется класс 'select' у активной ранее вкладки
    $(this).parent().addClass('select');                    // - добавляется класс 'select' для выбранной вкладки
    return (false);                                         // - прерывается обработка события onClick
  })
})
