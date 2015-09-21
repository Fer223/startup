
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



var movie2 = new Movie('wep', 2010);
movie2.play();
movie2.stop();
var movie1 = new Movie('hay hay ', 1993);
movie1.play();