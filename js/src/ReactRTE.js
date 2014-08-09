/** @jsx React.DOM */

var React = require('react'),
	Flux = require('./Flux'),
	Fluxxor = require('fluxxor'),
	FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

var ReactRTE = React.createClass({
	mixins: [FluxMixin, StoreWatchMixin('LineStore')],

	getStateFromFlux: function() {
		return {
			lines: this.getFlux().store('LineStore').getState()
		};
	},
	handleKeyDown: function(e) {

	},
	handleKeyPress: function(e) {
		if (e.key == String.fromCharCode(e.which)) {
			this.getFlux().actions.type.typeLetter(e.key)
		}
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
	getRTEWidth: function() {
		return this.refs.rteBody.getDOMNode().offsetWidth;
	},
	render: function() {
		return (
			<div ref="rteBody" className="react-rte" tabIndex="0" style={{minHeight: 20}} onMouseDown={this.handleMouseDown} onKeyDown={this.handleKeyDown} onKeyPress={this.handleKeyPress} onKeyUp={this.handleKeyUp} onCut={this.handleCut} onPaste={this.handlePaste} onCopy={this.handleCopy}>
				{this.state.lines[0].text}
			</div>
		);

	}
});

function reactRender(data, el) {
	React.renderComponent(<ReactRTE flux={Flux()} />, el);
}

if (typeof global.window.define == 'function' && global.window.define.amd) {
  global.window.define('ReactRTE', function () { return reactRender; });

} else {
  global.window.ReactRTE = reactRender;
}

module.exports = ReactRTE;