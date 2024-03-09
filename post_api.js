const express = require('express' )
const app = express()
const port=3000

app.post('/a',(req, res)=>{
    res.send('got a post request ')
})


app.listen(port,()=>{
    console.log(`example app listening on port ${port}`)
})