/**
 * This file is where you define your application routes and controllers.
 *
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 *
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 *
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 *
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 *
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

var babelify = require('babelify');
var browserify = require('browserify-middleware');
var keystone = require('keystone');

// Common Middleware
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Setup Route Bindings
exports = module.exports = function (app) {

    app.get('/api/v1/users', function (req ,res) {
        keystone.list('User').model
            .find()
            .exec()
            .then(function (data) {
                res.send({
                    code: 200,
                    data: data
                })
            }, function(err){
                res.send({
                    code: 500,
                    error: err
                })
            });
    });

	// Views
	app.use(function (req, res) {
		res.render('index');
	});
};
