$( document ).ready(function() {

  //ACCORDEON
  $(".custom-accordion__btn").on("click", function(e) {

    e.preventDefault();
    var $this = $(this);

    if (!$this.hasClass("active")) {
        $(".custom-accordion__panel").slideUp(400);
        $(".custom-accordion__btn").removeClass("active");
    }

    $this.toggleClass("active");
    $this.next().slideToggle();
      
  });

  //btn open popup
  function btnPopup (btn) {
    $(btn).on('click', function (event) {
      event.preventDefault();

      let target = event.target.getAttribute('data-target');
      $(target).fadeIn();
      $('body').addClass('fixed');
    });
  }
  btnPopup('.js-btn-popup');

  //btn-close close popup
  function btnClose(btn) {
    $(btn).on('click', function (event) {
      event.preventDefault();

      let target = event.target.closest('.popup');
      $(target).fadeOut();
      $('body').removeClass('fixed');
    });
  };
  btnClose('.popup__close');

  let splide = new Splide( '.reviews__splide', {
      perPage: 3,
      rewind : true,
      perMove: 1,
      gap: '2rem',
      focus  : 'center',
      type: 'loop',
    } );
    
  splide.mount();

});