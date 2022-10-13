const http = require("http");
require("dotenv").config();
const app = require('./app/app');

http.createServer(app).listen(process.env.port, ()=> {
    console.log(`I am fully operational and all circuits are listening on ${process.env.port}`);
});
