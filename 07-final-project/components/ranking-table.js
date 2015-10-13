var React = require('react');

var RankingTable = React.createClass({

    render: function () {
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

                </tbody>
            </table>
        );
    }

   /* renderTbody: function () {

    }*/
});

module.exports = RankingTable;
