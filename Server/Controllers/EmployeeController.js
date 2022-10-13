const { Op } = require('sequelize');
const {Employee} = require('../models');

class Controller{

    static async getEmployee(req,res,next){
        try {
            let {searchByName}= req.query
            let finds= {order:[["id","ASC"]]}

            if(searchByName){
                finds.where=  {name:
               { [Op.iLike]: `%${searchByName}%`}
                }
            }

            let data= await Employee.findAll(finds)
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async addEmployee(req,res,next){
        try {
         const {name,email,mobile,birthDate,address}= req.body
           let data= await Employee.create({name,email,mobile,birthDate,address})
            res.status(201).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async getEmployeeDetail(req,res,next){
        try {
            const {id}= req.params
            let data= await Employee.findOne({where:{id:id}})

            if(!data){
                throw {name: "Employee not found"}
            }
                res.status(200).json(data)
            
        } catch (error) {
            next(error)
        }
    }

    static async editEmployee(req,res,next){
        try {
            const {id}= req.params
            const {name,email,mobile,birthDate,address}= req.body
            let data= await Employee.update({name,email,mobile,birthDate,address},{where: {id:id}})
            if(!data){
                throw ({name: "Employee not found"})
            }
                res.status(200).json({
                    message: `Employee with id ${id} edited`
                })
        } catch (error) {
            next(error)
        }
    }

    static async deleteEmployee(req,res,next){
        try {
            const {id}=req.params
           let data= await Employee.destroy({where:{id:id}})
           if(!data){
            throw ({name: "Employee not found"})
        }
            res.status(200).json({
                message: `Employee ${id} deleted`
            })
        } catch (error) {
            next(error)
        }
    }

}

module.exports= Controller