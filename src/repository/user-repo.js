const {User,Role}=require("../models/index")
const ValidationError = require('../utils/validation-error');
class UserRepository{
    
    async create(data){
        try {
            const result=await User.create(data)
            return result;
        } catch (error) {
            if(error.name="SequelizeUniqueConstraintError"){
                throw new ValidationError(error);
            }
            console.log("Something went wrong on REPO LAYER");
            throw {error}
        }
    }

    async delete(data){
        try {
            await User.destroy({
                where:{
                    id:data
                }
            })
            return true;
        } catch (error) {
            console.log("Something went wrong on REPO LAYER");
            throw {error}
        }
    }

    async getUserByEmail(userEmail){
        try {
            const user=await User.findOne({
                where:{
                    email:userEmail
                }
            })
            return user
        } catch (error) {
            console.log("Something went wrong on REPO LAYER");
            throw {error}
        }
    }

    async isAdmin(userId){
        try {
            const user=await User.findByPk(userId);
            const adminRole=await Role.findOne({
                where:{
                    name:'ADMIN'
                }
            })

            return user.hasRole(adminRole);
        } catch (error) {
            console.log("Something went wrong on REPO LAYER");
            throw {error}
        }
    }

    
}

module.exports=UserRepository;