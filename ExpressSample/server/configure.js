var path = require('path'), 
        routes = require('./routes'), 
        exphbs = require('express-handlebars'),
        express = require('express'),
        bodyParser = require('body-parser'), //This helps facilitating the packaging of any form fields that are submitted via a HTML form from a browser.
        cookieParser = require('cookie-parser'),
        morgan = require('morgan'), //it is for logging
        methodOverride = require('method-override'), 
        errorHandler = require('errorhandler'); //this handles any errors that occur throughout the entire middleware process

    module.exports = function(app) {
        app.use(morgan('dev')); 
        app.use(bodyParser.urlencoded({'extended': true})); 
        app.use(bodyParser.json()); 
        //app engine
        app.engine('handlebars', exphbs.create({
            defaultLayout: 'main', 
            layoutDir: `${app.get('views')}/layouts`,
            partialsDir: [`${app.get('views')}/partials`]
        }).engine);
        app.set('view engine', 'handlebars'); 

        app.use(methodOverride()); 
        app.use(cookieParser('some-secre-value')); 
        routes(app); //you can respond to requests such as GET, POST, PUT, and UPDATE. Since you are using the Express router as one of the last middleware. 
        app.use('/public/', express.static(path.join(__dirname, '../public'))); //It is used to render static content files to the browser from a predefined static resource directory.
        if('development' == app.get('env')) {
            app.use(errorHandler()); 
        }
        return app; 
    }
