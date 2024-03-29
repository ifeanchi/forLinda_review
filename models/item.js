const {DataTypes, Model} = require('sequelize')
const {sequelize} = require('../db')


class Item extends Model {}

Item.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.DECIMAL(5,2),
    category: DataTypes.STRING
}, {
    sequelize,
    timestamps: false,
});
 

module.exports = {Item};