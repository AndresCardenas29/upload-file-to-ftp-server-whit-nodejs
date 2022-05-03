const config = {
	port: process.env.PORT || 3000,
	db: {
		host: process.env.DB_HOST || "localhost",
		port: process.env.DB_PORT || 27017,
		name: process.env.DB_NAME || "test",
	},
	jwt: {
		secret: process.env.JWT_SECRET || "secret",
	},
	ftp: {
		host: process.env.FTP_HOST || "localhost",
		user: process.env.FTP_USER || "mario",
		password: process.env.FTP_PASSWORD || "1234",
		port: process.env.FTP_PORT || 21,
	}
};

module.exports = config;
