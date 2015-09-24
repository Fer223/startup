var Director = function (name, quotes) {
    this.name = name;
    this.quotes = quotes;
}

Director.prototype.speak = function () {
    console.log(quotes);
    alert(quotes);
}

module.exports = Director;