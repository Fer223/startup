/*
var React = require('react');

var RankingTable = React.createClass({

    render: function () {
        console.log(this.props.data[0]);
        return (
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Ranking</th>
                        <th>Realm</th>
                        <th>Season Wins</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderTbody()}
                </tbody>
            </table>
        );
    },

    renderTbody: function () {
        var rowsContent = this.props.data || [];
        console.log(rowsContent);
        var content = rowsContent.map(this.renderTRow);

        return <tr>{content}</tr>
    },
    //header data.name, data.ranking, data.realm, data.seasonWins
    renderTRow: function (data, index) {
        var name = this.props.data[index].name || '';
        var headers = ['name', 'ranking', 'realm', 'seasonWins'];
        var content = headers.map(this.renderTableCell.bind(this,data));

        return <td key={index}>{content}</td>

    },

    renderTableCell: function (data,header,index) {
        return <td>data[header]
    }

});

module.exports = RankingTable;
*/
