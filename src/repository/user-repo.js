const {User}=require("../models/index")

class UserRepository{
    
    async create(data){
        try {
            const result=await User.create(data)
            return result;
        } catch (error) {
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
}

module.exports=UserRepository;