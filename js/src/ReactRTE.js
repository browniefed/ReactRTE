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
			activeLine: 0,
			selection: [],
			lines: [
				[{
					text: ''
				}]
			]
		}
	},
	handleKeyDown: function(e) {
		//This should dispatch an event instead but same concept
		// State.handleKeyDown(e);
	},
	handleKeyPress: function(e) {
		if (this.refs.lines.getDOMNode().children[this.state.activeLine].children[0].offsetWidth >= this.getRTEWidth()) {
			this.state.lines.push([
			{
				text: ''
			}]);
			this.state.activeLine += 1;
			State.setTextFocus(this.state.lines[this.state.activeLine][0]);

		}

		State.handleKeyPress(e);
		//CHECK WIDTH OF ACTIVE LINE(S)?
		//Add new line and set the focus 

		this.setState({lines: this.state.lines, activeLine: this.state.activeLine});
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
		State.setTextFocus(this.state.lines[0][0]);
	},
	componentWillMount: function() {
		
	},
	getRTEWidth: function() {
		return this.refs.rteBody.getDOMNode().offsetWidth;
	},
	render: function() {
		return (
			<div ref="rteBody" className="react-rte" tabIndex="0" style={{minHeight: 20}} onMouseDown={this.handleMouseDown} onKeyDown={this.handleKeyDown} onKeyPress={this.handleKeyPress} onKeyUp={this.handleKeyUp} onCut={this.handleCut} onPaste={this.handlePaste} onCopy={this.handleCopy}>
				<Cursor position={this.state.cursorPosition} />
				<Lines lines={this.state.lines} ref="lines" />
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