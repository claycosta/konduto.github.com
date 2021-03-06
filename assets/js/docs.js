/* i18next */
$(document).ready(function() {
  i18n.init({
    fallbackLng:'en',
    useCookie:true,
    detectLngQS:'lang'
  }, function(t) {
    $("body").i18n();
    i18nlang = i18n.lng().substring(0,2);
    $('#flag--active--'+i18nlang).removeClass('hidden');
    $('li[id^="flag--"]').removeClass('is-active');
    $('#flag--'+i18nlang).addClass('is-active');
  });
});

/* Generate pseudo-random order id number for code examples */
$(document).ready(function() {
  var order = (new Date).getTime();
  var i = Math.floor((Math.random()*9879870)+1);
  $('span[id^="order_id_"]').each(function() {
    var x = order+i;
    $(this).append('"'+x+'",');
    i++;
  });
});

/* Toggles code language */
$('button[id^="toggle-"]').click(function() {
  $('div[id^="example-"]').attr('class', 'hidden');
  var x = $(this).attr("id").replace("toggle-","example-")+"-";
  $('div[id^='+x+']').attr('class', 'visible');
})