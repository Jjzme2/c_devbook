import axios from "axios";
// import store from "../store/index.js";

// Define your API base URL
const baseURL = "http://127.0.0.1:64420/api";

// Create an instance of axios with custom configuration
const api = axios.create({
  baseURL,
  timeout: 5000, // Set a reasonable timeout
});

// *Token Stuff
// // Define a function to get the JWT token from the store safely
// async function getJwtToken() {
// 	// Check if the store exists and has the auth module
// 	if (store && store.getters && store.getters["auth/getToken"]) {
// 		await store.getters["auth/getToken"];
// 	}
// 	return null; // Return null if store or token is not available
// }
// api.interceptors.request.use(
// 	(config) => {
// 		// Get the JWT token from the store
// 		const token = getJwtToken();

// 		if (token) {
// 			config.headers["Authorization"] = `Bearer ${token}`;
// 		}
// 		return config;
// 	},
// 	(error) => {
// 		return Promise.reject(error);
// 	}
// );

// *Exported Functions
// Define the APIService utility
const makeRequest = {
  // Function to make a GET request and extract data
  get: (url, params = {}) => {
    return api
      .get(url, { params })
      .then((response) => {
        return response.data; // Extract and return data from the response
      })
      .catch((error) => {
        throw error; // Handle errors as needed
      });
  },

  // Function to make a POST request and extract data
  post: (url, data = {}) => {
    return api
      .post(url, data)
      .then((response) => {
        return response.data; // Extract and return data from the response
      })
      .catch((error) => {
        throw error; // Handle errors as needed
      });
  },

  // Function to make a PUT request and extract data
  put: (url, data = {}) => {
    return api
      .put(url, data)
      .then((response) => {
        return response.data; // Extract and return data from the response
      })
      .catch((error) => {
        throw error; // Handle errors as needed
      });
  },

  // Function to make a DELETE request and extract data
  delete: (url) => {
    return api
      .delete(url)
      .then((response) => {
        return response.data; // Extract and return data from the response
      })
      .catch((error) => {
        throw error; // Handle errors as needed
      });
  },
};

function handleError(commit, error) {
  console.error(`Error: ${error.message}`);
  console.table(error);
  commit("appState/setError", error.message, { root: true });
  commit("appState/setLoading", false, { root: true });
}

function verifyType(item, typeToCheck) {
  const lowercasedType = typeToCheck.toLowerCase();

  switch (lowercasedType) {
    case "array":
      return Array.isArray(item);
    case "string":
    case "number":
    case "boolean":
    case "object":
      return typeof item === lowercasedType;
    case "null":
      return item === null;
    case "undefined":
      return item === undefined;
    case "function":
      return typeof item === "function";
    case "date":
      return item instanceof Date;
    case "regexp":
    case "regex":
      return item instanceof RegExp;
    default:
      return false; // Unknown type
  }
}

export default { makeRequest, handleError, verifyType };
