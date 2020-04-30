const express = require('express');
const axios = require('axios');
const app = express();


app.listen(3000, () => {
    console.log('Servidor Express funcionando en el puerto 3000!');
});

app.get('/:ultVal', async(req, res) => {

    let ultVal = req.params.ultVal;
    const url = 'http://www.indecon.online/values/' + ultVal

    let response = [];

    try {
        response = await axios.get(url)
        res.status(200).json(response.data)
    } catch (ex) {
        res.status(404).json({
            mensaje: "Error al traer los datos !" + ex
        })
    }
});

app.get('/:key/:date', async(req, res) => {

    let key = req.params.key;
    let date = req.params.date;

    const url = 'http://www.indecon.online/date/' + key + '/' + date;

    let response = [];

    try {

        response = await axios.get(url)
        res.status(200).json(response.data)
    } catch (ex) {
        res.status(404).json({
            mensaje: "Error al traer los datos !" + ex
        })
    }
});

app.get('/:ultInc', async(req, res) => {

    let ultInc = req.params.ultInc;
    const url = 'http://www.indecon.online/' + ultInc

    let response = [];

    try {
        response = await axios.get(url)
        res.status(200).json(response.data)
    } catch (ex) {
        res.status(404).json({
            mensaje: "Error al traer los datos !" + ex
        })
    }
});