let errorHandler= async(error,req,res,next)=>{
    console.log(error)
    if(error.name== "SequelizeValidationError"){
        res.status(400).json({
            message: error.errors[0].message
        })
    }else if(error.name== "Employee not found"){
        res.status(404).json({
            message: "Employee not found"
        })
    }else{
        res.status(500).json({
            message: "Internal server error"
        })
    }
}

module.exports= errorHandler