const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");

var cors = require("cors");
const router = require("./routes/routes");
const pool = require("./database/connect");

app.use(express.urlencoded({ extended: false }));

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET", "DELETE", "PUT"],
    credentials: true,
  })
);
app.use(morgan("tiny"));

app.use("/api", router);

const port = 3000;

app.listen(process.env.PORT || port, () => {
  console.log(`Server listening on http://localhost:${port}/api`);
});
