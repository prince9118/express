const express= require('express');
const app=express();


app.get('/',(req,res)=>{
res.send("Welcome to the home page!");
});
app.get('/health-checkup',(req,res)=>{
    res.send("your kidney is healthy");

});
// global catches

app.use(function(err,req,res,next ){
    res.json("something is not going right in the website");
});
app.listen(3000,()=>{
    console.log('Server is running on http://localhost:3000');
});


 
