const express=require('express');
const app=express();

const port=3000;

app.get('/',(req,res)=>{
    res.send('<h1>Auto Scaling Demo App</h1><h4>Message :Success</h4> <p>This is just a test</p>');
})
app.listen(port,()=>{
    console.log(`Demo app us up and listening to port ${port}`);
})