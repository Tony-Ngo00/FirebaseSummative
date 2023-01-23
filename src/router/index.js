import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import LoginView from "../views/LoginView.vue";
import PurchaseView from "../views/PurchaseView.vue";
import CartView from "../views/CartView.vue";
import AccountView from "../views/AccountView.vue";
import RegisterView from "../views/RegisterView.vue";
const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/account",
    component: AccountView,
  },
  {
    path: "/Login",
    component: LoginView,
  },
  {
    path: "/register",
    component: RegisterView,
  },
  {
    path: "/purchase",
    component: PurchaseView,
  },
  {
    path: "/cart",
    component: CartView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
