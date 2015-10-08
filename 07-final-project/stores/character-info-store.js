var EventEmitter = require('events').EventEmitter;
var _ = require('lodash');
var inherits = require('inherits');
var acctions = require('./character-info-store-actions');

var CharacterInfoStore = function () {
    this.state = this.getInitialState();
};

inherits(CharacterInfoStore, EventEmitter);

CharacterInfoStore.prototype.getInitialState = function () {
    return {
        characterInfo: []
    };
};

CharacterInfoStore.prototype.getCharacterInfo = function () {
    return this.state.characterInfo;
};

CharacterInfoStore.prototype.setCharacterInfo = function (serverData) {
    this.setState({characterInfo: serverData});
};

CharacterInfoStore.prototype.setState = function (newState, callback) {
    _.extend(this.state, newState);

    this.emit(acctions.CHANGE_EVENT);

    if (callback) {
        callback();
    }
};

CharacterInfoStore.prototype.addActionListener = function (action, callback) {
    this.on(action, callback);
};

CharacterInfoStore.prototype.removeActionListener = function (action, callback) {
    this.removeActionListener(action, callback);
};

module.exports = new CharacterInfoStore();