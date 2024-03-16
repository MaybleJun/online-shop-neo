const uuid = require('uuid')
const path = require('path');
const {Device} = require('../models/models')
const ApiError = require('../error/ApiError')

class DeviceController {
    async create(req,res, next){
        try {
            const {title, price, brandId, typeId, rate, discount} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const device = await Device.create({title, price, brandId, typeId, rate, discount, img:fileName})

            return res.json(device)
        } catch(e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req,res){
        
    }

    async getOne(req,res){
        
    }

}

module.exports = new DeviceController()