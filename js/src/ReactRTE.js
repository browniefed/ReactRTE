/** @jsx React.DOM */
var React = require('react'),
	Cursor = require('./Cursor'),
	Lines = require('./lines/Lines'),
	State = require('./State');
 
 var KEYS = {
 	ENTER: 13,
 	BACKSPACE: 8, 
 	SPACE: 32
 }


var SPACE = ' ';

var ReactRTE = React.createClass({

	getInitialState: function() {
		return {
			cursorPosition: {
				left: 0,
				top: 0
			},
			selection: [],
			lines: [
				[{
					styles:{
						'bold': true
					},
					text: 'hey this is bold'
				},{
					styles: {
						'underline': true,
						'strikethrough': true
					},
					text: 'Test'
				},{
					styles: {
						'color': '#987766',
						'background-color': '#DDD'
					},
					text: 'Test'
				}]
			]
		}
	},
	handleKeyDown: function(e) {

		State.handleKeyDown(e);
	
	},
	handleKeyPress: function(e) {

	},
	handleKeyUp: function(e) {
		e.preventDefault();
	},
	handleMouseDown: function(e) {
	},
	handleCut: function(e) {

	},
	handlePaste: function(e) {

	},
	handleCopy: function(e) {

	},
	componentDidMount: function() {

	},
	componentWillMount: function() {
		
	},
	render: function() {
		return (
			<div ref="rteBody" className="react-rte" tabIndex="0" onMouseDown={this.handleMouseDown} onKeyDown={this.handleKeyDown} onKeyPress={this.handleKeyPress} onKeyUp={this.handleKeyUp} onCut={this.handleCut} onPaste={this.handlePaste} onCopy={this.handleCopy}>
				<Cursor position={this.state.cursorPosition} />
				<Lines lines={this.state.lines} />
			</div>
		);

	}
});

function reactRender(data, el) {
	React.renderComponent(<ReactRTE />, el);
}

if (typeof global.window.define == 'function' && global.window.define.amd) {
  global.window.define('ReactRTE', function () { return reactRender; });

} else {
  global.window.ReactRTE = reactRender;
}

module.exports = ReactRTE;