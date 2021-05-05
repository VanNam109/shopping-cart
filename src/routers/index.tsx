import Home from "../containers/Home";
import ListProductAll from "../containers/Home/ListProductAll";
import CategoryProduct from "../containers/Home/ListProductAll/CategoryProduct";
import DetailPage from "../containers/NewsPage";
import Deatil from "../containers/NewsPage/Deatil";

const routesHome = [
  {
    exact: true,
    path: "/",
    component: Home,
  },
  {
    exact: false,
    path: "/tintuc",
    component: DetailPage,
  },
  {
    exact: false,
    path: "/categoryall",
    component: ListProductAll,
  },
  {
    exact:false ,
    path: "/category/:hangSX",
    component: CategoryProduct,
  },
  {
    exact:false ,
    path: "/tintuc24/:id",
    component: Deatil,
  },
];
export { routesHome };

