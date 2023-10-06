const express = require("express");
const fs = require("fs");
const { connectMongoDb } = require("./connection"); // Correct import
const { logReqRes } = require("./middlewares");
const userRouter = require("./routes/user");
const app = express();
const PORT = 8000;

// Connection
connectMongoDb("mongodb://127.0.0.1:27017/youtube-app-1").then(() => console.log("MongoDB connected"));

// Schema

// Middleware - Plugin
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"));

// Route
app.use("/api/users", userRouter);

app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`));
