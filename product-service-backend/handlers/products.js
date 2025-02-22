const products = require("./mockData.js");

exports.getProducts = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(products)
  };
};
