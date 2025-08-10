import { HiDownload } from 'react-icons/hi';
import Profile_Logo from '../../assets/Profile logo.png'
import ListItem from './ListItem';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const Navbar = () => {
    const { homeRef, aboutRef, projectRef, contactRef } = useContext(AuthContext)

    const hendleNavigate = ref => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div className=''>
            <div className="bg-[#D9D9D9] rounded-full px-4 py-2.5 flex items-center justify-between">
                <div className='flex items-center hover:cursor-pointer ' onClick={() => hendleNavigate(homeRef)}>
                    <img src={Profile_Logo} alt="" />
                    <h3 className='Irish text-4xl text-[#454545] ml-6'>Newaj</h3>
                </div>
                <ul className='flex gap-6'>
                    <ListItem hendleNavigate={hendleNavigate} ItemRef={homeRef} Name={'Home'} Style={"active"}></ListItem>
                    <ListItem hendleNavigate={hendleNavigate} ItemRef={aboutRef} Name={'About'}></ListItem>
                    <ListItem hendleNavigate={hendleNavigate} ItemRef={projectRef} Name={'Project'}></ListItem>
                    <ListItem hendleNavigate={hendleNavigate} ItemRef={contactRef} Name={'Contact'}></ListItem>
                </ul>
                <div className='p-1 bg-transparent hover:bg-[#56F5CD] duration-1000 rounded-full'>
                    <div className='p-1 bg-transparent hover:bg-[#45C7A6] duration-500 rounded-full'>
                        <button className='flex items-center gap-3 bg-[#2B9C7F] px-3 py-2 rounded-full text-white text-xl font-semibold hover:cursor-pointer'><HiDownload />Download Resume</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;