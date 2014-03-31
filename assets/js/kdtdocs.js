/* Generate pseudo-random order id number for code examples */
$(document).ready(function() {
  var order = (new Date).getTime();
  var i = Math.floor((Math.random()*9879870)+1);
  $('span[id^="order_id_"]').each(function() {
    var x = order + i;
    $(this).append('"' + x + '",');
    i++;
  });
});

/* Toggles code language */
$('button[id^="toggle-"]').click(function() {
  $('div[id^="example-"]').attr('class', 'hidden');
  var x = $(this).attr("id").replace("toggle-","example-")+"-";
  $('div[id^='+x+']').attr('class', 'show');
})

/* Last updated */
Date.prototype.yyyymmdd = function() {
   var yyyy = this.getFullYear().toString();
   var mm = (this.getMonth()+1).toString();
   var dd  = this.getDate().toString();
   return yyyy + "-" + (mm[1]?mm:"0"+mm[0]) + "-" + (dd[1]?dd:"0"+dd[0]);
  };
$(document).ready(function() {
  d = new Date(document.lastModified);
  $("#lastModified").html(d.yyyymmdd());
});