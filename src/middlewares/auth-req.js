function validateReq(req,res,next){
    if(!req.body.email || !req.body.password){
        res.status(400).json({
            data:"null",
            message:"Missing parameters",
            err:"error"
        })
    }

    return next()
}

function validateIsAdmin(req,res,next){
    if(!req.body.id){
        res.status(400).json({
            data:"null",
            message:"Missing ID",
            err:"error"
        })
    }
    return next()
}

module.exports={validateReq,validateIsAdmin}