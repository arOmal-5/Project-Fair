const { default: mongoose } = require("mongoose");
const validator = require("validator");
const projectSchema = new mongoose.Schema({
   
    title:{
        type:String,
        required:true,
    },
    language:{
        type:String,
        required:true,
    },
    github:{
        type:String,
        required:true,
    },
    linkedin:{
        type:String,
        required:true,
    },
    overview:{
        type:String,
        required:true,
    },
    projectImage:{
        type:String,
        required:true,
    },
    userId:{
        type:String,
        required:true,
    }



})

const Projects = new mongoose.model('Projects',projectSchema)

module.exports = Projects;