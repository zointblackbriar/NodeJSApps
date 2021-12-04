const express = require('express'); 
const config = require('./server/configure.js'); 

let app = express(); 
app.set('port', process.env.PORT || 3300); 
app.set('views', `${__dirname}/views`); // After that, we set the location of our views (HTML templates) to __dirname + '/views or, using another Node constant

app = config(app); //Activating the configure module

app.get('/', function(req, res) {
    res.send('Hello World'); 
}); 

app.listen(app.get('port'), function() {
    console.log('Server up: http://localhost:' + app.get('port')); 
})


