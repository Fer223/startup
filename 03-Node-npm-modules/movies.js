(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Director = function (name, quotes) {
    this.name = name;
    this.quotes = quotes;
}

Director.prototype.speak = function () {
    console.log(this.quotes);
    alert(this.quotes);
}

module.exports = Director;
},{}],2:[function(require,module,exports){
var Director = require('./director.js');
var Movie = require('./movie.js');
var director1 = new Director('Marin Scorsese', 'Courage is found in unlikely places.');
var movie1 = new Movie('the departed', '2006', director1);

movie1.directorQuotes();
},{"./director.js":1,"./movie.js":3}],3:[function(require,module,exports){
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
  
},{"./director.js":1}]},{},[2]);
