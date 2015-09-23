var ObserverList = function () {
  this.observerList = [];
}
 
ObserverList.prototype.add = function (obj) {
  return this.observerList.push( obj );
};
 
ObserverList.prototype.count = function () {
  return this.observerList.length;
};
 
ObserverList.prototype.get = function (index) {
  if( index > -1 && index < this.observerList.length ) {
    return this.observerList[ index ];
  }
};
 
ObserverList.prototype.indexOf = function (obj, startIndex) {
  var i = startIndex;
 
  while( i < this.observerList.length ){
    if( this.observerList[i] === obj ){
      return i;
    }
    i++;
  }
 
  return -1;
};
 
ObserverList.prototype.removeAt = function (index) {
  this.observerList.splice (index, 1);
};

var Subject = function () {
  this.observers = new ObserverList();
}
 
Subject.prototype.addObserver = function (observer) {
  this.observers.add( observer );
};
 
Subject.prototype.removeObserver = function (observer) {
  this.observers.removeAt( this.observers.indexOf(observer, 0));
};
 
Subject.prototype.notify = function (context, data) {
  var observerCount = this.observers.count();
  for(var i=0; i < observerCount; i++){
    this.observers.get(i).update(context, data);
  }
};

// The Observer
var Observer = function () {
  this.update = function (context, data) {
    console.log(this.name + ':');
    switch(context) {
      case 'Play':
        console.log('watching ' + data)
        break;
      case 'Stop':
        console.log(data + ' is on pause')
        break;
    }
  };
}

var extend = function (obj, extension) {
  for (var key in extension) {
    obj[key] = extension[key];
  }
}

var Movie = function (title, year) {
    this.title = title;
    this.year = year;
    this.review = null;
};

Movie.prototype = {
    constructor: Movie,
    play: function () {
      this.notify('Play',this.title);
    },
    stop: function () {
        this.notify('Stop',this.title);
    },
    setReview: function (review) {
        this.review = review;
    },
    getReview: function () {
        return 'Review -> Movie:' + this.title + '  ' + ' Year: ' + this.year + '   ' + this.review;
    }
}

var MovieObserver = function (name) {
  this.name = name;
}

movie1 = new Movie('Leon', 1998);
person1 = new MovieObserver('pipo');

extend(movie1, new Subject);
extend(person1, new Observer)

movie1.addObserver(person1);
movie1.play();
movie1.stop();
person2 = new MovieObserver('coco');
extend(person2, new Observer);
movie1.addObserver(person2);
movie1.play();

