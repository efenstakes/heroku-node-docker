const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

app.get('/', (req, res)=> {
    res.json({ 'page': [ 'index', 'home' ] })
})

app.get('/about', (req, res)=> {
    res.json({ 'page': 'about' })
})

app.get('/services', (req, res)=> {
    res.json({ 'page': [ 'services', 'help' ] })
})


app.listen(PORT, ()=> {
    console.log(`listening on port ${PORT}`)
})