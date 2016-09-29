$(document).ready(function() {
  $('.panel-button').on('click' , function() {
    var panelid = $(this).attr('data-panelid');
    $('#' + panelid).slideToggle(800);
  });
});
