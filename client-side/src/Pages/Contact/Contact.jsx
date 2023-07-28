import { Link } from "react-router-dom";
import logo from "../../assets/image/logo.png";
// css
import "./Contact.css";
import { IoIosArrowForward } from "react-icons/io";
const Contact = () => {
  return (
    <div>
      <section className="bg-background bg-fixed ">
        <div className="content">
          <img className="h-12" src={logo} alt="" />
          <h3 className="text-5xl text-black font-semibold">Contact</h3>
          <div className="flex items-center justify-center">
            <Link className="text-xxl text-black font-semibold" to="/">
              Home
            </Link>
            <IoIosArrowForward className="text-black mt-1"/> <span className="text-xxl text-black">Contact</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
