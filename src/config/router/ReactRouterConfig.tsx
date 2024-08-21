import {createBrowserRouter} from "react-router-dom";
import ProductListingPage from "../../ui/page/ProductListingPage";
import ProductDetail from "../../ui/page/ProductDetailPage";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductListingPage/>
  },
  { ///:userId
    path: "/product/:productId",
    element: <ProductDetail/>
  },
  // {
  //   path: "/shoppingcart",
  //   element: <ShoppingCart/>
  // },
  // {
  //   path: "/login",
  //   element: <LoginPage/>
  // },
  // {
  //   path: "/checkout/:transactionId",
  //   element: <Checkout/>
  // },
  // {
  //   path: "/thankyou",
  //   element: <ThankYou/>
  // }
])