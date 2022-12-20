function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
      // Make a request to the API
      const response = requestAPI();
  
      // If the request was successful, resolve the Promise with the response
      if (response.status === 200) {
        resolve(response);
      } else {
        // If the request was not successful, reject the Promise with an error message
        reject(new Error('Failed to get response from API'));
      }
    });
  }
  