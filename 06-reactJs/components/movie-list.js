var React = require('react');

var MovieList = React.createClass({

    render: function () {
        listNodes = this.props.data;
        return (
            <ul>
                {listNodes.map(function (movie) {
                    return (
                        <li>{movie.title},{movie.genre}</li>
                    )})
                }
            </ul>
        );
    }
});

module.exports = MovieList;