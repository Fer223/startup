var $ = require('jquery');

var ServerResponseManager = function () {

};

ServerResponseManager.prototype.getCharacterInfo = function (realm, characterName, callback) {
    $.ajax({
        url: 'https://us.api.battle.net/wow/character/' + realm + '/' + characterName + '?locale=en_US&apikey=mc4e8hbgbjhjvfuhzcs9w2gfknhdzzt7',
        dataType: 'json',
        success: function (data) {
            callback(data);
        },
        error: function(xhr, status, err) {
            console.error(this.url, status, err.toString());
            alert('The character name or realm doesn t match');
        }
    });
};

ServerResponseManager.prototype.getRealmsCurrentStatus = function (callback) {
    $.ajax({
        url: 'https://us.api.battle.net/wow/realm/status?locale=en_US&apikey=mc4e8hbgbjhjvfuhzcs9w2gfknhdzzt7',
        dataType: 'json',
        success: function (data) {
            callback(data.realms);
        },
        error: function(xhr, status, err) {
            console.error(this.url, status, err.toString());
        }
    });
};

ServerResponseManager.prototype.getPvpLeaderboard = function (bracket, callback) {
    $.ajax({
        url: 'https://us.api.battle.net/wow/leaderboard/' + bracket + '?locale=en_US&apikey=mc4e8hbgbjhjvfuhzcs9w2gfknhdzzt7',
        dataType: 'json',
        success: function (data) {
            callback(data);
        },
        error: function(xhr, status, err) {
            console.error(this.url, status, err.toString());
        }
    });
};

module.exports = new ServerResponseManager();
