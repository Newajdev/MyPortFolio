import { FaFacebook, FaGithub, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { NavLink } from "react-router-dom";


const Footer = () => {
  

  const navlinks = [
    {
      title: 'Works',
      path: '/'
    },
    {
      title: 'About',
      path: '/about'
    },
    {
      title: 'Contact',
      path: '/contact'
    },
    {
      title: 'Resume',
      path: '/resume'
    },
  ]
  return (
    <footer className="flex-col gap-6 flex items-center lg:justify-between text-white pb-20">
      <ul className='flex gap-x-6 text-xl'>
        {
          navlinks?.map(({ title, path }) =>
            <li key={path}>
              <NavLink to={path}>{title}</NavLink>
            </li>
          )
        }
      </ul>
      <nav>
        <div className="flex gap-2 lg:gap-4 text-2xl">
          <a href="https://github.com/Newajdev" target="_blank"><FaGithub className="hover:text-orange-300 hover:cursor-pointer duration-500 " /></a>
          <a href="https://www.linkedin.com/in/muhammad-newaj" target="_blank"><FaLinkedin className="hover:text-orange-300 hover:cursor-pointer duration-500 " /></a>
          <a href="https://www.facebook.com/muhammadshalenewaj" target="_blank"><FaFacebook className="hover:text-orange-300 hover:cursor-pointer duration-500 " /></a>
          <a href="https://x.com/ms_newaj" target="_blank"><BsTwitterX className="hover:text-orange-300 hover:cursor-pointer duration-500 " /></a>
          <a href="https://www.instagram.com/_mdnewaj_" target="_blank"><FaInstagramSquare className="hover:text-orange-300 hover:cursor-pointer duration-500 " /></a>
        </div>
      </nav>
      <aside>
        <p className="lg:block flex flex-col items-center">Copyright © {new Date().getFullYear()} - All right reserved by <a className="font-bold" href="newaj.gra@gmail.com">Md Shale Newaj</a></p>
      </aside>
    </footer>
  );
};

export default Footer;