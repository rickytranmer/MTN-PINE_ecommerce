//Connect
const Sequelize = require('sequelize');

// //connection to heroku and local comp for three people.
const localHost = require("../env.js");
let sequelize = new Sequelize(process.env.DATABASE_URL || localHost.aaron || localHost.josh || localHost.ricky );

//Export models and Sequelize for seed and dbSetup
module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;

let Item = sequelize.import("./item");
let User = sequelize.import("./user");
let ShippingAddress = sequelize.import("./shippingAddress");
let Order = sequelize.import("./order");


module.exports.models = {
	Item: Item,
	User: User,
	ShippingAddress: ShippingAddress,
	Order: Order
};