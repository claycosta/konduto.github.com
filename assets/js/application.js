(function(){$(document).ready(function(){var t,e;return t=$(".js-navbar"),e=$(".js-navbar-toggle"),e.click(function(){return e.toggleClass("is-active"),t.toggleClass("is-active"),!1})})}).call(this),function(){$(document).ready(function(){return $(".js-popup-toggle").magnificPopup({type:"inline",midClick:!0,mainClass:"mpf-anim",overflowY:"auto",closeBtnInside:!0})}),$("#theformen").submit(function(){return $("#signup-btn").html("Submitting..."),$("#signup-btn").attr("disabled","disabled"),$.ajax("https://kondutobetatrial.herokuapp.com/",{type:"POST",data:$("#theformen").serialize(),error:function(){return $("#signup-btn").hide(),$('[id^="form-id"]').hide(),$("#thankyou").html("We apologize, there was a problem sending your request.<br>You can always contact us at <a href='mailto:hi@konduto.com?subject=Beta%20trial'>hi@konduto.com</a>!")},success:function(){return $("#signup-btn").hide(),$('[id^="form-id"]').hide(),$("#thankyou").html("Thanks for your interest!<br>We'll be in touch soon to setup your Beta.")}}),!1}),$("#theformpt").submit(function(){return event.preventDefault(),$("#signup-btn").html("Enviando..."),$("#signup-btn").attr("disabled","disabled"),$.ajax("https://kondutobetatrial.herokuapp.com/",{type:"POST",data:$("#theformpt").serialize(),error:function(){return $("#signup-btn").hide(),$('[id^="form-id"]').hide(),$("#thankyou").html("Desculpe, houve um erro com a sua solicia\xe7\xe3o<br>Voc\xea sempre pode falar com a gente no <a href='mailto:hi@konduto.com?subject=Beta%20trial'>hi@konduto.com</a>!")},success:function(){return $("#signup-btn").hide(),$('[id^="form-id"]').hide(),$("#thankyou").html("Obrigado pelo interesse!<br>Em breve entraremos em contato para conversar sobre o seu Beta.")}}),!1})}.call(this),function(){$(document).ready(function(){var t,e;return e=function(t){var e;return t.preventDefault(),e="#"+$(this).data("target-id"),$(e).addClass("is-active"),t.stopPropagation()},t=function(){return $(".popover.is-active").removeClass("is-active")},$(".popover").click(function(t){return t.stopPropagation()}),$('[data-toggle="popover"]').click(e),$("html").click(t)})}.call(this),function(){$(document).ready(function(){FastClick.attach(document.body)})}.call(this);