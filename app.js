const express = require('express');
const app = express();

const firebase = require('./firebase/firebase');

const PORT = 3000;

app.use(express.static('public'))
app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine

app.get('/', (req, res) => {
    res.render('pages/index', { activePage: 'index' });
});

app.get('/login', (req, res) => {
    res.render('pages/login', { activePage: 'login' });
});

app.get('/search', (req, res) => {
    res.render('pages/search', {
        activePage: 'search'
    });
});

app.get('/ngo', (req, res) => {
    res.render('pages/ngo', {
        activePage: false
    });
});

app.get('/register', (req, res) => {
    res.render('pages/edituser', {
        activePage: 'edituser'
    });
});

app.get('/contact', (req, res) => {
    res.render('pages/contact', {
        activePage: 'contact'
    });
});

app.get('/aboutus', function (req, res) {
    res.render('pages/aboutUs', { activePage: 'aboutUs' });
});

app.get("/editevent", function (req, res) {
    res.render("pages/editEvent", { activePage: false });
});

app.get("/eventlist", function (req, res) {
    res.render("pages/eventList", { activePage: false });
});

app.listen(3000, () => {
    console.log(`Server is Listening @ ${PORT}`);
});

//Create
// firebase.database.ref().set({
//     name: "Ashish",
//     age: 10,
//     attributes: {
//         height: 12,
//         width: 13
//     }
// })

//remove
// firebase.database.ref('attributes/width').remove();

// update
// firebase.database.ref().update({
//     name: "Ashish Verma",
//     age: 26,
//     'attributes/height': 33 // to remove field with update or set - value is null
// })


//read
// firebase.database.ref()
// .once('value')
// .then((snapshot) => console.log(snapshot.val()))
// .catch((e) => console.log('error', e));