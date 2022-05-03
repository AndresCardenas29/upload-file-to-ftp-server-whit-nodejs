// create a new express server
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const multer = require("multer");
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "./uploads");
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	},
});
const upload = multer({ storage });

const { UploadFile, ListFiles } = require("./controller/ftp.controller");

// midleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", ListFiles);
app.post("/upload", upload.single("file"), UploadFile);

app.post("/file", upload.single("file"), (req, res) => {
	res.send(req.file);
});

try {
	app.listen(3000, () => {
		console.log(`server started on port ${port}`);
	});
} catch (error) {
	console.log(error);
}
