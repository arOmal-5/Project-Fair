const multer = require('multer');

// to store the multer data
const storage = multer.diskStorage({
    destination:(req,file,callback) => {
        callback(null,'./uploads')

    },
    // create a file name
    filename: (req,file,callback) => {
        filename = `image-${Date.now()}-${file.originalname}`
        callback(null,filename)
    }
})

// filter

const fileFilter = (req,file,callback) => {
    if(fileFilter.mimetype === 'image/jpg' || fileFilter.mimetype === 'image/png' || fileFilter.mimetype === 'image/jpeg')
    {
        callback(null,true)
    }
    else
    {
        callback(null,false)
        return callback(new Error ("Invalid file type... must be jpg ,jpeg, png"))
    }
}

const multerConfig = multer({
    storage,fileFilter
})

module.exports = multerConfig