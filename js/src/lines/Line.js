/** @jsx React.DOM */

var React = require('react'),
	StyleBuilder = require('./../styles/StyleBuilder'),
	LinePartial = require('./LinePartial');

var Line = React.createClass({
	getDefaultProps: function() {
		return {
			data: {}
		};
	},
	handleMouseDown: function(index, e) {
		this.props.data[index]
		//DISPATCH ACTIVE OBJECT
	},
	render: function() {
		var segments = this.props.data.map(function(segment, i) {
			return <LinePartial text={segment.text} style={StyleBuilder(segment.styles)} handleMouseDown={this.handleMouseDown.bind(this, i)} />
		}.bind(this));

		return (
			<div className="react-rte-line">
				{segments}
			</div>
		)
	}
})

module.exports = Line;