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
		var lines = this.state.lines.map(function(line) {
			return <Line data={line} />;
		});

		return (

			<div className="react-rte-lines">
				{lines}
			</div>
		)
	}
});

module.exports = Lines;