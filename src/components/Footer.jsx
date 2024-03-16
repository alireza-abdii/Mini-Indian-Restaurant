import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";

function Footer() {
  return (
    <footer className="w-full h-44 flex flex-col justify-center items-center bg-slate-900 text-white space-y-5">
      <div className="w-full flex justify-center items-center space-x-10 text-[3rem]">
        <FaInstagram />
        <FaTwitter />
        <FaFacebook />
        <FaLinkedin />
      </div>
      <p className="w-full text-[1rem] flex justify-center items-center">
        © 2024 IndianFooood.com
      </p>
    </footer>
  );
}

export default Footer;
