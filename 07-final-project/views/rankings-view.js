//WORK IN PROGRES
var React = require('react');

var serverResponseManager = require('../stores/server-response-manager');

var RankingTable = require('../components/ranking-table');
var Input = require('../components/input');

var RankingsView = React.createClass({

    getInitialState: function () {
        return {
            challangeModeData: '',
            pvpLeaderboardData: ''
        }
    },

    render: function () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <select className="form-control" onChange={this.handleSelectChange}>
                            <option value="2v2">2 vs 2</option>
                            <option value="3v3">3 vs 3</option>
                            <option value="5v5">5 vs 5</option>
                            <option value="rgb">rgb</option>
                        </select>
                        <RankingTable {...this.getRankingTableProps()}/>
                    </div>
                    <div className="col-md-6">
                        <Input className="form-control" />
                    </div>
                </div>
            </div>
        );
    },

    getRankingTableProps: function () {
        return {
            data: this.state.pvpLeaderboardData
        }
    },

    handleSelectChange: function (event) {
        event.preventDefault();

        serverResponseManager.getPvpLeaderboard(event.target.value, this.updatePvpLeaderboardData);
    },

    updatePvpLeaderboardData: function (data) {
        this.setState({pvpLeaderboardData: data.rows});
        //console.log(this.state.pvpLeaderboardData)
    }
});

module.exports = RankingsView;
