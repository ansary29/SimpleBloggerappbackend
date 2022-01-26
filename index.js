const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PostRoutes = require("./routes/PostRoutes.js");
const PORT = 5000;

const app = express();
app.use(cors());

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//declaring routers
app.use("/posts", PostRoutes);

// use alternate localhost and the port Heroku assigns to $PORT
const host = '0.0.0.0';
const port = process.env.PORT || 5000;

//connecting to mongoDb
const connectionUrl =
  "mongodb+srv://ansary29:moham29@myproject.12hak.mongodb.net/mernblogapp";
mongoose
  .connect(connectionUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, '0.0.0.0', () => {
      console.log("Server running on port " + PORT);
    });
  })
  .catch((e) => {
    console.log("error", e.message);
  });
