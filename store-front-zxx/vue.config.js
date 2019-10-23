"use strict";
const DEPLOY_ENV = process.env._DEPLOY_ENV || process.env.DEPLOY_ENV;
const NODE_ENV = process.env.NODE_ENV;

console.log("*******_DEPLOY_ENV********");
console.log(DEPLOY_ENV);
console.log(NODE_ENV);
console.log("**************************");

let devServerProxy = "";
if (NODE_ENV == "development") {
  process.env.VUE_APP_CONFIG = JSON.stringify(
    require("./src/assets/lib/dev.env")
  );
  switch (DEPLOY_ENV) {
    case "dev":
      devServerProxy = "http://127.0.0.1:8080";
      break;
    case "sit":
      devServerProxy = "http://127.0.0.1:8080";
      break;
    default:
      devServerProxy = "http://127.0.0.1:8080";
  }
} else if (NODE_ENV == "production") {
  switch (DEPLOY_ENV) {
    case "sit":
      process.env.VUE_APP_CONFIG = JSON.stringify(
        require("./src/assets/lib/sit.env")
      );
      break;
    case "prod":
      process.env.VUE_APP_CONFIG = JSON.stringify(
        require("./src/assets/lib/prod.env")
      );
      break;
    default:
      process.env.VUE_APP_CONFIG = JSON.stringify(
        require("./src/assets/lib/dev.env")
      );
  }
}

module.exports = {
  devServer: {
    port: 8888,
    proxy: devServerProxy
  }
};
