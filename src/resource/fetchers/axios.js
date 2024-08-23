const axios = require('axios')
const config = require('config');

module.exports = class PublicAxiosNumberFetcher {

  async getRandomNumber(min, max) {

    const url = `${config.get('app.publicAPI.baseUrl')}?min=${min}&max=${max}`;
    const response = await axios.get(url); 
    return response.data[0];
      
  } 
}