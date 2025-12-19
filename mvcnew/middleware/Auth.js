const isAuth=async(req,res)=>{
    const id=req.cookies.data
    if(id){
        next()
    }else{
        res.redirect('/reg')
    }
}
module.exports=isAuth