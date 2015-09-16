var m1;

var Movie = function (title, year) {
    this.title = title;
    this.year = year;
    this.review = null;
}

Movie.prototype = {
    constuctor: Movie,
    play: function () {
        console.log('Playing '+ this.title);
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

m1 = new Movie('Nueve Reinas', 2000);
m1.play();
m1.setReview('Darin deserves what happened to him jaja');
m1.stop();
m1.getReview();

