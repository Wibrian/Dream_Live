import ListHotel from '../views/pages/list-hotel';
import Detail from '../views/pages/detail';
import Bookmark from '../views/pages/bookmark';
import AboutUs from '../views/pages/about-us';

const routes = {
  '/': ListHotel, // default page
  '/detail/:id': Detail,
  '/bookmark': Bookmark,
  '/about-us': AboutUs,
};

export default routes;
