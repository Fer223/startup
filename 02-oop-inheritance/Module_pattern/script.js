var inheritPrototype = function (childClass, parentClass){
  var copyOfParent = Object.create(parentClass.prototype);
  copyOfParent.constructor = childClass;
  childClass.prototype = copyOfParent;
}

var augment = function ( receivingClass, givingClass ) {
 
    // only provide certain methods
    if ( arguments[2] ) {
        for ( var i = 2, len = arguments.length; i < len; i++ ) {
            receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
        }
    }
    // provide all methods
    else {
        for ( var methodName in givingClass.prototype ) {
 
            // check to make sure the receiving class doesn't
            // have a method of the same name as the one currently
            // being processed
            if ( !Object.hasOwnProperty.call(receivingClass.prototype, methodName) ) {
                receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            }
 
            // Alternatively (check prototype chain as well):
            // if ( !receivingClass.prototype[methodName] ) {
            // receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            // }
        }
    }
}

var Social = function () {}

Social.prototype = {
  share: function (friendName) {
  console.log(this.title + ' Shared to ' + friendName);
  },
  like: function () {
  console.log(this.title + ' +1');
  }
};

var Movie = (function () {
  
  var Movie = function (title, year) {
    this.title = title;
    this.year = year;
    this.review = null;
  };
  
  Movie.prototype.play = function () {
    console.log('Playing ' + this.title);
  };
  Movie.prototype.stop = function () {
    console.log(this.title + ' Stoped');
  };
  Movie.prototype.setReview = function (review) {
    this.review = review;
  };
  Movie.prototype.getReview = function () {
    return 'Review -> Movie:' + this.title + '  ' + ' Year: ' + this.year + '   ' + this.review;
  };

  return Movie;
  
})();

augment(Movie, Social);

var DownloadableMovie = function (title, year) {
  Movie.call(this, title, year);
};

inheritPrototype(DownloadableMovie, Movie);

DownloadableMovie.prototype.download = function () {
  console.log('Dowloading ' + this.title);
}

var movie1 = new Movie('psicosis', 1959);
movie1.play();
movie1.share('aurelio');
movie1.like();
var movie2 = new DownloadableMovie('Warrior', 2013);
movie2.stop();
movie2.download();
