const express = require('express');
const path = require('path');
const Handlebars = require('handlebars');
const expressHandlebars = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');

// const {sequelize} = require('./db');
const {Item, Warehouse} = require('./models/index');
const seed = require('./seed.js')

const PORT = 3000;

const app = express();

// // setup our templating engine
// const handlebars = expressHandlebars({
//     handlebars: allowInsecurePrototypeAccess(Handlebars)
// })
// app.engine('handlebars', handlebars);
// app.set('view engine', 'handlebars');

// serve static assets from the public/ folder
app.use(express.static(path.join(__dirname, 'public')))

// seed();

// // GET all items

app.get('/warehouse', async (req, res) => {
	const newWarehouse = await Warehouse.findAll()
    // res.render('items', {items})
    // console.log(newWarehouse)
  res.json({newWarehouse})
})

// //GET one item at a time

// app.get('/item/:id', async (req, res) => {
// 	const oneItem = await Item.findByPk(req.params.id)
// 	res.render('item', {oneItem})
// })

// app.post('/:warehouseId/addItem', async (req, res) =>{
//     const newItem = await Item.create(req.body);
//     const foundItem = await Item.findByPk(newItem.id)
//     if(foundItem){
//         res.status(201).send('New Item Added!')
//     } else { 
//         console.log("New Item not added")
//         res.send("Error: New Item was not added")
//     }
// })


app.listen(PORT, () => {
    // sequelize.sync({force: true});
    console.log(`Your server is running on http://localhost:${PORT}`);
})