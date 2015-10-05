var React = require('react');

var Form = React.createClass({
    getInitialState: function () {
        return({
            title: '',
            genre: '',
            favorite: false
        });
    },
    render: function () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' placeholder='Title' refs='title' onChange={this.handleTitleChange} />
                <input type='text' placeholder='Genre' refs='genre' onChange={this.handleGenreChange} />
                <input type='checkbox' onClick={this.handleCheckboxChange}>Add to favorites </input>
                <input type='submit' value='Post' />
            </form>
        );
    },

    handleTitleChange: function (event) {
        this.setState({title: event.target.value});
        var title = event.target.value;
        console.log(title);
    },

    handleGenreChange: function (event) {
        this.setState({genre: event.target.value});
        var genre = event.target.value;
        console.log(genre);
    },

    handleCheckboxChange: function (event) {
        if (event.target.value) {
            this.setState({favorite: true})
        }
    },

    handleSubmit: function (event) {
        event.preventDefault();
        console.log(this.state.title);
        console.log(this.state.genre);
        this.props.onMovieSubmit({title: this.state.title, genre: this.state.genre, favorite: this.state.favorite});
    }
});

module.exports = Form;