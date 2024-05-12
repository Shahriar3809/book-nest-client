import { FaFacebook, FaReddit, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" p-10 mt-10 bg-violet-700 text-white">
      <div className="footer max-w-[1170px] mx-auto md:p-5">
        <aside>
          <h3 className="text-3xl font-bold">Dream Library</h3>
          <p>
            Dream Library.
            <br />
            Providing reliable service since 2000
          </p>
        </aside>
        <nav className="text-center">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Borrow</a>
          <a className="link link-hover">Return</a>
          <a className="link link-hover">Membership</a>
          <a className="link link-hover">Free</a>
        </nav>
        <nav>
          <h6 className="footer-title">School</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Other</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
      <hr />
      <br />
      <div className="space-y-3">
        <h2 className="text-xl text-center">Social Media: </h2>
        <div className="flex gap-3 text-3xl justify-center ">
          <FaFacebook />

          <FaInstagramSquare />
          <FaReddit />
        </div>
        <p className="text-center pt-5">
          {" "}
          Ⓒ All right reserved to Dream Library- 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
