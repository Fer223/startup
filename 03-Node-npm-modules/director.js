var Director = function (name, quotes) {
    this.name = name;
    this.quotes = quotes;
}

Director.prototype.speak = function () {
    console.log(this.quotes);
    alert(this.quotes);
}

module.exports = Director;