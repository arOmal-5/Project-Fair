
const jwt = require('jsonwebtoken');
const jwtMiddleware = (req,res,next) => {
    console.log("INside the router middleware");
    next()

    // token verification
    // 1. Get the token -from the Headers
    const token = req.headers['authorization'].slice(7)
    console.log(token);

    // 2. Verify the token
   try {
    const tokenVerification = jwt.verify(token,"superkey2023")
    console.log(tokenVerification)
    req.payload = tokenVerification.userId
    next()
    
   } catch (error) {
    res.status(401).json("Authentication failed... please login again")
   }


}

module.exports = jwtMiddleware