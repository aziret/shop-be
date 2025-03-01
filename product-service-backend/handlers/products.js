const { DynamoDBClient, ScanCommand } = require("@aws-sdk/client-dynamodb");
const { unmarshall } = require("@aws-sdk/util-dynamodb");

const client = new DynamoDBClient({ region: "eu-west-1" });

exports.getProducts = async (event) => {
  const scanResults = await client.send(new ScanCommand({
    TableName: "RS_products"
  }));
  const items = scanResults.Items.map(item => unmarshall(item));

  return {
    statusCode: 200,
    headers: { "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify(items)
  };
};
