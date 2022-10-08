const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: path.join(__dirname, "./config.env") });
require("./mongoose/mongoose");
const cors = require("cors");

const userRouter = require("./routers/userRoutes");
const ticketRouter = require("./routers/ticketRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(ticketRouter);

app.listen(process.env.PORT, () => {
  console.log(`Your app is runnig on port ${process.env.PORT}`);
});

module.exports = app;
