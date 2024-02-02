import express from "express";
const app=express()
app.get('/', (req, res)=>{
    res.send("Code chal rha hai");
});

app.listen(5000);