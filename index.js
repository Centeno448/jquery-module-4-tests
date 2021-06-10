import $ from 'jquery';

$('#button').click(function () {
  var toAdd = $('input[name=itemCompras]').val();
  $('ol').append('<li>' + toAdd + '</li>');
  $('input').val('');
});

$('input[name=itemCompras]').keyup(function (event) {
  if (event.keyCode == 13) {
    $('#button').click();
  }
});
