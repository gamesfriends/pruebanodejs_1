const express = require('express');
const app = express();
const path = require('path');

// Settings.
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);  // Esto es para que los archivos .ejs de views puedan ser .html
app.set('view engine', 'ejs');

// Middlewares.

// Routes.
app.use(require('./routes/index'));


// Static files.
app.use(express.static(path.join(__dirname, 'public')));

// Listening the server.
app.listen(app.get('port'), () => {
    console.log('Server works on port', app.get('port'));
})