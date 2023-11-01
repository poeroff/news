const express = require("express");


const app =  express();




const cors = require('cors');
app.use(cors())
app.use(express.json());


const postsrouter = require("./routes/posts");
const connect = require("./util/database")


app.use(postsrouter);

connect()


app.listen(4000);