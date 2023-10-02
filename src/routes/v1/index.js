const express = require("express");
const userController=require("../../controllers/user-controller")

//middlewares
const {AuthValidators}=require("../../middlewares/index")

const router=express.Router();

router.post("/signup",AuthValidators.validateReq,userController.create)
router.post("/users",userController.destroy)
router.post("/signin",AuthValidators.validateReq,userController.signIn)
router.get("/isAuthenticated",userController.isAuthenticated)

module.exports=router
