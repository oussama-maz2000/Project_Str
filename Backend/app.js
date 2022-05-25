const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.status(200).send("welcome in BackEnd store 😎");
});
app.listen(3001,(req,res)=>{
    console.log('server run on 3001 😎');
})