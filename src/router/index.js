import Vue from "vue";
import VueRouter from "vue-router";

// Import page-level views from `pages/`
import ProductPage from "../pages/Product.vue";
import CartPage from "../pages/Cart.vue";
import CheckoutPage from "../pages/CheckOut.vue";
import OrderPage from "../pages/Order.vue";
import Homepage from "../pages/Home.vue";

// Import component-level views from `components/user/` and others
import UserLogin from "../components/user/Login.vue";
import UserRegister from "../components/user/Register.vue";
import ProductDetail from "../components/product/ProductDetails.vue";

Vue.use(VueRouter);

// Simulated auth guard
// const isAuthenticated = () => !!localStorage.getItem("token");

// const requireAuth = (to, from, next) => {
//   if (isAuthenticated()) next();
//   else next("/login");
// };

const routes = [
  { path: "/", name: "Home", component: Homepage },
  {
    path: "/products",
    name: "ProductPage",
    component: ProductPage,
    // beforeEnter: requireAuth,
  },
  {
    path: "/product/:productId",
    name: "ProductDetail",
    component: ProductDetail,
  },
  {
    path: "/cart",
    name: "CartPage",
    component: CartPage,
    // beforeEnter: requireAuth,
  },
  {
    path: "/checkout",
    name: "CheckoutPage",
    component: CheckoutPage,
    // beforeEnter: requireAuth,
  },
  {
    path: "/order",
    name: "OrderPage",
    component: OrderPage,
    // beforeEnter: requireAuth,
  },
  // {
  //   path: "/order/:confirmationId",
  //   name: "ConfirmationOrder",
  //   component: ConfirmationOrder,
  //   // beforeEnter: requireAuth,
  // },
  // {
  //   path: "/profile",
  //   name: "ProfilePage",
  //   component: ProfilePage,
  //   // beforeEnter: requireAuth,
  // },
  { path: "/login", name: "UserLogin", component: UserLogin },
  { path: "/register", name: "UserRegister", component: UserRegister },
  { path: "*", redirect: "/" },
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior: () => ({ x: 0, y: 0 }),
});

export default router;
