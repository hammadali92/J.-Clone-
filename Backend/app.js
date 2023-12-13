const express = require("express");
const app = express();
const PORT = 4000;
// const PORT = process.env.PORT || 7000;
var cors = require('cors')
require("dotenv").config();
const connect = require('./config');
var bodyParser = require('body-parser')
const userRoute = require("../Backend/routes/user.route")
const PRoute = require("./routes/Products.route")
const Unstitched_Route = require("../Backend/routes/Unstitched.route")
connect();
// create application/json parser
app.use(bodyParser.json())
app.use(cors())

// create application/x-www-form-urlencoded parser
app.use( bodyParser.urlencoded({ extended: false }))
app.use("/api/user", userRoute)
app.use("/api/Products",PRoute)
app.use("/api/unstitched",Unstitched_Route)
// app.use("/api/products", userRoute)
// app.get("/hello", (req, res) => {
//     res.json({ message: "Hi", status: "200", success: true });
// });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


