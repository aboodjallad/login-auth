const express = require("express");
const app = express();


dotenv.config({ path: './config.env' });

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE
});

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
