import Container from "../Container";
import img1 from "../../assets/image/lubricant.png";
import img2 from "../../assets/image/spare.png";
import { Link } from "react-router-dom";

const PopularProducts = () => {
  return (
    <div className="bg-[#F5F5F5] py-20">
      <Container>
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="w-full flex flex-col justify-center">
            <img className="w-full md:w-[550px] h-[350]" src={img1} alt="" />
            <h1 className="font-bold text-xl my-2 text-center md:text-left md:ml-44">Lubricants</h1>
            <button className="border-b-2 rounded-lg border-black md:ml-44 font-bold p-3 text-center w-28 mx-auto "><Link> View More</Link></button>
          </div>
          <div>
          <div className="w-full  flex flex-col justify-center">
            <img className=" w-full md:w-[550px] h-[350]" src={img2} alt="" />
            <h1 className="font-bold text-xl my-2 text-center ">Spare Parts</h1>
            <button className="border-b-2 rounded-lg border-black font-bold p-3 text-center w-28 mx-auto "><Link> View More</Link></button>
          </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PopularProducts;
