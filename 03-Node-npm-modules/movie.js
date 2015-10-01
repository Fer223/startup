var director = require('./director.js')

var Movie = function (title, year, director) {
  this.title = title;
  this.year = year;
  this.review = null;
  this.director = director;
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
Movie.prototype.directorQuotes = function () {
    this.director.speak();
}

module.exports = Movie;
  