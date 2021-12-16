const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
const fileuploader = require("express-fileupload");
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");
const { json } = require("express/lib/response");
/**
 * Middle Ware
 */
app.use(cors());
app.use(express.json());
app.use(fileuploader());
// ----------------
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLIENT_URL}?retryWrites=true&w=majority`;

const client = new MongoClient(uri);

(async function () {
  /**
   * connect client
   */
  await client.connect();
  /**
   * db and collection
   */
  const DB = client.db("CodeAxes_task");
  const users = DB.collection("users");
  app.post("/users", async (req, res) => {
    const data = req.body;
    const encodedImage = req.files.image.data.toString("base64");
    const bufferImage = Buffer.from(encodedImage, "base64");
    const userData = { ...data, image: bufferImage };
    const result = await users.insertOne(userData);
    res.json(result);
  });
  app.get("/users", async (req, res) => {
    const result = await users.find().toArray();
    res.json(result);
  });
})();
app.get("/", (req, res) =>
  res.send("<h1 style='text-aligh:center'>CODEAXES TASK</h1>")
);
app.listen(port, () => console.log("Done ............."));
