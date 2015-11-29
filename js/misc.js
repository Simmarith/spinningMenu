$(document).bind("contextmenu", function(e) {
  $('.spinner').css('position', 'absolute');
  $('.spinner').css('top', (e.pageY-150) + 'px');
  $('.spinner').css('left', (e.pageX-150) + 'px');
  $('.spinner').removeClass('invisible');
  return false;
});
$(document).ready(function() {
  $('#buffer').click(function () {
    $('.spinner').addClass('invisible');
  });
  $('#add').click(function () {
    alert('Hier könnte man jetzt die addFunction aufrufen');
  });
  $('#rem').click(function () {
    alert('Hier könnte man jetzt die remFunction aufrufen');
  });
});
