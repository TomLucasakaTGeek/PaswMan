const express = require('express');
const dotenv = require('dotenv')
const { MongoClient } = require('mongodb');
dotenv.config()

const url = 'mongodb://localhost:27017'
const client = new MongoClient(url);

const dbname = 'passop'
const app = express();
const port = 3000

client.connect()
const db = client.db(dbname)

app.get('/', async (req, res)=> {
    const collection = db.collection('documents')
    const findResult = await collection.find({}).toArray()
    res.json(findResult)
})

app.listen(port, ()=>{
    console.log(`App listening on port: ${port}`)
})
