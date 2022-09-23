const express = require('express');
const app = express();
const port = 8080;

// let date_ob = new Date();
// let date = ("0" + date_ob.getDate()).slice(-2);
// let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
// let year = date_ob.getFullYear();
// let hours = date_ob.getHours();
// let minutes = date_ob.getMinutes();
// let seconds = date_ob.getSeconds();

// prints date & time in YYYY-MM-DD HH:MM:SS format
// console.log(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);
// prints time in HH:MM format
// let time = hours + ":" + minutes

function style_wrapper (text) {
    return "<center style=\"font-size: 80px\">" + "<h1>" + text + "</h1>"  + "</center>"
}

app.get('/', (req, res) => res.send(style_wrapper("Hello DevOps!")));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
