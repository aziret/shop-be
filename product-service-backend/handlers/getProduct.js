const { DynamoDBClient, GetItemCommand } = require("@aws-sdk/client-dynamodb");
const { unmarshall } = require("@aws-sdk/util-dynamodb");

const client = new DynamoDBClient({ region: "eu-west-1" });

exports.getProduct = async (event) => {
  const productId = event.pathParameters?.productId;

  if (!productId) {
    return {
      statusCode: 400,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: "Product ID is required" }),
    };
  }

  const productResult = await client.send(new GetItemCommand({
    TableName: "RS_products",
    Key: { id: { S: productId } }
  }));

  if (!productResult.Item) {
    return {
      statusCode: 404,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: "Product not found" }),
    };
  }

  const product = unmarshall(productResult.Item);

  const stockResult = await client.send(new GetItemCommand({
    TableName: "RS_stocks",
    Key: { "product_id": { S: productId } }
  }));

  const stock = stockResult.Item ? unmarshall(stockResult.Item).count : 0; // Default stock to 0 if not found

  product.stock = stock;

  return {
    statusCode: 200,
    headers: { "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify(product),
  };
};
