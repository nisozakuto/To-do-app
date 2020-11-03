const express = require('express')
const logger = require('morgan')

const app = express()
app.use(logger('dev'))

const PORT = process.env.PORT || 3000
app.listen(PORT, () =>{
    console.log(`Listening on PORT: ${PORT}`)
})

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.use('*',(req,res)=>{
    res.status(404).send('Not Found')
})

app.use((err, req, res, next)=>{
    res.status(err.status || 5000).json({
        message: err.message,
        stack: err.stack,
    })
})