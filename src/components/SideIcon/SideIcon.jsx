import { FaFacebook, FaGithub, FaInstagramSquare, FaLinkedin, FaTwitter } from "react-icons/fa";


const SideIcon = () => {
    return (
        <div className="relative">
            <div className="px-4 py-6 bg-base-gray flex-col inline-flex gap-5 text-3xl rounded-full fixed right-5 ">
                <FaGithub className="hover:text-base hover:cursor-pointer duration-500 "/>
                <FaLinkedin className="hover:text-base hover:cursor-pointer duration-500 "/>
                <FaFacebook className="hover:text-base hover:cursor-pointer duration-500 "/>
                <FaTwitter className="hover:text-base hover:cursor-pointer duration-500 "/>
                <FaInstagramSquare className="hover:text-base hover:cursor-pointer duration-500 "/>
            </div>
        </div>
    );
};

export default SideIcon;