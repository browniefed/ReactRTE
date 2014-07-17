var Default = {
	event: 'keypress',
	isDefault: true,
	process: function(e, activePartial) {
		var ch = String.fromCharCode(e.which);
		activePartial.text += ch;
	}
}

module.exports = Default;