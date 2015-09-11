var main = function() {
    
    $('.hidden').fadeIn(5000);
    //can't set delay
    $( '.alias' ).focus().delay(5000); 
};
$(document).ready(main);
