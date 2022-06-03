import API from './base-api'


//Filters Should Be Added as Object
export const getPhotos = async (filter = {}) => {
    try {
        const response = await API.post("/filter", filter)
          return response.data;
    } catch (error) {
        console.log(error)
    }

};