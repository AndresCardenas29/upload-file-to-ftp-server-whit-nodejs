const FTPClient = require("ftp");
let ftp_client = new FTPClient();
let ftpConfig = {
	host: "localhost",
	port: 21,
	user: "mario",
	password: "1234",
};

const ListFiles = (req, res) => {
	console.log("ListFiles");
	//create a connection to ftp server
	ftp_client.connect(ftpConfig);

	ftp_client.on("ready", function () {
		ftp_client.list(function (err, list) {
			if (err) throw err;
			let arr = [];
			list.map((item) => {
				arr.push({
					name: item.name,
					size: item.size,
          date: item.date,
          type: item.type,
				});
			});
			console.log(arr);
			res.send(arr);
			ftp_client.end();
		});
	});
};

const UploadFile = (req, res) => {
  console.log("UploadFile");
  //create a connection to ftp server
  ftp_client.connect(ftpConfig);

  ftp_client.on("ready", function () {
    ftp_client.put(req.file.path, req.file.originalname, function (err) {
      if (err) throw err;
      res.send("File uploaded");
      ftp_client.end();
    });
  });
}
module.exports = { ListFiles, UploadFile };
