import {Link} from "react-router-dom";
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
            {/* shop now button */}
            <Link to='/login' className="relative inline-flex items-center justify-start py-3 pl-4 pr-10 overflow-hidden font-semibold text-gray-600 transition-all duration-150 ease-in-out rounded hover:pl-8 hover:pr-6 bg-gray-50 group">
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-gray-500 group-hover:h-full"></span>
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Shop Now</span>
            </Link>
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
