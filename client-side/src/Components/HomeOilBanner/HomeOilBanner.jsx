import { Link } from "react-router-dom";
import img from '../../assets/image/shell-helix-removebg-preview.png'


const HomeOilBanner = () => {
    return (
        <div className="bg-[#A5A5A5] flex flex-col md:flex-row items-center justify-between   px-10">
           <div className="md:w-3/4 w-full pt-10">
            <img className="w-full" src={img} alt="" />
           </div>
           <div className="text-center md:w-1/4 pb-10 md:pb-0 w-full">
            <p className="font-medium text-lg">New arrivals</p>
            <h1 className="text-4xl font-bold mt-2">Shell Engine Oil</h1>
            <button className="py-[10px] px-[15px] mt-6 bg-[#ffffff] text-black"><Link>Shop Now</Link></button>
           </div>
            
        </div>
    );
};

export default HomeOilBanner;