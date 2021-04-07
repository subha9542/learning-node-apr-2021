const utils = require("util");
const fs = require("fs");
const readfilePromisified = utils.promisify(fs.readFile);


readfilePromisified("./session-3/hello.txt")
    .then(() => {
        console.log("read success");
    })
    .catch((error) => {
        console.error(error);
    })

