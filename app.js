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

// MOCK ARRAY OF EVENTS FOR TESTING
var events = [
  { title: "I am your first event", desc: "A great event that is super fun to look at and good", imgUrl: "https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA4OC85MTEvb3JpZ2luYWwvZ29sZGVuLXJldHJpZXZlci1wdXBweS5qcGVn" },
  { title: "I am your second event", desc: "A great event that is super fun to look at and good", imgUrl: "https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA4OC85MTEvb3JpZ2luYWwvZ29sZGVuLXJldHJpZXZlci1wdXBweS5qcGVn" },
  { title: "I am your third event", desc: "A great event that is super fun to look at and good", imgUrl: "https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA4OC85MTEvb3JpZ2luYWwvZ29sZGVuLXJldHJpZXZlci1wdXBweS5qcGVn" }
]

// Routes

// INDEX ROUTE - SHOW ALL EVENTS
app.get('/', (req, res) => {
    res.render('events-index', { events: events });
})


// PORT
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('App listening on port 3000!')
})

