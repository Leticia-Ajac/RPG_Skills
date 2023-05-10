const express = require("express");
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const Router = require("./routes/route")

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', Router)

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});