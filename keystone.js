
var keystone = require('keystone');
var handlebars = require('express-handlebars');

keystone.init({
// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
	'name': 'Portfolio',
	'brand': 'Portfolio',

	'sass': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'hbs',

	'custom engine': handlebars.create({
		layoutsDir: 'templates/views/layouts',
		partialsDir: 'templates/views/partials',
		defaultLayout: 'default',
		helpers: new require('./templates/views/helpers')(),
		extname: '.hbs',
	}).engine,

	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
	'cookie secret': 'd7c7586c077bcdd04a212a049ff811eca1f09a25e60acc017484080b785f860a6ef9a753b0aea521a50477cd3bfcc6712780143f997f1f4937d7dbcda6eb82ce',

});

keystone.import('models');

keystone.set('locals', {
	_: require('underscore'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
});

keystone.set('routes', require('./routes'));
keystone.set('nav', {
	'users': 'users',
});

keystone.start();
