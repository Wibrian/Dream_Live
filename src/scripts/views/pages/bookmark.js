import BookmarkHotelIdb from '../../data/bookmarkhotel-idb';
import { HotelBookmark, NoBookmark } from '../templates/template-creator';

const searchHotel = document.querySelector('#searchHotel');

const Bookmark = {
  async render() {
    return `
        <h1 tabindex="0" class="latest__label">Bookmark Hotel</h1>
        <div id="hotels" class="hotels"></div>
    `;
  },

  async afterRender() {
    const hideSeacrh = document.querySelector('#searchHotel');
    hideSeacrh.style.display = 'block';

    const hotels = await BookmarkHotelIdb.getAllHotels();
    console.log(hotels);

    const hotelsContainer = document.querySelector('#hotels');
    if (hotels.length === 0) {
      hotelsContainer.innerHTML = NoBookmark();
    } else {
      searchHotel.addEventListener('keyup', (event) => {
        const searchString = event.target.value;
        const filtered = hotels.filter((hotelName) => hotelName.hotels.propertyDescription.name.toLowerCase().includes(searchString));
        myBookmark(filtered);
      });
      const myBookmark = (bookmarks) => {
        const htmlString = bookmarks.map((bookmark) => HotelBookmark(bookmark)).join('');
        hotelsContainer.innerHTML = htmlString;
      };

      myBookmark(hotels);
    }
  },
};

export default Bookmark;
