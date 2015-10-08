var React = require('react');

var CharacterInfoList = React.createClass({

    render: function () {

        return (
            <div>
                    {this.renderCharacterInfo()}
            </div>
        );
    },

    renderCharacterInfo: function () {
        return (
            <ul>

                <li>Name: {this.props.data.name}</li>
                <li>Realm: {this.props.data.realm}</li>
                <li>Race: {this.props.data.race}</li>
                <li>Class: {this.props.data.class}</li>
                <li>Battle Group: {this.props.data.battlegroup}</li>
            </ul>
        );
    }

});

module.exports = CharacterInfoList;
