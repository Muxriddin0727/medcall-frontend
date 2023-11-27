import axios from "axios";

export const useAxios = () =>{
    const request = async ({
        url,
        method= "GET",
        body,
    }: {
        url:string;
        method?: "GET" | "POST" | "PUT" | "DELETE";
        body?: object;
    }) => {  return axios ({
        url: `http://localhost:3002${url}`,
        method,
        data: body,
    });
};

return  request;
};