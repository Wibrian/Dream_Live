import { createLikeHotelButtonTemplate, createUnlikeHotelButtonTemplate } from '../views/templates/template-creator';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, BookmarkHotel, hotel }) {
    this._likeButtonContainer = likeButtonContainer;
    this._hotel = hotel;
    this._BookmarkHotel = BookmarkHotel;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._hotel;

    if (await this._isHotelExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isHotelExist(id) {
    const hotel = await this._BookmarkHotel.getHotel(id);
    return !!hotel;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeHotelButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._BookmarkHotel.putHotel(this._hotel);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createUnlikeHotelButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._BookmarkHotel.deleteHotel(this._hotel.id);
      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;
