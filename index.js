const http = require("http");
const app = require("./app");
const connectToDB = require("./src/config/db");
const { serverPORT } = require("./src/config/secret");
const server = http.createServer(app);

const main = async () => {
  await connectToDB();
  server.listen(serverPORT, () => {
    console.log(`Express server is running on http://localhost:${serverPORT}`);
  });
};

main();