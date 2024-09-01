import Header from "../../component/Header";
import UpdateProductDetail from "./component/UpdateProductDetail.tsx";
import {useContext, useEffect, useState} from "react";
import {ProductDetailDto} from "../../../data/product/ProductDto.type.ts";
import * as ProductApi from "../../../api/ProductDtoApi.ts";
import {useNavigate, useParams} from "react-router-dom";
import {LoginUserContext} from "../../../context/LoginUserContext.ts";

type Params = {
  productId: string
}

export default function AdminProductDetailPage(){

  const [adminProductDetails,setAdminProductDetails] = useState<ProductDetailDto| undefined>(undefined);
  const params = useParams<Params>()
  const navigate = useNavigate();
  const loginUser = useContext(LoginUserContext)

  const getProductByPid = async () =>{
    if(params.productId){
      try {
        const responseData =  await ProductApi.getProductByPid(params.productId);
        setAdminProductDetails(responseData)
      }catch (err){
        console.error(err);
        navigate("/error");
      }
    }
  }

  useEffect(() => {
    if(loginUser){
      getProductByPid();
    }else if(loginUser === null){
      navigate("/");
    }
  }, [loginUser]);

  return(
    <>
    <Header/>
      {
        adminProductDetails &&
          <UpdateProductDetail
              adminProductDetails={adminProductDetails}
          />
      }
    </>
  )
}