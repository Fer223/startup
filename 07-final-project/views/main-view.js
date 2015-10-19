var React = require('react');

var Router =require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var CharacterInfoView = require('./character-info-view');
var RealmsStateView = require('./realms-state-view');
var Input = require('../components/input.js');

var MainView = React.createClass({

    render: function () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <ul className="nav navbar-nav">
                            <li><Link to="home">Home</Link></li>
                            <li><Link to="character">Character</Link></li>
                            <li><Link to="realm">Realms</Link></li>
                            <li><Link to="guild">Guild</Link></li>
                        </ul>
                    </div>
                </div>
                <RouteHandler />
            </div>
        );
    }
});

module.exports = MainView;
