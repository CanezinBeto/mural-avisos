const express = require('express')
const app = express()
const PORT = 3000
const path = require('path')
const apiRoute = require('./routes/api')

app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/api', apiRoute)

app.listen(PORT, () => console.log('Server running on Port: ', PORT))
