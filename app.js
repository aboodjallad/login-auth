const express = require("express");
const app = express();

db.connect((error) => {
  if (error) {
    console.log(error)
  } else {
    console.log("my SQL connected ...")
  }
})

app.listen(8088, () => {
    console.log("server started on port 8088")
})
