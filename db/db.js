const mongoose = require('mongoose')

mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

//above is needed below is just kinda for you.

mongoose.connection.once('open', _ => {
  console.log('Database connected:')
})

mongoose.connection.on('error', err => {
  console.error('connection error:', err)
})



