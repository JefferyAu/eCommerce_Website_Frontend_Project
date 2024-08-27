import Header from "../../component/Header";
import VerticalTabs from "./component/VerticalTabs.tsx";
import {useContext, useEffect} from "react";
import {LoginUserContext} from "../../../context/LoginUserContext.ts";
import {useNavigate} from "react-router-dom";

export default function AdminConsolePage(){

  const loginUser = useContext(LoginUserContext);

  const navigate = useNavigate();

  useEffect(
    ()=>{
      if(loginUser === null){
        navigate("/")
      }
    },[loginUser])

  return(
    <>
      <Header/>
      <VerticalTabs/>
    </>
  )
}