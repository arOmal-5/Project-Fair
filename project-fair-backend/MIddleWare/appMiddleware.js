const appMiddleware = (req,res,next) => {
    console.log("Inside the application-level middleware");
    next()
}

module.exports = appMiddleware