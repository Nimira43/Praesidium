const mongoose = require('mongoose')
const dbconnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useUnifiedTopology: true
    })
    console.log('MongoDBConnected...')
  } catch (error) {
    console.log(error)
  }
}

module.exports = dbconnection