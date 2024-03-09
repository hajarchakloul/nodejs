const express = require('express' )
const app = express()
const port=3000

app.put('/user',(req, res)=>{
    res.send('got a put request at /user')
})
app.listen(port,()=>{
    console.log(`example app listening on port ${port}`)
})