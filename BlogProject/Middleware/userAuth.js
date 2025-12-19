
const isAuth=(req,res,next)=>{
    if (!req.cookies.data) {
        return res.redirect("/user/register");
    }
    next();
}

module.exports=isAuth