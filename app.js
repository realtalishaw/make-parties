/**
 * APP.JS
 * main file for application
 */

//initialize express
const express = require('express')
const app = express()

//require handlebars templating engine
const exphbs = require('express-handlebars');
const Handlebars = require('handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')

//Using "main" as default layout
app.engine('handlebars', exphbs({ defaultLayout: 'main', handlebars: allowInsecurePrototypeAccess(Handlebars) }));

//use handlebars to render
app.set('view engine', 'handlebars');

// Routes
app.get('/', (req, res) => {
    res.render('home', { msg: "Handlebars are cool!" });
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('App listening on port 3000!')
})

