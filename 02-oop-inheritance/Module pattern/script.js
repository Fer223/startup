
var inheritPrototype = function (childClass, parentClass){

    var copyOfParent = Object.create(parentClass.prototype);
    copyOfParent.constructor = childClass;
    childClass.prototype = copyOfParent;
};

var Movie = (function () {
  
  function Movie (title, year) {
    this.title = title;
    this.year = year;
    this.review = null;
  };
  
  Movie.prototype.play = function () {
    console.log('Playing ' + this.title);
  };
  Movie.prototype.stop = function () {
    console.log(this.title + 'Stoped');
  };
  Movie.prototype.setReview = function (review) {
    this.review = review;
  };
  Movie.prototype.getReview = function () {
    return 'Review -> Movie:' + this.title + '  ' + ' Year: ' + this.year + '   ' + this.review;
  };

  return Movie;
})();

var DownloadableMovie = function () {
  Movie.call(this, title, year);

};
inheritPrototype(DownloadableMovie, Movie);

DownloadableMovie.prototype.download = function () {
  console.log('Dowloading ' + this.title);
}


var movie1 = new Movie('psicosis', 1959);
movie1.play();
var movie2 = new DownloadableMovie('Warrior', 2013);
movie2.download();
