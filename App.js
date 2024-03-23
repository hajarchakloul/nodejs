const express = require('express' )
const app = express()
const port=3000

app.get('/',(req, res)=>{
    let a = "AZE";
    res.send(`hello world! ${a}` );
})
<<<<<<< HEAD


=======
>>>>>>> 9b44d5f0e5d5aea5c9804c87538bbc6d3c15c4a8
app.post('/a',(req, res)=>{

    res.send('got a post request ')
})
app.put('/user',(req, res)=>{
    res.send('got a put request at /user')
})
app.delete('/',(req, res)=>{
    res.send('got a delete request at /user')
})
<<<<<<< HEAD


app.listen(port,()=>{
    console.log(`example app listening on port ${port}`)
})
=======
app.listen(port,()=>{
    console.log(`example app listening on port ${port}`)
})
>>>>>>> 9b44d5f0e5d5aea5c9804c87538bbc6d3c15c4a8
