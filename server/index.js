const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();
const controller = require('./controller');

const app = express();

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(dbInstance=>{
    app.set('db', dbInstance)
}).catch(err=>console.log(err))

app.post('api/product', controller.create);
app.get('api/product', controller.getALL);
app.get('./api/product/:id', controller.getOne);
app.put('./api/product/:id', controller.update);
app.delete('./api/product/:id', controller.delete);

const port = process.env.PORT || 5050;
app.listen(port,()=>{console.log(`Server listening on ${port}`);});