const { DynamoDBClient, TransactWriteItemsCommand } = require("@aws-sdk/client-dynamodb");
const { marshall } = require("@aws-sdk/util-dynamodb");
const { v4: uuidv4 } = require("uuid");

const client = new DynamoDBClient({ region: "eu-west-1" });

exports.createProduct = async (event) => {
  try {
    const body = JSON.parse(event.body);
		const productId = uuidv4();

    const title = body.title;
    const description = body.description;
    const price = body.price;
    const stock = body.stock;

		console.log("title", !title, title)
		if (!title || title.trim() === "") {
      return createErrorResponse(400, "Title must not be empty.");
    }
		console.log("price", typeof price, price)
    if (typeof price !== "number" || price <= 0) {
      return createErrorResponse(400, "Price must be a positive number.");
    }
		console.log("stock", typeof stock, stock)
    if (typeof stock !== "number" || stock < 0) {
      return createErrorResponse(400, "Stock must be a non-negative number.");
    }

    const params = {
      TransactItems: [
        {
          Put: {
            TableName: "RS_products",
            Item: marshall({
              id: productId,
              title: title,
              description: description || "",
              price: price
            }),
            ConditionExpression: "attribute_not_exists(id)" // Prevent overwriting existing product
          }
        },
        {
          Put: {
            TableName: "RS_stocks",
            Item: marshall({
              product_id: productId,
              count: stock
            }),
            ConditionExpression: "attribute_not_exists(product_id)" // Prevent overwriting existing stock entry
          }
        }
      ]
    };

    await client.send(new TransactWriteItemsCommand(params));

    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ message: "Product created successfully" })
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: error.message })
    };
  }
};

const createErrorResponse = (statusCode, message) => ({
  statusCode,
  headers: { "Access-Control-Allow-Origin": "*" },
  body: JSON.stringify({ error: message })
});
