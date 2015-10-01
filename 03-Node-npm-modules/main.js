var Director = require('./director.js');
var Movie = require('./movie.js');
var director1 = new Director('Marin Scorsese', 'Courage is found in unlikely places.');
var movie1 = new Movie('the departed', '2006', director1);

movie1.directorQuotes();