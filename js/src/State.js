var EventMap = require('./keys/EventMap');

var STATE = {
	activePartial: {}
}

var SetState = {

	startDrag: function() {

	},
	higlight: function() {

	},
	endDrag: function() {

	},

	setTextFocus: function(obj) {
		STATE.activePartial = obj;
	},

	handleKeyDown: function(e) {
		handleKEyEvent(e);
	},

	handleKeyPress: function(e) {
		handleKeyEvent(e);
	},

	handleKeyUp: function(e) {
		handleKeyEvent(e);
	}
}


function handleKeyEvent(e) {
	var triggered = false,
			typeEvent = EventMap[e.type];

		typeEvent.events.each(function(event) {
			if (e.key == event.key) {
				event.process(e);
				triggered = true;
			}
		});
		
		if (!triggered) {
			typeEvent && typeEvent.defaultEvent && typeEvent.defaultEvent(e);
		}
}


module.exports = SetState;