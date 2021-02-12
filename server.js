const express = require('express')
const cors = require('cors')
const { connect } = require('./src/db')
require('dotenv').config()

const app = express()
connect()

app.use(cors())
app.use(express.json())

app.listen(process.env.PORT, () => {
  console.log('SERVER is ready')
})
