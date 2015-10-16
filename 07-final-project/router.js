module.exports = (function () {
    var React = require('react');
    var Router = require('react-router');
    var Route = Router.Route;
    var DefaultRoute = Router.DefaultRoute;

    var Home = require('./views/home-view');
    var MainView = require('./views/main-view');
    var CharacterInfoView = require('./views/character-info-view');
    var RealmsStateView = require('./views/realms-state-view');
    var RankingsView = require('./views/rankings-view');
    var GuildInfoList = require('./views/guild-info-view');

    var ModuleRouter = function () {
        this.routes = (
            <Route handler={MainView}>
                <DefaultRoute name="home" handler={Home} />
                <Route name="character" handler={CharacterInfoView} />
                <Route name="realm" handler={RealmsStateView} />
                <Route name="rankings" handler={RankingsView} />
                <Route name="guild" handler={GuildInfoList} />
            </Route>
        );
    };

    ModuleRouter.prototype.run = function (mountElement) {
        Router.run(this.routes, function (Root) {
            React.render(<Root />, mountElement);
        });
    };

    return new ModuleRouter();
})();
