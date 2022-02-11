const express = require('express')
const productsRouter = require('./routes/products')

const app = express();

const PORT = 8080;

const server = app.listen(PORT, ()=>{console.log(`Listening on port ${PORT}`)})

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/api/products', productsRouter)
// app.use(express.static(path.join(__dirname)))
