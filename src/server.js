require('dotenv').config()
const path = require('path')
const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 9091

app.use(cors())
app.use(helmet())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../../client/build')))
process.env.NODE_ENV !== 'test' && app.use(morgan('tiny'))


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'))
})

app.listen(port, () => console.log("Listening server " + port))