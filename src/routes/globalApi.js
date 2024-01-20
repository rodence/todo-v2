import axios from "axios";


export const GetRoutes = async (routename,params={}) =>{
    return await axios
    .get(routename,{params})
    .then((response)=>{
        return response
    })
    .catch((error)=>{
        console.error("error getting request", error);
    });
};

export const PostRoutes = async (routename, data)=>{
    return await axios
    .post(routename, data,{
        headers: {
            "Content-Type": "application/json",
        },  
    
    })
    .then((response)=>{
        return response
    })
    .catch((error)=>{
        console.error("error post request", error)
    })
}

export const DeleteRoutes = async (routename)=>{
    return await axios
    .delete(routename)
    .then((response)=>{
        return response
    })
    .catch((error)=>{
        console.error("error delete request", error);
    });
};

export const PutRoutes = async (routename)=>{
    return await axios
    .put(routename)
    .then((response)=>{
        return response
    })
    .catch((error)=>{
        console.error("error put request", error);
    });
};