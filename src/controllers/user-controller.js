const {UserService} = require("../services/index")

const userService = new UserService();

const create = async (req, res) => {
    try {
        const data = {
            email: req.body.email,
            password: req.body.password
        }

        const response = await userService.create(data);
        return res.status(201).json({data: response, message: "SuccessFully created", err: {}})
    } catch (error) {
        console.log("Something went wrong at controller");
        return res.status(500).json({data: {}, message: "FIx your err", err: error})
    }
}


const destroy = async (req, res) => {
    try {
        const response = await userService.delete(data);
        return res.status(201).json({data: response, message: "deleted created", err: {}})
    } catch (error) {
        console.log("Something went wrong at controller");
        return res.status(500).json({data: {}, message: "Fix your err", err: error})
    }
}

const signIn=async(req,res)=>{
    try {
        const response=await userService.signIn(req.body);
        return res.status(201).json({data: response, message: "SuccessFully Signed in", err: {}})

    } catch (error) {
        console.log("Something went wrong at controller");
        return res.status(500).json({data: {}, message: "Fix your err", err: error})
    }
}

module.exports = {
    create,
    destroy,
    signIn
}
