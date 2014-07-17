/** @jsx React.DOM */

var React = require('react'),
	Line = require('./Line');

var Lines = React.createClass({
	getDefaultProps: function() {
		return {
			lines: []
		};
	},
	getInitialState: function() {
		return { lines: this.props.lines};
	},
	render: function() {
		var lines = this.state.lines.map(function(line, index) {
			return <Line data={line} ref={index}/>;
		});

		return (

			<div className="react-rte-lines">
				{lines}
			</div>
		)
	}
});

module.exports = Lines;