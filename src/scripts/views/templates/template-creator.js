const HotelDetail = (hotel) => `
<article class="hotel-detail">
    <div class="detail-info">
      <div class="detail-title-hotel">
        <h2 tabindex="0" class="detail-nama">${hotel.propertyDescription.name}</h2>
        <div id="likeButtonContainer"></div>
      </div>
      <p></p>
      <div class="grid-city-rating">
        <div class="city-rating">
          <h3>Guest Review</h3>
          <div class="city-detail">
            <p class="p-city">Rating: <b>${hotel.guestReviews.brands.rating}</b></p>
          </div>
          <div class="city-detail">
            <p class="p-city">Scale: <b>${hotel.guestReviews.brands.scale}</b></p>
          </div>
        </div>
      </div>
    </div>
      
      <div class="hotel__description">
        <h3>Current Place</h3>
        <div class="hotel__detail-desc">
          <h4>City</h4>
          <p class="p-padding">${hotel.propertyDescription.address.cityName}</p>
          <h4>Country</h4>
          <p class="p-padding">${hotel.propertyDescription.address.countryName}</p>
          <h4>Province</h4>
          <p class="p-padding">${hotel.propertyDescription.address.provinceName}</p>
          <h4>Address</h4>
          <p class="p-padding">${hotel.propertyDescription.address.fullAddress}</p>
        </div>
      </div>
  <div class="description-detail">

  </div>
</article>
`;

const HotelBookmark = (hotel) => `
<article class="bookmark-item">
  
    <div class="card-header">  
      <h2 class="detail-nama">
        <div class="grid-city-bookmark">
          <div class="city-bookmark">
            <a href="${`/#/detail/${hotel.id}`}"><div class="bookmark-title">${hotel.hotels.propertyDescription.name}</div></a>
          </div>
        </div>
      </h2>
    </div>
    <div class="bookmark-info">
      <h4>
      <p class="bookmard-padding">${hotel.hotels.propertyDescription.address.cityName}</p>
      </h4>
      <h4>
      <p class="bookmard-padding">${hotel.hotels.propertyDescription.address.countryName}</p>
      </h4>
      <h4>      
      <p class="bookmard-padding">${hotel.hotels.propertyDescription.address.provinceName}</p>
      </h4>
      <div class="card-body">
        <a href="${`/#/detail/${hotel.id}`}" class="btn">Read more</a>
      </div>
    </div>
</article>
`;

const HotelItem = (hotels) => `
    <article class="post-item">
      <h2>${hotels.address.countryName}</h2>
      <div class="image">
      <picture>
        <a href="${`/#/detail/${hotels.id}`}"><img tabindex="0" class="post-item__thumbnail lazyload"
        data-src="${hotels.optimizedThumbUrls.srpDesktop}"
        alt="${hotels.address.locality}" 
        /></a>
      </picture>
      </div>
      <div class="details">
        <h2>${hotels.address.locality}</h2>
        <h3 tabindex="0" class="post-item__title"><a href="${`/#/detail/${hotels.id}`}">${hotels.name}</a></h3>
        <p>Rating : <i class="fa-solid fa-star"></i> ${hotels.starRating} </p>
      </div>
      <h2>Price: ${hotels.ratePlan.price.current}</h2>
    </article>
`;

const AboutUsPage = () => `
  <article class="about-us">
    <div class="about-us__content">
      <div class="about">
        <div class="left">
            <p>We are a bunch of an web developer learner just trying to be a good one. Let us introduce you to our project.</p>
            <p>This is Dream Live. This is our first team project to. This project simply about hotel platform.</p>
        </div>
        <div class="right">
          <picture>
            <img tabindex="0" class="img__about lazyload" data-src="../images/about-us-large.jpg" alt="About Us Logo">
          </picture>
        </div>
        <div class="clear"></div>
      </div>
      <div class="mission">
        <div class="left-image">
          <picture>
            <img tabindex="0" class="img__about lazyload" data-src="../images/missions-logo-large.jpg" alt="Mission Logo">
          </picture>
        </div>
          <div class="right">
            <p>During the pandemic period for the past 2 years, many hotels were empty of visitors. Therefore, we strive to provide facilities such as providing hotel references and for bookings. 
            We hope that this project can help increase turnover and visitors. The features in this program will include the appearance of a list of hotels, then to search for hotels and make bookings. We hope that other features will be added as the project progresses. 
            What we emphasize in this application is that it is easy to use and user friendly. We prioritize user convenience so that it helps if used by people who are new to technology.</p>
          </div>
        <div class="clear"></div>
      </div>
      <h1 tabindex="0" class="urgent-color">Our Team</h1> 
      <div class="about"> 
      <div class="team">
          <div class="team-card">
            <div class="team-card-image">
              <picture>
                <img tabindex="0" class="team-card-img lazyload" data-src="../images/johanes-large.jpg" alt="Johannes Valerian">
              </picture>
              <div class="team-card-image-inner">
                <div class="team-icons">

                </div>
              </div>
            </div>
            <p tabindex="0" class="team-name">Johannes Valerian</p>
            <p tabindex="0" class="team-title">Web Developer</p>
          </div>
          <div class="team-card">
            <div class="team-card-image">
              <picture>
                <img tabindex="0" class="team-card-img lazyload" data-src="../images/kemal-large.jpg" alt="Kemal Yazid Fauzi">
              </picture>

              <div class="team-card-image-inner">
                <div class="team-icons">

                </div>
              </div>
            </div>
            <p tabindex="0" class="team-name">Kemal Yazid Fauzi</p>
            <p tabindex="0" class="team-title">Web Developer</p>
          </div>

          <div class="team-card">
            <div class="team-card-image">
              <picture>
                <img tabindex="0" class="team-card-img lazyload" data-src="../images/wibrian-large.jpg" alt="Wibrian Alfathan">
              </picture>

              <div class="team-card-image-inner">
                <div class="team-icons">

                </div>
              </div>
            </div>
            <p tabindex="0" class="team-name">Wibrian Alfathan</p>
            <p tabindex="0" class="team-title">Web Developer</p>
          </div>

          <div class="team-card">
            <div class="team-card-image">
              <picture>
                <img tabindex="0" class="team-card-img lazyload" data-src="../images/yosua2-large.jpg" alt="Yosua Hutabarat">
              </picture>

              <div class="team-card-image-inner">
                <div class="team-icons">

                </div>
              </div>
            </div>
            <p tabindex="0" class="team-name">Yosua Hutabarat</p>
            <p tabindex="0" class="team-title">Web Developer</p>
          </div>

          <div class="clearfix"></div>

          </div>
      </div>

    </div>

  </article>
`;

const createLikeHotelButtonTemplate = () => `
  <button aria-label="like this hotel" id="likeButton" class="like">
    <i class="fa-regular fa-star"></i>
  </button>
`;

const createUnlikeHotelButtonTemplate = () => `
  <button aria-label="unlike this hotel" id="likeButton" class="like">
    <i class="fa-solid fa-star"></i>
  </button>
`;

const Spinner = () => `
  <div class="spinner"></div>
`;

const NoBookmark = () => `
  <div>
  </div>
  <div class="no-favorite">
    You dont have any Bookmarked Hotel
  </div>
`;

const NoHotel = () => `
  <div>
  </div>
  <div class="no-favorite">
    Hotel not found..
  </div>
`;

export default Spinner;

export {
  HotelDetail,
  HotelBookmark,
  HotelItem,
  AboutUsPage,
  createLikeHotelButtonTemplate,
  createUnlikeHotelButtonTemplate,
  Spinner,
  NoBookmark,
  NoHotel,
};
