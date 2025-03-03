const { DynamoDBClient, ScanCommand, BatchGetItemCommand } = require("@aws-sdk/client-dynamodb");
const { unmarshall } = require("@aws-sdk/util-dynamodb");

const client = new DynamoDBClient({ region: "eu-west-1" });

exports.getProducts = async (event) => {
  const scanResults = await client.send(new ScanCommand({
    TableName: "RS_products"
  }));
  const products = scanResults.Items.map(item => unmarshall(item));

  const productIds = products.map(product => ({ product_id: { S: product.id } }));

  const stockResults = await client.send(new BatchGetItemCommand({
    RequestItems: {
      "RS_stocks": { Keys: productIds }
    }
  }));

  const stockItems = stockResults.Responses?.RS_stocks || [];
  const stockMap = Object.fromEntries(stockItems.map(item => {
    const stockData = unmarshall(item);
    return [stockData.product_id, stockData.count];
  }));

  const finalProducts = products.map(product => ({
    ...product,
    stock: stockMap[product.id] || 0 // Default to 0 if no stock data found
  }));

  return {
    statusCode: 200,
    headers: { "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify(finalProducts)
  };
};
