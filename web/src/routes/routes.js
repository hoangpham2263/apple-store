import config from "../config";
import DefaultLayout from "../layout/DefaultLayout";

// Page
import Home from "../Pages/Home";
import HomeDetail from "../Pages/HomeDetail";
import Iphone from "../Pages/Iphone";
import Ipad from "../Pages/Ipad";
import Mac from "../Pages/Mac";
import Watch from "../Pages/Watch";
import AmThanh from "../Pages/AmThanh";
import PhuKien from "../Pages/PhuKien";
import DichVu from "../Pages/DichVu";
import TinTuc from "../Pages/TinTuc";
import KhuyenMai from "../Pages/KhuyenMai";
import Cart from "../Pages/Cart";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import QuanLy from "../Pages/QuanLy";
import CreateProduct from "../Pages/CreateProduct";

// Sub Page
import TraGop from "../Pages/TraGop";
import ThuCuDoiMoi from "../Pages/ThuCuDoiMoi";
import Workshop from "../Pages/Workshop";
import MBTi from "../Pages/MBTi";
import Sim from "../Pages/Sim";
import AppleCare from "../Pages/AppleCare";
import GocCamOn from "../Pages/GocCamOn";

import HomeLayout from "../layout/HomeLayout";
import Logout from "../Pages/Logout";

// Public routes
const publicRoutes = [
  // Page
  {
    path: config.routes.home,
    component: Home,
    layout: HomeLayout,
  },
  {
    path: config.routes.homeDetail,
    component: HomeDetail,
    layout: HomeLayout,
  },
  {
    path: config.routes.iphone,
    component: Iphone,
    layout: DefaultLayout,
  },
  {
    path: config.routes.ipad,
    component: Ipad,
    layout: DefaultLayout,
  },
  {
    path: config.routes.mac,
    component: Mac,
    layout: DefaultLayout,
  },
  {
    path: config.routes.watch,
    component: Watch,
    layout: DefaultLayout,
  },
  {
    path: config.routes.amThanh,
    component: AmThanh,
    layout: DefaultLayout,
  },
  {
    path: config.routes.phuKien,
    component: PhuKien,
    layout: DefaultLayout,
  },
  {
    path: config.routes.dichVu,
    component: DichVu,
    layout: HomeLayout,
  },
  {
    path: config.routes.tinTuc,
    component: TinTuc,
    layout: HomeLayout,
  },
  {
    path: config.routes.khuyenMai,
    component: KhuyenMai,
    layout: HomeLayout,
  },
  {
    path: config.routes.cart,
    component: Cart,
    layout: HomeLayout,
  },
  {
    path: config.routes.login,
    component: Login,
    layout: HomeLayout,
  },
  {
    path: config.routes.logout,
    component: Logout,
    layout: HomeLayout,
  },
  {
    path: config.routes.register,
    component: Register,
    layout: HomeLayout,
  },
  {
    path: config.routes.quanLy,
    component: QuanLy,
    layout: HomeLayout,
  },
  {
    path: config.routes.createProduct,
    component: CreateProduct,
    layout: HomeLayout,
  },
  // Sub Page
  {
    path: config.routes.traGop,
    component: TraGop,
    layout: HomeLayout,
  },
  {
    path: config.routes.thuCuDoiMoi,
    component: ThuCuDoiMoi,
    layout: HomeLayout,
  },
  {
    path: config.routes.workshop,
    component: Workshop,
    layout: HomeLayout,
  },
  {
    path: config.routes.MBTi,
    component: MBTi,
    layout: HomeLayout,
  },
  {
    path: config.routes.sim,
    component: Sim,
    layout: HomeLayout,
  },
  {
    path: config.routes.appleCare,
    component: AppleCare,
    layout: HomeLayout,
  },
  {
    path: config.routes.gocCamOn,
    component: GocCamOn,
    layout: HomeLayout,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
