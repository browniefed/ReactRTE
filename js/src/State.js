var EventMap = require('./keys/EventMap');

var STATE = {
	activePartial: {}
};

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
		handleKeyEvent(e);
	},

	handleKeyPress: function(e) {
		handleKeyEvent(e, STATE.activePartial);
	},

	handleKeyUp: function(e) {
		handleKeyEvent(e);
	}
}


function handleKeyEvent(e, activePartial) {
	var triggered = false,
		typeEvent = EventMap[e.type];
		if (!typeEvent) {
			return;
		}



		typeEvent.events.forEach(function(event) {
			if (e.key == event.key) {
				event.process(e, activePartial);
				triggered = true;
			}
		});
		
		if (!triggered) {
			typeEvent && typeEvent.defaultEvent && typeEvent.defaultEvent.process(e, activePartial);
		}
}


module.exports = SetState;