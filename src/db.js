const mongoose = require('mongoose')

function connect() {
  mongoose.connect('mongodb://localhost:27017/hero-control', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  mongoose.connection.once('open', () => {
    console.log('DATABASE is ready')
  })

  mongoose.connection.on('error', () => {
    console.log('There is something wrong with the DATABASE')
  })

  return mongoose.connection
}

module.exports = { connect }
