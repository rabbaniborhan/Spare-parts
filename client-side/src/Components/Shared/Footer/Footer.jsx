import logo from "../../../assets/image/logo.png";
const Footer = () => {
  return (
    <>
      <footer className="footer p-14 bg-base-200 text-base-content">
        <div>
          <img src={logo} className="ml-10 pt-5" width="200" height="100" />
        </div>
        <div className="font-semibold">
          <span className="footer-title">Link</span>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Shop</a>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Contact</a>
        </div>
        <div className="font-semibold">
          <span className="footer-title">Company</span>
          <a className="link link-hover">Payment Options</a>
          <a className="link link-hover">Returns</a>
          <a className="link link-hover">Privacy Policies</a>
        </div>
        <div className="form-control">
          <span className="footer-title">Newsletter</span>
          <div className="md:flex justify-center items-center">
            <input
              type="text"
              placeholder="Enter your email address"
              className="w-full  border-b-2 p-3 border-black bg-transparent text-base-content focus:outline-none"
            />
            <button className="ml-20 md:ml-4  border-b-2 border-black w-28 p-3 font-bold top-0 right-0 ">
              Subscribe
            </button>
          </div>
        </div>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
        <p className=" mx-auto uppercase">2023-24 auto Essentials. All rights reverved</p>
      </footer>
    </>
  );
};

export default Footer;
