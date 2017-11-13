const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;

var app = express();


hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));


//middleware
app.use((req, res, next)=>{
    var now = new Date().toString();


    console.log(`${now}: ${req.method} ${req.path}`);
    next();
});

hbs.registerHelper('year',()=>{
    return new Date().getFullYear();
});

app.get("/", (request, response) => {

    //response.send("Hello, this ir ROOT!");
    response.render('home.hbs',{
        title:"Start",
        body:"Hello"
    });
});

app.get("/about", (request, response) => {

    //response.send("Hello, this ir ROOT!");
    // response.send({
    //     name:"edds",
    //     surname: "marh",
    //     city: "Riga",
    // });
    response.render('about.hbs',{
        title: "About page it is!",
        body: "Loooooong body",
    });
});

app.listen(port);
