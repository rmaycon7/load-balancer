const express = require('express')
const app = express()


app.use('*', (req, res, next) => {
    res.status(200).json({
        msg: "Funciona!! Docker"
    })
})

const port = process.env.PORT || 8080
app.listen(port, (error) => {
    console.log(`Runnign in ${port}`)
})