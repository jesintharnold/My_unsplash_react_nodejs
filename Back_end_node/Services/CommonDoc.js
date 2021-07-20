const commonGet=async (req,res)=>{
    res.status(200).json({data:'Common API get Method is working'});
};

const commonPost=async (req,res)=>{
res.status(200).json({data:'Common API Post Method is working'});
};


module.exports={
    commonGet,
    commonPost
};
