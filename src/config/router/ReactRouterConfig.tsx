import {createBrowserRouter} from "react-router-dom";
import ProductListingPage from "../../ui/page/ProductListingPage";
import ProductDetail from "../../ui/page/ProductDetailPage";
import ErrorPage from "../../ui/page/ErrorPage";
import LoginPage from "../../ui/page/LoginPage";
import ShoppingCartPage from "../../ui/page/ShoppingCartPage";
import AdminConsolePage from "../../ui/page/AdminConsolePage";
import CheckOutPage from "../../ui/page/CheckOutPage";
import ThankYouPage from "../../ui/page/ThankYouPage";
import AdminProductDetailPage from "../../ui/page/AdminProductDetailPage";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductListingPage/>,
    errorElement:<ErrorPage/>
  },
  { ///:userId
    path: "/product/:productId",
    element: <ProductDetail/>
  },
  {
    path: "/shoppingcart",
    element: <ShoppingCartPage/>
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/checkout/:transactionId",
    element: <CheckOutPage/>
  },
  {
    path: "/thankyou",
    element: <ThankYouPage/>
  },
  {
    path: "/adminconsole",
    element: <AdminConsolePage/>
  },
  {
    path: "/adminconsole/:productId",
    element: <AdminProductDetailPage/>
  },
  {
    path: "/error",
    element: <ErrorPage/>
  }
])