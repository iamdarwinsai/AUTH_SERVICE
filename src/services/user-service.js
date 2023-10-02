const {UserRepository}=require("../repository/index")

class UserService{

    constructor(){
        this.userRepo=new UserRepository();
    }

    async create(data){
        try {
            const result=await this.userRepo.create(data);
            return result;
        } catch (error) {
            console.log("Servvice layer err");
            throw {error}
        }
    }

    async delete(data){
        try {
            const result=await this.userRepo.delete(data);
            return result;
        } catch (error) {
            console.log("Servvice layer");
            throw {error}
        }
    }
}

module.exports=UserService
