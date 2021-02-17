const mongoose = require("mongoose");
const express = require("express")

const PORT = process.env.PORT || 3001;

const app = express()

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Parcs", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});



app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});

