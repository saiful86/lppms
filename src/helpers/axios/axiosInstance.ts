import axios from "axios";

const instance = axios.create({
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Headers":
      "Content-Type, X-Amz-Date, Authorization, X-Api-KeyboardEvent, X-Amz-Security-Token",
  },
});

// for post
instance.defaults.headers.post["Content-Type"] = "application/json";
// receive type
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // you can write or call a function here to add auth header
    // example below
    // const accessToken = getFromLocalStorage(authKey);
    const accessToken =

      "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjgsImVtYWlsIjoicm9iaXVsQHppdC5jb20iLCJzdWIiOiJyb2JpdWxAeml0LmNvbSIsImlhdCI6MTY5ODk5MjcyMywiZXhwIjoxNzMwNTI4NzIzfQ.ED6tCBxtBXVjFlfgSp-aRp7u_S4_d1nFfnSMcNpQYus";

    if (accessToken) {
      // set to header
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  // if any error while make request return error
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    return response;
    // return Promise.resolve(responseObject);
  },
  function (error) {
    return error;
    // return Promise.reject(responseObject);
  }
);

export { instance };
