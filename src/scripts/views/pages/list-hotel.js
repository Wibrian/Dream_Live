/* eslint-disable import/no-named-as-default-member */
import HotelSource from '../../data/hotel-source';
import { HotelItem, Spinner, NoHotel } from '../templates/template-creator';

const searchHotel = document.querySelector('#searchHotel');

const ListHotel = {
  async render() {
    return `
        <div id="hotels" class="hotels"></div>
        <div id="spin"></div>
    `;
  },

  async afterRender() {
    const hideSeacrh = document.querySelector('#searchHotel');
    hideSeacrh.style.display = 'block';

    const spin = document.querySelector('#spin');
    spin.innerHTML = Spinner();
    const hotelsContainer = document.querySelector('#hotels');
    hotelsContainer.innerHTML = '';

    try {
      const hotel = await HotelSource.ListHotel();
      const dataResult = hotel.data.body.searchResults.results;
      // console.log(dataResult);
      searchHotel.addEventListener('keyup', (event) => {
        const searchString = event.target.value;
        const filtered = dataResult.filter((hotelName) => hotelName.name.toLowerCase().includes(searchString) || hotelName.address.locality.toLowerCase().includes(searchString));
        if (filtered.length === 0) {
          hotelsContainer.innerHTML = NoHotel();
        } else {
          myHotel(filtered);
        }
      });
      const myHotel = (hotels) => {
        const htmlString = hotels.map((hotel) => HotelItem(hotel)).join('');
        hotelsContainer.innerHTML = htmlString;
      };

      myHotel(dataResult);
      spin.style.display = 'none';
    } catch (err) {
      spin.style.display = 'none';
      hotelsContainer.innerHTML = `Error: ${err}, try to refresh!`;
    }
  },
};

export default ListHotel;
