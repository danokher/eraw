// Express 
const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors')

// middleware will be the connection to the frontend
// Middleware para la conexión al frontend
app.use(cors({
  origin: 'https://eraw-front2.vercel.app',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

// Middleware adicional para agregar encabezados CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://eraw-front2.vercel.app');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});
app.use(express.json());

app.get('/', (req, res) => {
  res.send('eRaw animal shop')
})

// mongoDB config


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://admin:admin@eraw.9afov3o.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // create a collection of documents
    // create a db call ProductsInventory and inside that db we will define a collection named toys
    const toysAn = client.db("ProductsInventory").collection("toys");
    // lets do more collections in that same DB
    const foodAn = client.db("ProductsInventory").collection("food");
    const accAn = client.db("ProductsInventory").collection("accessories");

    // insert a toy to the db: post     method
    app.post("/upload-toy", async(req, res) => {
      const data = req.body;
      const result = await toysAn.insertOne(data);
      res.send(result);
    })

     //get all the toys from the database
    app.get("/all-toys", async(req, res) => {
      const toys = await toysAn.find();
      const result = await toys.toArray();
      res.send(result);
    })                                      

    // update a book data by id metodo        Patch 
    app.patch("/toy/:id", async(req, res) => {
      const id = req.params.id;
      const updateToyData = req.body;
      const filter = {_id: new ObjectId(id)};
      const options = { upsert: true };

      const updateDoc = {
        $set: {
          ...updateToyData
        }
      }

      // update
      const result = await toysAn.updateOne(filter, updateDoc, options );
      res.send(result);
    })

    // delete a toy data
    app.delete("/toy/:id", async(req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const result = await toysAn.deleteOne(filter);
      res.send(result);
    })

    // to get single product data
    app.get("/toys/:id", async(req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id)};
      const result = await toysAn.findOne(filter);
      res.send(result);
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close(); // commented while
  }
}
run().catch(console.dir);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
