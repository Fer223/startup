var onPageReady = function () {
    
    var albumName;
    var albumImg;
    var albumUrl;
    var albumContainer;

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
                    albumName = $('<p><b>Album</b>:'+data.albums.items[i].name+'</p>');
                    albumImg = $('<img src="'+data.albums.items[i].images[0].url+'" />');
                    albumUrl = $('<a href="'+data.albums.items[i].external_urls.spotify +'">In spotify</a>');
                    albumContainer = $('<article>').append(albumName, albumImg, albumUrl);
                    $('.articles-container').append(albumContainer);
                };
            }
        });
    });
};

$(document).ready(onPageReady);
