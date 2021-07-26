// const path = require('path');
// const fs = require('fs').promises;

const {sequelize} = require('./db');
const {Item, Warehouse} = require('./models/index');

const seedWarehouse = [
  {
    name: 'Crystal Warehouse',
    location: 'Fort Worth',
  },
  {
    name: 'Stanley Warehouse',
    location: 'Grand Prairie',
  },
  {
    name: 'Ashley Warehouse',
    location: 'Dallas',
  },
]

const seedItem = [
        {name : "Furby", 
        image : "/img/furby.jpg", 
        description: "Furby is an American electronic robotic toy that was originally released in 1998 by Tiger Electronics.", 
        price: 34.99, 
        category: "Electronic Toys",
        // Warehouse_id : 1,
    },

    {name : "Bop iT", 
        image: "/img/bopit.jpg",
        description: "The game was released worldwide in June 2016. The game has 3 main actions – Bop It, Twist It and Pull It and 10 actions that use a motion sensor.", 
        price: 19.99, 
        category: "Electronic Toys",
        // Warehouse_id : 2,
    },
    {name : "Socker Boppers", 
        image: "/img/SoccerBoppers.jpg", 
        description: "Socker Boppers (formerly Sock'em Boppers) is a children's toy popularized in the late 1990s by Big Time Toys.", 
        price: 29.99, 
        category: "Physical Activity",
        // Warehouse_id : 3,
    },
    {name : "Tamagotchi", 
        image: "/img/tomogatchi.jpg", 
        description: "The Tamagotchi is a handheld digital pet that was created in Japan by Akihiro Yokoi. It was released on May 1, 1997 in the rest of the world", 
        price: 24.99, 
        category: "Electronic Toys",
        // Warehouse_id : 1,
    },
    {name : "Sky Dancer", 
        image: "/img/skydancer.jpg", 
        description: "Sky Dancers is the name of a line of toys and an animated show spin-off that were popular in the mid-1990s.", 
        price: 12.99, 
        category: "Dolls",
        // Warehouse_id : 2,
    },
    {name : "PooChi", 
        image: "/img/poochi.jpg", 
        description: "Poo-Chi (or Poochi, Poochie), one of the first generations of robopet toys, is a robot dog manufactured by Sega Toys, and distributed by Tiger Toys. Poo-Chi was released in 2000 and discontinued in 2002.", 
        price: 32.99, 
        category: "Electronic Toys",
        // Warehouse_id : 3,
    },
    {name : "Gak Splat", 
        image: "/img/GakSplat.jpg", 
        description: "Nickelodeon/Mattel's most popular compound[citation needed]; the product was inspired by the Nickelodeon show Double Dare. It made a fart noise when squeezed into its clear, star-shaped container.", 
        price: 9.99, 
        category: "Creative Toys",
        // Warehouse_id : 1,
    },
    {name : "Etch A Sketch", 
        image: "/img/etchasketch.jpg", 
        description: "Etch A Sketch is a mechanical drawing toy invented by André Cassagnes of France. The Etch A Sketch was introduced near the peak of the Baby Boom on 12 July 1960 for $2.99.", 
        price: 14.99, 
        category: "Creative Toys",
        // Warehouse_id : 2,

    }
]

//Q: Try to decifer the following function.
//Q: Why are we using async and await?
const seed = async () => {
  try {
    await sequelize.sync({force: true})
    await Warehouse.bulkCreate(seedWarehouse, {validate: true})
    await Item.bulkCreate(seedItem, {validate: true})
    console.log('Seeding success!')
    sequelize.close()
  } catch (error) {
    console.log('SOMETHING WENT WRONG WITH THE SEEDING: ', error)
  }
}

//Q: What is seed() returning?
seed()
    .then(() => {
      console.log('Seeding success!')
    })
    .catch(err => {
      console.error('Oh noes! Something went wrong!')
      console.error(err)
    })

// module.exports = seed;