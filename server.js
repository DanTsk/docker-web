const express = require('express');
const mongoose = require('mongoose');
const uuid = require('uuid');

const PORT = 8080;
const app = express();
const instanceId = uuid();


mongoose.connect('mongodb://mongo:27017/app')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const Request = require('./model/request');

app.set('view engine', 'ejs');
app.get('/', async (req, res) => {
    try {
        const requests = await Request.find();

        //* Writing current request to db */
        await Request.create({ instanceId, ip: getIp(req) });

        return res.render('index', { requests });
    } catch (err) {
        return res.send(err);
    }
});

app.listen(PORT, () => console.log(`Running on ${PORT}`));


function getIp(req) {
    return req.connection.remoteAddress ||
           req.socket.remoteAddress ||
           req.connection.socket.remoteAddress;
}