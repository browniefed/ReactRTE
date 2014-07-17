var Enter = require('./Enter'),
	Space = require('./Space'),
	Backspace = require('./Backspace'),
	Default = require('./Default');


var EventArrayMap = [
	Enter,
	Space,
	Backspace,
	Default

];

EventMap = {};

EventArrayMap.forEach(function(event) {
	 var processEvent = EventMap[event.event] = EventMap[event.event] || {};
	 processEvent.events = processEvent.events || [];

	if (event.isDefault) {
		processEvent.defaultEvent = event;
	} else {
		processEvent.events.push(event);
	}

});



module.exports = EventMap;