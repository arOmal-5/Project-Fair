// import express
const express = require('express');


// create router object of express to define routes
const router = new express.Router();

// import functions from userController
const {register, login} = require('../controllers/userController');
const { addProject } = require('../controllers/projectControllers');

const jwtMiddleware = require('../MIddleWare/jwtMiddleware');
const multerConfig = require('../MIddleWare/multerMiddleware');

router.use(jwtMiddleware)


// using router object to define routes(paths)
// register api call 
router.post('/users/register', register)

router.post('/users/login', login)

// add projects
router.post('/project/add',jwtMiddleware,multerConfig.single('projectImage'),addProject)

module.exports = router;