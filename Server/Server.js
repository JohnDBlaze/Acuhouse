const express = require("express");
const fileUpload = require("express-fileupload");
const path = require("path");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 9000;
app.use(cors());
app.use(
  fileUpload()
);
// app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));
app.use(express.json({limit: "30mb",extended:true}));
app.use(express.urlencoded({limit: "30mb",extended:true}));
app.use(require("./routes/routes"));
const dbo = require("./db/db");

app.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "Registration.js"));
});
 
app.listen(port, () => {
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});

