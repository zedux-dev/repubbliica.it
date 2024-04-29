const app = require('./router').app;
const fs = require('fs');
// const http = require('http');
const https = require('https');
const privateKey  = fs.readFileSync('./ssl.key', 'utf8');
const certificate = fs.readFileSync('./ssl.cert', 'utf8');

const credentials = { key: privateKey, cert: certificate };

// const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

// httpServer.listen(8080);
httpsServer.listen(3000);