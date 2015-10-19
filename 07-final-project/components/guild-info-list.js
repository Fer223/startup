var React = require('react');

var GuildInfoList = React.createClass({

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
                {this.renderGuildInfo()}
            </div>
        );
    },

    renderGuildInfo: function () {
        return (
            <ul className="list-group">
                <li className="list-group-item">Name: {this.props.name}</li>
                <li className="list-group-item">Realm: {this.props.realm}</li>
                <li className="list-group-item">Battle Group: {this.props.battlegroup}</li>
                <li className="list-group-item">Level: {this.props.level}</li>
                <li className="list-group-item">Achivement Points: {this.props.achievementPoints}</li>
            </ul>
        );
    }
});

module.exports = GuildInfoList;
