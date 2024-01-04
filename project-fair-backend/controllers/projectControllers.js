const projects = require('../Models/projectScehma')

// add project

exports.addProject = async (req,res) => {
    console.log("Inside the add project");
    const userId = req.payload
    console.log(userId);
    // get image name
    const projectImage = req.file.filename
   
    // get add project details
    const {title,language,github,linkedin,overview} = req.body
    console.log(title,language,github,linkedin,overview,projectImage);
    
    
}