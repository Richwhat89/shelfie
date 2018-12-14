const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();
const {create, getAll, getOne, update, delete_product} = require('./controller');

const app = express();

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(dbInstance=>{
    app.set('db', dbInstance)
}).catch(err=>console.log(err))

app.post('api/product', create);
app.get('api/product', getAll);
app.get('./api/product/:id', getOne);
app.put('./api/product/:id', update);
app.delete('./api/product/:id', delete_product);

const port = process.env.PORT || 5050;
app.listen(port,()=>{console.log(`Server listening on ${port}`);});