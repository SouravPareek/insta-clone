const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");

const authRouter = require("./routes/auth.routes");
const postRouter = require("./routes/post.routes");
const userRouter = require("./routes/user.routes");

const app = express();

app.use(cors({
    credentials: true,
    origin: true
}));

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);
app.use("/api/user", userRouter);



// Path to dist
const distPath = path.join(__dirname, "../dist");

// Serve static files
app.use(express.static(distPath));

// Handle React routes
app.get(/.*/, (req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
});


module.exports = app;