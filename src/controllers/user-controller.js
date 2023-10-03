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
        return res.status(error.statusCode).json({data: {},name:error.name, explanantion: error.explanation, message: error.message})
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

const signIn = async (req, res) => {
    try {
        const response = await userService.signIn(req.body);
        return res.status(201).json({data: response, message: "SuccessFully Signed in", err: {}})

    } catch (error) {
        console.log("Something went wrong at controller");
        return res.status(500).json({data: {}, message: "Fix your err", err: error})
    }
}
const isAuthenticated = async (req, res) => {
    try {
        const token = req.headers['x-access-token'];
        const response=await userService.isAuthenticated(token);
        return res.status(201).json({data: response, message: "token is valid", err: {}})
    } catch (error) {
        console.log("Something went wrong at controller");
        return res.status(500).json({data: {}, message: "Fix your err", err: error})
    }
}

const isAdmin=async (req,res)=>{
    try {
        const response=await userService.isAdmin(req.body.id);
        return res.status(201).json({data: response, message: "Fetched the details", err: {}})
    } catch (error) {
        console.log("Something went wrong at controller");
        return res.status(500).json({data: {}, message: "Fix your err", err: error})
    }
}

module.exports = {
    create,
    destroy,
    signIn,
    isAuthenticated,
    isAdmin
}
