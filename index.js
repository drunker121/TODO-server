const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
// const cookieParser = require('cookie-parser');

// const cors = require('cors');
// app.use(
//     cors({
//         origin: ['https://architectinsider.in', 'http://localhost:3000'],
//         credentials: true,
//         withCredentials: true
//     })
// );

const dotenv = require('dotenv');
require("dotenv").config();
dotenv.config({ path: "./config.env"});

 //local host k liye

const mongodb = require('./mongoDB.Js')
 mongodb();

// const mongodb = require('./mongoDB'); 
// mongodb();

app.use(express.json());
// app.use(cookieParser());
app.use(require('./router/auth'));

app.listen(PORT, () => {
    console.log(`Server is live at port ${PORT}`);
});

// 72SD3ZzXV4Fv7G3d