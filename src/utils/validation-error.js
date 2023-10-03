const AppErrors=require("./error-handler")
const { StatusCodes } = require('http-status-codes');

class ValidationErrors extends AppErrors{

    constructor(error){
        let errorName=error.name;
        let explanation=[];
        error.errors.forEach((err)=>{
            message.push(err.message)
        })

        super(errorName,'Unique violation',explanation,StatusCodes.BAD_REQUEST)
    }
}

module.exports=ValidationErrors;