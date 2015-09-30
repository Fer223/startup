var React = require('react');
var _ = require('lodash');

var Input = require('input')

var FormGroup = React.createClass({

    getInitialState: function () {
        inputText:'';
    }

    render: function () {
        <form>
            <Input {...this.getInputProps()} />
        </form>
    }

    getInputProps: function () {
        return {
            value: this.state.inputText,
            onChange: this.handleInputChange()
        }
    }

    handleInputChange: function (event) {
        this.setState({event.target.value})
    }
});

module.exports = FormGroup;