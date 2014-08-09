var fluxxor = require('fluxxor'),
	constants = require('./../constants/constants'),
	immutable = require('immutable');

var LineStore = fluxxor.createStore({

	initialize: function() {

		this.bindActions(
			constants.type.ADD_LETTER, this.addLetter,
			constants.type.NEW_LINE, this.newLine,
			constants.type.DELETE_LETTER, this.deleteLetter
		);

		this.lines = immutable.fromJS(
			[
				{
					text: ''
				}
			]
		);

	},

	addLetter: function(payload) {
		this.lines = this.lines.updateIn([0, 'text'], function(v) {
			return v + payload;
		});
		this.emit('change');
	},

	deleteLetter: function(payload) {

	},

	newLine: function(payload) {

	},

	getState: function() {
		return this.lines.toJSON();
	}
});

module.exports = LineStore;