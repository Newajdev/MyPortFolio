import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaGithub, FaInstagramSquare, FaLinkedin } from "react-icons/fa";


const SideIcon = () => {
    return (
        <div className="relative z-50">
            <div className="px-4 py-6 bg-base-gray flex-col inline-flex gap-5 text-3xl rounded-full fixed right-5
            top-[50%] -translate-y-2/4">
                <a href="https://github.com/Newajdev" target="_blank"><FaGithub className="hover:text-base hover:cursor-pointer duration-500 "/></a>
                <a href="https://www.linkedin.com/in/muhammad-newaj" target="_blank"><FaLinkedin className="hover:text-base hover:cursor-pointer duration-500 "/></a>
                <a href="https://www.facebook.com/muhammadshalenewaj" target="_blank"><FaFacebook className="hover:text-base hover:cursor-pointer duration-500 "/></a>
                <a href="https://x.com/ms_newaj" target="_blank"><BsTwitterX className="hover:text-base hover:cursor-pointer duration-500 "/></a>
                <a href="https://www.instagram.com/_mdnewaj_" target="_blank"><FaInstagramSquare className="hover:text-base hover:cursor-pointer duration-500 "/></a> 
            </div>
        </div>
    );
};

export default SideIcon;