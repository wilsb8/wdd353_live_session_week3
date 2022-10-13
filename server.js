const http = require("http");
require("dotenv").config();

http.createServer().listen(process.env.port, ()=> {
    console.log(`I am fully operational and all circuits are listening on ${process.env.port}`);
});
