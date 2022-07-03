/* eslint-disable no-empty-function */
import apiEndpoint from '../globals/api-endpoint';

class HotelSource {
  static async ListHotel() {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'hotels4.p.rapidapi.com',
        'X-RapidAPI-Key': 'c4cb3e5b73msh0e77399a732d200p151702jsn87304d14fff1',
      },
    };

    return fetch(apiEndpoint.LIST_HOTEL, options)
      .then((response) => response.json())
      .catch((err) => console.error(err));
  }

  static async detailHotel(id) {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'hotels4.p.rapidapi.com',
        'X-RapidAPI-Key': 'c4cb3e5b73msh0e77399a732d200p151702jsn87304d14fff1',
      },
    };

    return fetch(apiEndpoint.DETAIL(id), options)
      .then((response) => response.json())
      .catch((err) => console.error(err));
  }
}

export default HotelSource;
