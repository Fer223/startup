var Movie;
var MovieObserver;

//metodos para publicar y subscribir
var EventBus = {
  topics: {},

  subscribe: function(topic, listener) {
    // create the topic if not yet created
    if(!this.topics[topic]) this.topics[topic] = [];

    // add the listener
    this.topics[topic].push(listener);
  },

  publish: function(topic, data) {
    // return if the topic doesn't exist, or there are no listeners
    if(!this.topics[topic] || this.topics[topic].length < 1) return;

    // send the event to all listeners
    this.topics[topic].forEach(function(listener) {
      listener(data || {});
    });
  }
};


//Mis dos clases con sus atributos y funciones
Movie = function (title, year) {
    this.title = title;
    this.year = year;
    this.review = null;
};

Movie.prototype = {
    constructor: Movie,
    play: function () {
    EventBus.publish('playStarted', this.title);
  },
    stop: function () {
        console.log(this.title + 'Stoped');
    },
    setReview: function (review) {
        this.review = review;
    },
    getReview: function () {
        return 'Review -> Movie:' + this.title + '  ' + ' Year: ' + this.year + '   ' + this.review;
    }
}

MovieObserver = function () {};

MovieObserver.prototype = {
  EventBus.subscribe('playStarted', this.watchingMovie(title));
},
MovieObserver.prototype.watchingMovie = function (title) {
  console.log('Playing ' + title);
};




//Main
var movieObserver1 = new MovieObserver();
var movie1 = new Movie('Nueve reinas', 2000);
movie1.play();