import { Link } from "react-router-dom";
import Container from "../Container";
import img from '../../assets/image/banner1.png'

const HomeBanner = () => {
  return (
    <div className="bg-[#d4d4d4]">
      <Container>
       <div className="flex md:flex-row flex-col  justify-between items-center py-10">
       <div className="text-center md:ml-10 my-10 md:-mt-10">
          <h1 className="md:text-5xl text-3xl font-bold mb-3">
            <span className="text-white">Auto</span> Spare Parts
          </h1>
          <h4 className="md:text-xl text-lg font-bold mb-6">All Majors Brands Available</h4>
          <button className="py-[10px] px-[15px] bg-[#868686] text-white"><Link>Shop Now</Link></button>
        </div>
        <div>
          <img src={img} alt="" />
        </div>
       </div>
      </Container>
    </div>
  );
};

export default HomeBanner;
