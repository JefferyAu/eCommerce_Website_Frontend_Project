import {createBrowserRouter} from "react-router-dom";
import ProductListingPage from "../../ui/page/ProductListingPage";
import ProductDetail from "../../ui/page/ProductDetailPage";
import ErrorPage from "../../ui/page/ErrorPage";
import LoginPage from "../../ui/page/LoginPage";



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
  // {
  //   path: "/shoppingcart",
  //   element: <ShoppingCart/>
  // },
  {
    path: "/login",
    element: <LoginPage/>
  },
  // {
  //   path: "/checkout/:transactionId",
  //   element: <Checkout/>
  // },
  // {
  //   path: "/thankyou",
  //   element: <ThankYou/>
  // },
  {
    path: "/error",
    element: <ErrorPage/>
  }
])