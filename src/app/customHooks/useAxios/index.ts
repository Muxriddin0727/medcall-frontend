import axios from "axios";

export const useAxios = () => {
  const request = async ({
    url,
    method = "GET",
    body,
    headers,
  }: {
    url: string;
    method?: "GET" | "POST" | "PUT" | "DELETE";
    body?: object;
    headers?: object;
  }) => {
    return axios({
      url: `http://localhost:3002${url}`,
      method,
      data: body,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        ...headers,
      },
    });
  };

  return request;
};