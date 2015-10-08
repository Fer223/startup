//VENDOR
var React = require('react');
var $ = require('jquery');
//STORES
var characterInfoStore = require('../stores/character-info-store');
//ACTIONS
var characterInfoStoreAction = require('../stores/character-info-store-actions');
//COMPONENTS
var Input = require('../components/input');
var CharacterInfoList = require('../components/character-info-list');

var CharacterInfoView = React.createClass({

    getInitialState: function () {
        return {
            name: '',
            realm: '',
            serverData: characterInfoStore.getCharacterInfo()
        }
    },

    componentWillMount: function () {
        characterInfoStore.addActionListener(characterInfoStoreAction.CHANGE_EVENT, this.updateList);
    },

    componentWillUnmount: function () {
        characterInfoStore.removeActionListener(characterInfoStoreAction.CHANGE_EVENT, this.updateList);
    },

    render: function () {

        return (
            <form {...this.getFormProps()}>
                <Input {...this.getNameInputProps()} />
                <Input {...this.getRealmInputProps()} />
                <button>Search</button>
                <CharacterInfoList {...this.getCharacterInfoListProps()}/>
            </form>
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
            data: this.state.serverData
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
        this.getServerResponse(this.state.realm, this.state.name);
        this.resetForm();
    },

    getServerResponse: function (realm, characterName) {
        $.ajax({
            url: 'https://us.api.battle.net/wow/character/'+realm+'/'+characterName+'?locale=en_US&apikey=mc4e8hbgbjhjvfuhzcs9w2gfknhdzzt7',
            dataType: 'json',
            success: function (data) {
                characterInfoStore.setCharacterInfo(data);
                console.log(data);
            },
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }
        });
    },

    resetForm: function () {
        this.setState({name: '', realm: ''});
    },

    updateList: function () {
        this.setState({serverData: characterInfoStore.getCharacterInfo()})
    }
});

module.exports = CharacterInfoView;