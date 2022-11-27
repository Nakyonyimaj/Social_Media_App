const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const passport = require('passport');
const userRouter = require('./routes/userRoutes');
const googleRouter = require('./routes/googleauth');


//load config
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose
.connect(process.env.MONGODB_URI)
.then(console.log('connected to mongodb'))
.catch((err)=>{
    console.log(err.message);
})



app.use("/api/users", userRouter);
app.use("/api/google", googleRouter);




const port = process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`connect to server at http://localhost:${port}`);
});
