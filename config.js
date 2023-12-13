const dotenv = require('dotenv')

dotenv.config()
module.exports = {
    port: process.env.PORT,
    apiKey: process.env.API_KEY,
    mongouri: process.env.MONGO_URI,
    tokenSecret: process.env.TOKEN_SECRET
}