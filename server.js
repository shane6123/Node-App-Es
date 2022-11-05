const express = require("express")
const app = express()
const PORT= 5500
app.get("/",(req,res)=>{
    res.send("<h1>hello from server side</h1>")
})
app.listen(PORT,()=>{
    console.log(`server is run on port ${PORT}`);
})