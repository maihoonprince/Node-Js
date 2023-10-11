const path = require("path");
const express = require("express");
const multer = require("multer");

const app = express();
const PORT = 8000;

// const upload = multer({ dest: "uploads/"});            // it is also a middleware. which save uploaded data in upload folder.

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        return cb(null, "./uploads");
    },
    filename: function (req, file, cb){
        return cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({storage});

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// middleware..
app.use(express.urlencoded({ extended: false }));

// Route..
app.get("/", (req, res) => {
    return res.render("homepage");
});

app.post("/upload",upload.single("pofileImage"), (req, res) => {
    console.log(res.body);
    console.log(req.file);

    return res.redirect("/");
});

app.listen(PORT, () => console.log(`server started at PORT:8000`));