/*global $:false*/

'use strict';

var JS = JS || {};

JS.slideOut = function () {
	var $body = document.body,
		$webItem = document.getElementsByClassName('web-site'),
		$slideOut = document.getElementsByClassName('slide-out')[0],
		$container = document.getElementsByClassName('slide-out-container')[0],
		$closeButton = document.getElementsByClassName('close-slide-out')[0],
		OPEN = '_slide-out-open',
		isOpen = false;

	var closeSlideOut = function() {
		if (isOpen) {
			$body.classList.remove(OPEN);

			isOpen = false;
		}
	};

	var closeListen = function() {
		$slideOut.addEventListener('click', function(e){
			if (!$container.contains(event.target)) {
				closeSlideOut();
			} else if (e.target == $closeButton){
				closeSlideOut();
			}
		});		
	};

	var activateSlideOut = function() {
		$body.classList.add(OPEN);

		isOpen = true;

		closeListen();
	};

	var websiteActivate = function() {		
		for (var i=0; i < $webItem.length; i++) {

			$webItem[i].addEventListener('click', function() {
				this.focus();

				activateSlideOut();
			});
		}
	};

	var init = function() {
		websiteActivate();
    };

    return {
        init: init
    };
};
