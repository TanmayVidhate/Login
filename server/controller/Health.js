const getHealth = (req,res)=>{
    return res.status(200).json({
        success:true,
        message:"Server Is Running"
    })
}

export{
    getHealth
}