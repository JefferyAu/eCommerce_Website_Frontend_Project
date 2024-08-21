import './App.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./config/router/ReactRouterConfig.tsx";


function App() {


  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
