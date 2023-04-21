
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
      method: "GET",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }; //end of options object

    const data = await fetch(baseUrl + url, options);
    const response = await data.json();
    return response;
  }, //end of get
  patch: async (url: string, payload: {}) => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const options = {
      method: 'PATCH',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
      },
      body: JSON.stringify({
        public: false,
        slides: payload
      })
    };

    const data = await fetch(baseUrl + url, options);
    const response = await data.json();
    return response;
    
  },//end of patch
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
  fetchVideo: async (url: string, payload: string) => {
    //fetch to get info about one video in the account after logging in elai.io
    const baseUrl = process.env.NEXT_PUBLIC_BASE_LOGIN_URL;
    const options = {
      method: "GET",
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
  }
};

export default api