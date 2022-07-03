import CONFIG from './config';

const apiEndpoint = {
  LIST_HOTEL: `${CONFIG.BASE_URL}properties/list?destinationId=1506246&pageNumber=1&pageSize=25&locale=en_US&currency=USD`,
  DETAIL: (id) => `${CONFIG.BASE_URL}properties/get-details?id=${id}&locale=en_US`,
  GET_REVIEW: `${CONFIG.BASE_URL}reviews/v2/list?hotelId=1053457920&reviewOrder=date_newest_first&tripTypeFilter=all`,
};

export default apiEndpoint;
