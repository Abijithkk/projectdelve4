import { BASE_URL } from "./baseUrl";
import { commonApi } from "./commonApi";

// register 
export const registerApi=async(body)=>{
    return await commonApi('POST',`${BASE_URL}/user/register`,body,"")
}

// login
export const loginApi=async(body)=>{
    return await commonApi('POST',`${BASE_URL}/user/login`,body,"")
}


// update profile
export const updateProfile=async(body,headers,id)=>{
    return await commonApi('PUT',`${BASE_URL}/user/update-profile/${id}`,body,headers)
}

// get profile
export const getProfileApi=async(id,headers)=>{
    return await commonApi('GET',`${BASE_URL}/user/getprofile/${id}`,{},headers)
}

// add new project
export const addProjectApi=async(body,headers)=>{
    return await commonApi('POST',`${BASE_URL}/user/add-project`,body,headers)
}

// get user projects
export const userProjectApi=async(headers,id)=>{
    return await commonApi('GET',`${BASE_URL}/user/get-user-projects/${id}`,"",headers)
}

// get all projects
export const allProjectApi = async (searchData) => {
    try {
        // Make a GET request using the commonApi function
        return await commonApi('GET', `${BASE_URL}/user/get-all-projects?search=${searchData}`);
    } catch (error) {
        // Log and re-throw the error for further handling
        console.error('API request failed:', error.message, error.response?.status);
        throw error;
    }
};



// get Home projects
export const homeProjectApi=async(searchData)=>{
    return await commonApi('GET',`${BASE_URL}/user/get-home-projects`,"","")
}


// update project
export const updateProjectApi=async(body,header,id)=>{
    return await commonApi('PUT',`${BASE_URL}/user/edit-project/${id}`,body,header)
}


// delete project
export const deleteProjectApi=async(headers,id)=>{
    return await commonApi('DELETE',`${BASE_URL}/user/delete-project/${id}`,{},headers)
}