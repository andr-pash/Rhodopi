$('document').ready(function(){
  $('#navbutton').on('click', function(){
    $('#nav-menu').toggleClass('is-open');
    $('#navbutton').toggleClass('is-open');
  });
});
