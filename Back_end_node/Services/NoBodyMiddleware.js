
const NoBodyMiddleware=async (req,res,next)=>{
const {ImageURL,_id,label}=req.body
if(_id!=undefined||(ImageURL!=undefined && label!=undefined)){

next();

}else{
    res.status(400).json({Error:'Please Provide body data'});
}

};


module.exports={NoBodyMiddleware};