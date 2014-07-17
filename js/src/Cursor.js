/**
 * @jsx React.DOM
 */

var React = require('react');

var Cursor = React.createClass({

	render: function() {
		return (
			<div className="cursor" style={this.props.position}>

			</div>
		);
	}

});

module.exports = Cursor;