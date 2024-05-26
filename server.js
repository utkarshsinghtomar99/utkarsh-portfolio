const express = require("express");
// const cors = require("cors");
const { connectDB } = require("./config/db_config");
require("dotenv").config();
const path = require("path");

const app = express();
const port = process.env.PORT;

// const corsOptions = {
//   origin: "https://utkarsh-portfolio-4ijs.onrender.com/", // frontend URI (ReactJS)
// };
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors(corsOptions));

connectDB();

app.use("/api/portfolio", require("./routes/portfolioRoute.js"));
app.use("/api/portfolio-auth", require("./routes/authRoute.js"));

// Use the client app
app.use(express.static(path.join(__dirname, "/client/dist")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/client/dist/index.html"))
);

app.listen(port, () => {
  try {
    console.log(`here is the listen ${port}`);
  } catch (error) {
    console.log(error);
  }
});
