'use strict';
var lunarm = (function () {
  var $contactBtn = $('.js-contact-button');
  var init = function () {
    contactBtnAction();
  };
  var contactBtnAction = function () {
    $contactBtn.off('click');
    $contactBtn.on('click',function () {
      sendContactForm();
    });
  };
  var sendContactForm = function () {
    alertify.success('Consulta enviada');
  };
  return {
    init: init
  };
})();
$(document).ready(function () {
  myapp.init();
});
