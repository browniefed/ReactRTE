var Fluxxor = require('fluxxor'),
	TypeActions = require('./actions/TypeActions'),
	DragActions = require('./actions/DragActions'),
	StyleActions = require('./actions/StyleActions');

var LineStore = require('./stores/LineStore');


function createFlux() {

	var actions = {
		type: TypeActions,
		drag: DragActions,
		style: StyleActions
	}

	var stores = {
	  LineStore: new LineStore()
	};
	
	return new Fluxxor.Flux(stores, actions);
}

module.exports = createFlux;