var onPageReady = function () {
    
    $('.hidden').fadeIn(5000, function () {
        
        $('.alias').focus();
    });

    $('.btn').on('click', function (event) {
        
        $.get('http://bootcamp.aws.af.cm/welcome/Fernando', function (data) {
            
            $('.hidden').html(data.response);
        });
    });

    $('.btn2').on('click', function (event) {
        
        $.ajax({
            method: 'GET',
            url: 'https://api.spotify.com/v1/search',
            data: {q: 'Rolling Stones', type: 'album'},
            success: function (data) { 
                
                for (var i = 0; i < data.albums.items.length ; i++) {
                    var albName = $('<p><b>Album</b>:'+data.albums.items[i].name+'</p>');
                    var albImg = $('<img src="'+data.albums.items[i].images[0].url+'" />');
                    var albUrl = $('<a href="'+data.albums.items[i].external_urls.spotify +'">In spotify</a>');
                    var art = $('<article>').append(albName, albImg, albUrl);
                    $('.articles-container').append(art);
                };
            }
        });
    });
};

$(document).ready(onPageReady);
