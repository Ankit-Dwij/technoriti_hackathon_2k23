const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const eventRoute = require("./routes/events");

const cors = require("cors");

app.use(cors());
dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB connected...");
  })
  .catch((err) => console.log(err));

app.use("/api/auth", authRoute);
app.use("/api/event", eventRoute);
// app.use("/api/users", userRoute);
// app.use("/api/movies", movieRoute);
// app.use("/api/lists", listRoute);

app.listen(3300, () => {
  console.log("backend server is running...");
});
