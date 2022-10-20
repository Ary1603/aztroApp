if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const AZTRO_API_KEY = process.env.AZTRO_API_KEY
const express = require('express')
const cors = require('cors')
const axios = require('axios')
const port = 8000

const app = express()

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json({
    type: "*/*"
}))

app.use(cors())


app.post('/aztro', (req, res) => {
    console.log(req.body.sign)
    let sign = req.body.sign
    const options = {
        method: 'POST',
        url: 'https://sameer-kumar-aztro-v1.p.rapidapi.com/',
        params: {
            sign: sign,
            day: 'today'
        },
        headers: {
            'X-RapidAPI-Key': AZTRO_API_KEY,
            'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
        //With this i pass de info tu my script
        res.json(response.data)
    }).catch(function (error) {
        console.error(error);
    });
    //res.send("soy post")
})

app.listen(port, () => console.log(('running on port ' + port)))