import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import ListItem from "../navbar/ListItem";
import { FaFacebook, FaGithub, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";


const Footer = () => {
  const { homeRef, aboutRef, projectRef, contactRef } = useContext(AuthContext)

  const hendleNavigate = ref => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <footer className="flex justify-between">
      <ul className='flex gap-6'>
        <ListItem hendleNavigate={hendleNavigate} ItemRef={homeRef} Name={'Home'} Style={"active"}></ListItem>
        <ListItem hendleNavigate={hendleNavigate} ItemRef={aboutRef} Name={'About'}></ListItem>
        <ListItem hendleNavigate={hendleNavigate} ItemRef={projectRef} Name={'Project'}></ListItem>
        <ListItem hendleNavigate={hendleNavigate} ItemRef={contactRef} Name={'Contact'}></ListItem>
      </ul>
      <nav>
        <div className="grid grid-flow-col gap-4 text-2xl">
          <a href="https://github.com/Newajdev" target="_blank"><FaGithub className="hover:text-base hover:cursor-pointer duration-500 " /></a>
          <a href="https://www.linkedin.com/in/muhammad-newaj" target="_blank"><FaLinkedin className="hover:text-base hover:cursor-pointer duration-500 " /></a>
          <a href="https://www.facebook.com/muhammadshalenewaj" target="_blank"><FaFacebook className="hover:text-base hover:cursor-pointer duration-500 " /></a>
          <a href="https://x.com/ms_newaj" target="_blank"><BsTwitterX className="hover:text-base hover:cursor-pointer duration-500 " /></a>
          <a href="https://www.instagram.com/_mdnewaj_" target="_blank"><FaInstagramSquare className="hover:text-base hover:cursor-pointer duration-500 " /></a>
        </div>
      </nav>
      <aside>
        <p>Copyright © {new Date().getFullYear()} - All right reserved by <a className="text-base font-bold" href="newaj.up@gmail.com">Md Shale Newaj</a></p>
      </aside>
    </footer>
  );
};

export default Footer;