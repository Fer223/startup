var main = function() {
    
    $('.hidden').fadeIn(5000, function() {

        $( '.alias' ).focus()
    });

    $('#btn').click( function( event ) {

        $.get("http://bootcamp.aws.af.cm/welcome/yourname", function(text) {
            $('.hidden').html(text.response);
        });
    });

    $('#btn2').click( function( event ) {

       $.ajax({url: "https://api.spotify.com/v1/search",
            type: 'get',
            data: {q: "Rolling Stones", type: "album"},
            function(data) { 
                console.log(data);
            }
        });
    });
};

$(document).ready(main);
