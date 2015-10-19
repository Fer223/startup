var React = require('react');

var CharacterInfoList = React.createClass({

    propTypes: {
        name: React.PropTypes.string,
        realm: React.PropTypes.string,
        race: React.PropTypes.string,
        class: React.PropTypes.string,
        gender: React.PropTypes.string,
        battlegroup: React.PropTypes.string,
        lever: React.PropTypes.string,
        achievementPoints: React.PropTypes.string,
        thumbnail: React.PropTypes.string
    },

    render: function () {
        return (
            <div>
                {this.renderCharacterInfo()}
            </div>
        );
    },

    renderCharacterInfo: function () {
        var url = 'http://us.battle.net/static-render/us/' + this.props.thumbnail;
        return (
            <ul className="list-group">
                <li className="list-group-item">Name: {this.props.name}</li>
                <li className="list-group-item">Realm: {this.props.realm}</li>
                <li className="list-group-item">Race: {this.props.race}</li>
                <li className="list-group-item">Class: {this.props.class}</li>
                <li className="list-group-item">Gender: {this.props.gender}</li>
                <li className="list-group-item">Battle Group: {this.props.battlegroup}</li>
                <li className="list-group-item">Level: {this.props.level}</li>
                <li className="list-group-item">Achivement Points: {this.props.achievementPoints}</li>
                {this.props.thumbnail?<img src={url} className="img-thumbnail" />: 'photo'}
            </ul>
        );
    }
});

module.exports = CharacterInfoList;
