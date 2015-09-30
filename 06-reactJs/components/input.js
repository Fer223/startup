var React = require('react');
var _ = require('lodash');

var Input = React.createClass({
    
    propTypes: {
            defaultValue: React.PropTypes.string,
            onChange: React.PropTypes.func,
            value: React.PropTypes.string,
            type: React.PropTypes.string
    },

    getInitialState: function () {
        return {value=''}
    },

    render: function () {
        return (
            <input {...this.getProps} />
        );
    },

    getProps: function () {
        return {
            type="text",
            value= this.props.value,
            onChange= this.handleChange()
        };
    },
 
    handleChange: function(event) {
       this.setState({value: event.target.value});
    }
});

module.exports = Input;