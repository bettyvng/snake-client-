const { setupInput } = require("./input");

console.log("Connecting ...");

let connectResult = connect();

setupInput(connectResult);


