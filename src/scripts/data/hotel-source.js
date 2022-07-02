/* eslint-disable no-empty-function */
import apiEndpoint from '../globals/api-endpoint';

class HotelSource {
  static async ListHotel() {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'hotels4.p.rapidapi.com',
        'X-RapidAPI-Key': '804f1a99a9msh7feca5a1c518010p19c5f3jsnc2f38df2a342',
      },
    };

    return fetch(apiEndpoint.LIST_RESTAURANT, options)
      .then((response) => response.json())
      .catch((err) => console.error(err));
  }

  static async detailHotel(id) {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'hotels4.p.rapidapi.com',
        'X-RapidAPI-Key': '804f1a99a9msh7feca5a1c518010p19c5f3jsnc2f38df2a342',
      },
    };

    return fetch(apiEndpoint.DETAIL(id), options)
      .then((response) => response.json())
      .catch((err) => console.error(err));
  }

  static async postHotel() {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'hotels4.p.rapidapi.com',
        'X-RapidAPI-Key': '804f1a99a9msh7feca5a1c518010p19c5f3jsnc2f38df2a342',
      },
    };

    fetch(apiEndpoint.GET_REVIEW, options)
      .then((response) => response.json())
      .catch((err) => console.error(err));
  }
}

export default HotelSource;
