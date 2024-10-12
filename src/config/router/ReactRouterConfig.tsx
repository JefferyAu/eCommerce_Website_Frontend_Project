import {createBrowserRouter} from "react-router-dom";
import ProductDetail from "../../ui/page/ProductDetailPage";
import ErrorPage from "../../ui/page/ErrorPage";
import LoginPage from "../../ui/page/LoginPage";
import ShoppingCartPage from "../../ui/page/ShoppingCartPage";
import AdminConsolePage from "../../ui/page/AdminConsolePage";
import CheckOutPage from "../../ui/page/CheckOutPage";
import ThankYouPage from "../../ui/page/ThankYouPage";
import AdminProductDetailPage from "../../ui/page/AdminProductDetailPage";
import PermissionErrorPage from "../../ui/page/PermissionErrorPage";
import PastTransactionsPage from "../../ui/page/PastTransactionsPage";
import ProductListingPage from "../../ui/page/ProductListingPage";



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
    path: "/thankyou/:tid",
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
    path: "/pasttransactions",
    element: <PastTransactionsPage/>
  },
  {
    path: "/error",
    element: <ErrorPage/>
  },
  {
    path: "/permissionerror",
    element: <PermissionErrorPage/>
  }
])