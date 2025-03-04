const express = require('express'); 
const nedb = require("nedb-promises"); 

const app = express(); 
const db = nedb.create('myfile.jsonl'); 

app.use(express.static('public')); 

app.get('/insert', async (req, res) => {
    try {
        const doc = JSON.parse(req.query.doc);
        const insertedDoc = await db.insert(doc);
        res.send("INSERTED:\n" + JSON.stringify(insertedDoc, null, 2));
    } catch (err) {
        res.send("Could not execute: " + err.message);
    }
});

app.get('/search', async (req, res) => {
    try {
        const query = JSON.parse(req.query.find);
        const docs = await db.find(query);
        const result = docs.map(doc => JSON.stringify(doc, null, 2)).join('\n');
        res.send(result || "No matching records found.");
    } catch (err) {  
        res.send("Could not execute: " + err.message);
    }
});

app.all('*', (req, res) => {
    res.status(404).send('Invalid URL.');
});

app.listen(3000, () => console.log(" http://localhost:3000"));
