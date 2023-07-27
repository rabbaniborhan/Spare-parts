import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";



const Main = () => {
    return (
        <div className="max-w-screen-[1920px]">
          
           <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
          
            
        </div>
    );
};

export default Main;