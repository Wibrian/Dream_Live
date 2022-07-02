import { async } from 'regenerator-runtime';
import UrlParser from '../../routes/url-parser';
import HotelSource from '../../data/hotel-source';
import { HotelDetail, Spinner } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import BookmarkHotelIdb from '../../data/bookmarkhotel-idb';

const Detail = {
  async render() {
    return `
      <h1 tabindex="0" class="latest__label">Detail Hotel</h1>
      <div id="hotel" class="hotel"></div>
      <div id="spin"></div>
    `;
  },

  async afterRender() {
    const hideSeacrh = document.querySelector('#searchHotel');
    hideSeacrh.style.display = 'none';

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const hotelContainer = document.querySelector('#hotel');
    const spin = document.querySelector('#spin');
    spin.innerHTML = Spinner();

    try {
      const dataHotel = await HotelSource.detailHotel(url.id);
      hotelContainer.innerHTML = HotelDetail(dataHotel.data.body);
      console.log(dataHotel.data.body);
      await LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        BookmarkHotel: BookmarkHotelIdb,
        hotel: {
          hotels: dataHotel.data.body,
          id: url.id,
        },
      });
      spin.style.display = 'none';
    } catch (err) {
      hotelContainer.innerHTML = `Error: ${err}`;
      spin.style.display = 'none';
    }
  },
};

export default Detail;
