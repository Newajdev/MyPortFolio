import { NavLink } from 'react-router-dom';
import Profile_Logo from '../../assets/Profile logo.png'
import { FaRProject } from 'react-icons/fa';
import { GoProject, GoProjectSymlink } from 'react-icons/go';
import { MdOutlineMessage } from 'react-icons/md';

const DeshboardNavbar = () => {
    return (
        <div className='p-2 mt-1 bg-[#2B9C7F] rounded-full flex items-center justify-between'>
                <div className='flex items-center hover:cursor-pointer '>
                    <img src={Profile_Logo} alt="" />
                    <h3 className='Irish text-4xl text-white ml-6'>Newaj</h3>
                </div>

                <div>
                    <ul className='flex text-white items-center gap-6 mr-6'>
                        <NavLink to={'/deshboard/addproject'}><li className='text-white text-xl flex items-center gap-2'><GoProjectSymlink /> Add Projects</li></NavLink>
                        <NavLink to={'/deshboard/manageprojects'}><li className='text-white text-xl flex items-center gap-2'><GoProject /> Manage Projects</li></NavLink>
                        <NavLink to={'/deshboard/inbox'}><li className='text-white text-xl flex items-center gap-2'><MdOutlineMessage />Check Messages</li></NavLink>
                    </ul>
                </div>
            </div>
    );
};

export default DeshboardNavbar;