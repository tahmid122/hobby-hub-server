require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");

//middleware
app.use(cors());
app.use(express.json());

//mongodb part start
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jgi4qif.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const groupsCollection = client.db("groupsDB").collection("groups");
    //get request - get all groups
    app.get("/groups", async (req, res) => {
      const result = await groupsCollection.find().toArray();
      res.send(result);
    });
    //get request - get a specific group details by Id
    app.get("/groups/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await groupsCollection.findOne(query);
      res.send(result);
    });
    //get request - get a specific user created groups details by email
    app.get("/user-groups/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email: email };
      const result = await groupsCollection.find(query).toArray();
      res.send(result);
    });
    //post request - create a new group
    app.post("/groups", async (req, res) => {
      const group = req.body;
      const result = await groupsCollection.insertOne(group);
      res.send(result);
    });
    //put request - update an existing group by Id
    app.put("/groups/:id", async (req, res) => {
      const id = req.params.id;
      const groupDetails = req.body;
      const filter = { _id: new ObjectId(id) };
      const updateGroupDetails = { $set: groupDetails };
      const result = await groupsCollection.updateOne(
        filter,
        updateGroupDetails
      );
      res.send(result);
    });
    //delete request - delete an existing group with Id
    app.delete("/groups/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await groupsCollection.deleteOne(query);
      res.send(result);
    });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);

//mongodb part end

//default
app.get("/", (req, res) => {
  res.send("Server is running..");
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
