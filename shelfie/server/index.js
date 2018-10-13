const express = require('express'); 
const bodyParser = require('body-parser'); 
const controller = require('./controller'); 
const massive = require('massive');
require('dotenv').config(); 

const app = express(); 
app.use(bodyParser.json()); 

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance); 
}).catch(error => console.log('error connecting', error)); 

app.post('/api/inventory', controller.create);
app.get('/api/inventory', controller.getAll);
app.get('/api/inventory/:id', controller.getOne);
app.put('/api/inventory/:id', controller.update);
app.delete('/api/inventory/:id', controller.delete);

const port = process.env.PORT || 4000; 
app.listen(port, () => {
    console.log(`Hey I'm listening on ${port} 🐙`); 
}); 