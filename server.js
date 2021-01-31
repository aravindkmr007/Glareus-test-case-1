const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const vendorDB = require("./Models/VendorPost")
const postRouter = require("./routes/post");
const itemRouter = require("./routes/put")
const app = express();
app.use(bodyParser.json())

const connection_URL =
  "mongodb+srv://ProductWebsite:ProductWebsitedb@cluster0.aur1o.mongodb.net/VendoDetials?retryWrites=true&w=majority";
const port = process.env.PORT || 9090;
app.use(cors());

app.use("/posts", postRouter);
app.use("/items",itemRouter)
app.get("/" , async(req,res) => 
{
  try{
  const Vendordb = vendorDB.find()
    res.json(Vendordb)
  }
  catch(err)
  {
    res.json(err)
  }
})

mongoose.connect(
  connection_URL,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("db Connected");
  }
);


app.listen(port, () => console.log("Listening to server"));
