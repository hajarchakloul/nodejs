const express = require('express' )
const app = express()
const port=3000

app.get('/',(req, res)=>{
    let a = "AZE";
    res.send(`hello world! ${a}` );
})


app.post('/a',(req, res)=>{

    res.send('got a post request ')
})
app.put('/user',(req, res)=>{
    res.send('got a put request at /user')
})
app.delete('/',(req, res)=>{
    res.send('got a delete request at /user')
})


app.listen(port,()=>{
    console.log(`example app listening on port ${port}`)
})