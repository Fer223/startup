var React = require('react');

var serverResponseManager = require('../stores/server-response-manager');

var RealmsStateView = React.createClass({

    getInitialState: function () {
        return {
            realmsCurrentStatus: []
        }
    },

    render: function () {
        return (
            <div>
                <h2>Realm's current status</h2>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Battlegroup</th>
                            <th>Population</th>
                            <th>Time Zone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTBody()}
                    </tbody>
                </table>
            </div>
        );
    },

    renderTBody: function () {
        var tbody = [];
        this.state.realmsCurrentStatus.forEach(function (entry, index) {
            tbody.push(
                <tr key={index}>
                    <td>{entry.name}</td>
                    <td>{entry.type}</td>
                    <td>{entry.battlegroup}</td>
                    <td>{entry.population}</td>
                    <td>{entry.timezone}</td>
                </tr>
            );
        });
        return tbody;
    },

    componentWillMount: function () {
        serverResponseManager.getRealmsCurrentStatus(this.updateRealmsCurrentStatus)
    },

    updateRealmsCurrentStatus: function (data) {
        this.setState({realmsCurrentStatus: data});
        console.log(this.state.realmsCurrentStatus);
    }
});

module.exports = RealmsStateView;
