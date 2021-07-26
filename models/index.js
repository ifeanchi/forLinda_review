const {sequelize} = require('../db')
const {Warehouse} = require('./warehouse')
const {Item} = require('./item')

//associations - What are they?
Item.belongsTo(Warehouse) //Q: What will .belongsTo provide Menu?
Warehouse.hasMany(Item)


module.exports = { Warehouse, Item } //exporting models w/ associations