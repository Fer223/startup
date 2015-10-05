var React = require('react');
var Form = require('./form');
var MovieList = require('./movie-list');

var NewMovieForm = React.createClass({
    
    getInitialState: function () {
        return {
            data: [
                {title: 'Fight club', genre: 'Thriller', favorite: true},
                {title: 'Warrior', genre: 'Action', favorite: true}
            ]
        };
    },

    render: function () {
        return (
            <div className='NewMovieForm'>
                <Form onMovieSubmit={this.handleOnMovieSubmit}></Form>
                <MovieList data={this.state.data}></MovieList>
            </div>
        );
    },
    
    handleOnMovieSubmit: function (movie) {
        this.setState({data: this.state.data.concat(movie)});
        console.log(this.state.data);
    }
});

module.exports = NewMovieForm;