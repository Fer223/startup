var React = require('react');

var Home = React.createClass({

    render: function () {
        return (
            <div className="panel panel-info">
                <div className="panel-heading">
                    Welcome to my final Project
                </div>
                <div className="panel-body">
                    Navigate through the site and see what is happening in the World of Warcraft
                </div>
            </div>
        );
    }
});

module.exports = Home;

