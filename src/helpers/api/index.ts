
 const api = {
  post: async (url: string, payload: Object) => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const token = process.env.NEXT_PUBLIC_API_TOKEN;
    console.log(baseUrl)
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    }; //end of options object

    //fetching the data
    const data = await fetch(baseUrl + url, options);
    const response = await data.json();
    return response;
  },
  get: async (url: string) => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const token = process.env.NEXT_PUBLIC_API_TOKEN;
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }; //end of options object

    const data = await fetch(baseUrl + url);
    const response = await data.json();
    return response;
  }, //end of get
  login: async (url: string, payload: Object) => {
    //fetch to log in into the elai.io
    const baseUrl = process.env.NEXT_PUBLIC_BASE_LOGIN_URL;
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    }; //end of options object

    //fetching the data
    const data = await fetch(baseUrl + url, options);
    const response = await data.json();
    return response;
  },
  lookup: async (url: string, payload: string) => {
    //fetch to get videos in the account after logging in elai.io
    const baseUrl = process.env.NEXT_PUBLIC_BASE_LOGIN_URL;
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        Authorization: payload
      },
      //body: JSON.stringify(payload),
    }; //end of options object

    //fetching the data
    const data = await fetch(baseUrl + url, options);
    const response = await data.json();
    return response;
  }, //end of lookup
};

export default api