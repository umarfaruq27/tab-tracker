console.log("Hello World");
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

/*we want to start enabling some of those packages so that we can easily
hit our back in and have logs printed out*/

/*body-parser berfungsi untuk :  allowing you to process JSON data very easily*/


//build up an Express app. Thats going to build us an express server which
const app = express();
app.use(morgan('combine'))
app.use(bodyParser.json())/* to allow our express app to easily pars any JSON Requests that are sent*/
app.use(cors())/* use cores to allow any host or client to access this.
You need cors if you want a server to be hosted on a different domain and 
you want any clients from around the world to hit your server.
And its kind of a security risk if you have enabled it*/

/* Masih ingat kan metode CRUD. nah disini deklarasi nya agak beda nihh */
/*Ini juga untuk membuat endpoint biar ketahuan alamat nya */

app.get('/status', (req, res) => {
    res.send({
        message: 'Hello World Brother!!!'
    });
});
/* req itu maksudnya request, sedangkan res itu response.
Jadi saat http://localhost:8081/status dijalankan dia akan me-request dan kemudian
akan diresponse dengan mengirimkan data res.send({}) dalam bentuk data JSON */
app.post('/register', (req, res) => {
    res.send({
        message: `Hai ${req.body.email}, your user was registered`
    })
});


app.listen(process.env.PORT || 8081);/* Ini untuk memberi tahu port mana yang akan digunakan saat app ini dijalankan */