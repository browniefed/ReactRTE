var fluxxor = require('fluxxor'),
	constants = require('./../constants/constants');

var TypeActions = {
	typeLetter: function(payload) {
		this.dispatch(constants.type.ADD_LETTER, payload);
	},
	newLine: function(payload) {
		this.dispatch(constants.type.NEW_LINE, payload);
	},
	deleteLetter: function(payload) {
		this.dispatch(constants.type.DELETE_LETTER, payload);
	}
}


module.exports = TypeActions;