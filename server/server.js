const express = require("express");
const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");
const router = express.Router();
const path = require("path");
dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("MongoDB connected!");
  }
);

// client side when using localhost:8800/images/, don't make any request, directly go to the images folder
// const path = require("path");
app.use("/images", express.static(path.join(__dirname, "public/images")));

//  middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// upload images
// const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage });
// console.log(upload);
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    console.log(req);
    return res.status(200).json("File uploaded successfully!");
  } catch (err) {
    console.log(err);
  }
});
// console.log("storage.fileName" + storage.filename);
app.use("/api/user", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/post", require("./routes/posts"));
app.use("/api/conversation", require("./routes/conversations"));
app.use("/api/message", require("./routes/messages"));

app.listen(8800, () => {
  console.log("Backend server is running!");
});
