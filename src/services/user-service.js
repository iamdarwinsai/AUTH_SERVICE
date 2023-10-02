const {UserRepository}=require("../repository/index")

const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
const {JWT_KEY}=require("../config/server-config")

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

    async signIn(data){
      try {
       
        const user=await this.userRepo.getUserByEmail(data.email);

        if(!user) throw {error:"INVALID EMAIL DO SIGN IN"}

        const verifyPassword=this.checkPassword(data.password,user.password);

        if(!verifyPassword){
            console.log("Password doesn't match");
            throw {error: 'Incorrect password'};
        }

        const JWTtoken= this.createToken({email:user.email,id:user.id});
        return JWTtoken;

      } catch (error) {
        console.log("Servvice layer");
        throw {error}
      }
    }

    async isAuthenticated(token){
        try {
            const isVerified= this.verifyToken(token);
            if(!isVerified){
                throw {error:"INVALID TOKEN"}
            }

            const user=await this.userRepo.getUserByEmail(isVerified.email);
            if(!user){
                throw {error:"USER NOT AVAILABLE"}
            }

            return user.id;
        } catch (error) {
            console.log("Servvice layer");
            throw {error}
        }
    }


    createToken(user){
        try {
            const token=JWT.sign(user,JWT_KEY);
            return token
          } catch (error) {
            console.log("Something went wrong while creating TOKEN");
            throw {error}
          }
    }

    verifyToken(token){
        try {
            const response=JWT.verify(token,JWT_KEY);
            return response;
        } catch (error) {
            console.log("Something went wrong while verifying TOKEN");
            throw {error}
        }
    }

    checkPassword(plainPassword,saltPassword){
        try {
              return bcrypt.compareSync(plainPassword,saltPassword)
        } catch (error) {
            console.log("Something went wrong while validating password");
            throw {error}
        }
    }


}

module.exports=UserService
