const products = require("./mockData.js");

exports.getProduct = async (event) => {
  const productId = event.pathParameters?.productId;

  if (!productId) {
    return {
      statusCode: 400,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: "Product ID is required" }),
    };
  }

  const product = products.find((prod) => prod.id == productId);

  if (!product) {
    return {
      statusCode: 404,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: "Product not found" }),
    };
  }

  return {
    statusCode: 200,
    headers: { "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify(product),
  };
};
