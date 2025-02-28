const products = require("./mockData.js");

exports.getProducts = async (event) => {
  return {
    statusCode: 200,
    headers: { "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify(products)
  };
};
