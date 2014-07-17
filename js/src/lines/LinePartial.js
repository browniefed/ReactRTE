/**
 * @jsx React.DOM
 */

var React = require('react');

var LinePartial = React.createClass({
	componentDidMount: function() {
		//PROCESS INITIAL LINE PARTIAL WIDTH
	},
	componentDidUpdate: function(prevProps, prevState) {
		
	},
	render: function() {
		return (
			<span style={this.props.style} onMouseDown={this.props.handleMouseDown}>
				{this.props.text}
			</span>
		);
	}

});

module.exports = LinePartial;