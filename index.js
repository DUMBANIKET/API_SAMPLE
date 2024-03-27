const express = require('express');
const bcyrpt = require('bcrypt');
const app = express();
app.use(express.json())
const port = 3000;

//  routes
app.get('/', (req, res) => {
    res.json({"message":"Sometimes it good to learn new things"});
});

app.get("/hashme",(req,res)=>{
    const hashstring="I am hashed";
    const hash=bcyrpt.hashSync(hashstring,10);
    res.json({hash:hash});
})

// Starting the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});