const { BASE_URL } = require("./base_url");
const { commonAPI } = require("./commonApi");


//  register api call 
export const registerAPI =  async (user) => {

    return await commonAPI("post",`${BASE_URL}/users/register`,user,"")

}

// login api call
export const loginAPI = async (user) => {
    
    return await commonAPI("post",`${BASE_URL}/users/login`,user,"")
}

// add project api call 
export const addProjectAPI = async (reqBody,reqHeader) => {
    return await commonAPI("post",`${BASE_URL}/projects/add`,reqBody,reqHeader)
}