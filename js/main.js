$(window).on('load', function() {
  $('.effect').focusout(function(){
    if($(this).val() != '') {
      $(this).addClass('has-content');
    } else {
      $(this).removeClass('has-content');
    }
  })
});
