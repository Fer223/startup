var React = require('react');

var serverResponseManager = require('../stores/server-response-manager');

var Input = require('../components/input');
var CharacterInfoList = require('../components/character-info-list');

var CharacterInfoView = React.createClass({

    getInitialState: function () {
        return {
            name: '',
            realm: '',
            serverData: ''
        }
    },

    render: function () {
        return (
            <div>
                <h2>Character basic information</h2>
                <form {...this.getFormProps()}>
                    <Input {...this.getNameInputProps()} />
                    <Input {...this.getRealmInputProps()} />
                    <button>Search</button>
                    <CharacterInfoList {...this.getCharacterInfoListProps()}/>
                </form>
            </div>
        );
    },

    getFormProps: function () {
        return {
            onSubmit: this.handleFormSubmit
        }
    },

    getNameInputProps: function () {
        return {
            value: this.state.name,
            onChange: this.handleNameInputChange
        }
    },

    getRealmInputProps: function () {
        return {
            value: this.state.realm,
            onChange: this.handleRealmImputChange
        }
    },

    getCharacterInfoListProps: function () {
        return {
            name: this.state.serverData.name,
            realm: this.state.serverData.realm,
            race: this.state.serverData.race,
            class: this.state.serverData.class,
            gender: this.state.serverData.gender,
            battlegroup: this.state.serverData.battlegroup,
            level: this.state.serverData.level,
            achievementPoints: this.state.serverData.achievementPoints,
            thumbnail: this.state.serverData.thumbnail
        }
    },

    handleNameInputChange: function (event) {
        this.setState({name: event.target.value});
    },

    handleRealmImputChange: function (event) {
        this.setState({realm: event.target.value});
    },

    handleFormSubmit: function (event) {
        event.preventDefault();

        serverResponseManager.getCharacterInfo(this.state.realm, this.state.name, this.updateList);
        this.resetForm();
    },

    resetForm: function () {
        this.setState({name: '', realm: ''});
    },

    updateList: function (data) {
        this.setState({serverData: data});
        console.log(data);
    }
});

module.exports = CharacterInfoView;
