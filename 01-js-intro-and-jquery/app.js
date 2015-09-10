var main = function() {
    $('.hidden').fadeIn(5000);
    $( '.alias' ).focus().delay(5000); /*can't set the delay*/
};
$(document).ready(main);