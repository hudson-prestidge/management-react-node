const express = require('express')
const path = require('path')

const app = express()
const PORT = 3000

app.use(express.static('client'))

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/../client/index.html')))

app.listen(PORT, () => console.log(`Server is running and listening on port ${PORT}.`))
