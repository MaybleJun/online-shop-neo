const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user',{
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Basket = sequelize.define('basket',{
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    
})

const BasketDevice = sequelize.define('basket_device',{
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    
})

const Device = sequelize.define('device',{
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    img: {type:DataTypes.STRING, allowNull: false},
    title: {type:DataTypes.STRING, unique: true, allowNull: false},
    price: {type:DataTypes.INTEGER, allowNull: false},    
    rate: {type:DataTypes.INTEGER, allowNull: false},
    discount: {type:DataTypes.INTEGER, allowNull: true},
    
})

const Type = sequelize.define('type',{
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type:DataTypes.STRING, unique: true, allowNull: false},
})


const Rate = sequelize.define('Rate',{
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type:DataTypes.STRING, allowNull: false},
})

const DeviceInfo = sequelize.define('device_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})


User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rate)
Rate.belongsTo(User)

Basket.hasMany(BasketDevice)
BasketDevice.belongsTo(Basket)

Type.hasMany(Device)
Device.belongsTo(Type)

Device.hasMany(Rate)
Rate.belongsTo(Device)

Device.hasMany(BasketDevice)
BasketDevice.belongsTo(Device)

Device.hasMany(DeviceInfo, {as: 'info'});
DeviceInfo.belongsTo(Device)



module.exports = {
    User,
    Basket,
    BasketDevice,
    Device,
    Type,
    Rate,
    TypeBrand,
    DeviceInfo
}


