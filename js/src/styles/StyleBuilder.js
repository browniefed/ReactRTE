/**
 * @jsx React.DOM
 */


 var STYLES = {
 	'bold': {style:'font-weight', value: 'bold'},
 	'italic': {style:'font-style', value: 'italic'},
 	'underline': {style: 'text-decoration', value: ' underline ', merge: true},
 	'strikethrough': {style: 'text-decoration', value: ' line-through ', merge: true},
 	'color': {style: 'color', value: function(value) {
 		return value;
 	}},
 	'background-color': {style: 'background-color', value: function(value) {
 		return value;
 	}}
 };


 var StyleBuilder = function(styles) {
 	styles = styles || {};
 	var builtStyle = {},
 		style,
 		value,
 		merge,
 		currentStyle;

 	for (style in styles) {
		 //DO WE ALREADY HAVE  A STYLE APPLIED
		 if ( builtStyle[STYLES[style].style] ) {
		 	if (STYLES[style].merge) {
		 		builtStyle[STYLES[style].style] += STYLES[style].value;
		 	} else {
		 		builtStyle[STYLES[style].style] = STYLES[style].value;
		 	}
		 } else {
		 	if (typeof STYLES[style].value === 'function') {
		 		builtStyle[STYLES[style].style] = STYLES[style].value(styles[style]);
		 	} else {
		 		builtStyle[STYLES[style].style] = STYLES[style].value;
		 	}
		 }
 	}

 	return builtStyle

 };


 module.exports = StyleBuilder;