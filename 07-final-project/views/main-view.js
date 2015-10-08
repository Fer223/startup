var React = require('react');
var CharacterInfoView = require('./character-info-view');

var Input = require('../components/input.js');

var MainView = React.createClass({

    render: function () {

        return (
            <div className="container">
                <div className="characterInfo">
                    <CharacterInfoView />
                    <h1>hola</h1>
                </div>
            </div>
        );
    }
});

module.exports = MainView;