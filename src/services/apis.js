import API from './base-api'


//Filters Should Be Added as Object
export const getPhotos = async (filter = {}, sort) => {
  try {
    const reqBody = { filter: filter, sort: sort }
        const response = await API.post("/filter", reqBody);
          return response.data;
    } catch (error) {
        console.log(error)
    }

};


export const getRecommendedPhotos = async (recommended) => {
  try {
    const response = await API.post("/recommended", {recommended:recommended});
    return response.data;
  } catch (error) {
    console.log(error);
  }
};