'use strict';

var JS = JS || {};

JS.init = function (config) {
	/*
	* Handles Slide Out transitions and
	* showing/hiding
	*/
	this.slideOutComponent = this.slideOut({});
	this.slideOutComponent.init(); //Initializes slide out logic
}
