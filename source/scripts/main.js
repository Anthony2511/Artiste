

/**********
MOBILE MENU
**********/
$('.navigation__toggle').click(function(e){
  //click event for left clicks only! http://www.jacklmoore.com/notes/click-events
  if (!(e.which > 1 || e.shiftKey || e.altKey || e.metaKey)) {
    e.preventDefault();
    if($(this).parent().find('.navigation__menu').hasClass('expanded-mobile-menu')){
      $(this).removeClass('expanded-menu-toggle').parent().removeClass('nav-expanded').find('.navigation__menu').removeClass('expanded-mobile-menu');
    }else{
      $(this).addClass('.navigation__expanded-toggle').parent().addClass('nav-expanded').find('.navigation__menu').addClass('expanded-mobile-menu');
    }
  }
});
