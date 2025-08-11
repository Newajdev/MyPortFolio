import { HiDownload } from 'react-icons/hi';
import Profile_Logo from '../../assets/Profile logo.png'
import ListItem from './ListItem';
import { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { RiMenu4Line } from 'react-icons/ri';

const Navbar = () => {
    const { homeRef, aboutRef, projectRef, contactRef } = useContext(AuthContext)

    const hendleNavigate = ref => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    }

    const [hidden, setHidden] = useState(false)

    return (
        <div className=''>
            <div className="bg-[#D9D9D9] md:rounded-full px-4 py-2.5 flex items-center justify-between">
                <div className='flex items-center hover:cursor-pointer ' onClick={() => hendleNavigate(homeRef)}>
                    <img src={Profile_Logo} alt="" />
                    <h3 className='Irish text-4xl text-[#454545] ml-6'>Newaj</h3>
                </div>
                <ul className='hidden md:flex gap-6'>
                    <ListItem hendleNavigate={hendleNavigate} ItemRef={homeRef} Name={'Home'} Style={"active"}></ListItem>
                    <ListItem hendleNavigate={hendleNavigate} ItemRef={aboutRef} Name={'About'}></ListItem>
                    <ListItem hendleNavigate={hendleNavigate} ItemRef={projectRef} Name={'Project'}></ListItem>
                    <ListItem hendleNavigate={hendleNavigate} ItemRef={contactRef} Name={'Contact'}></ListItem>
                </ul>
                <div className='flex items-center gap-2'>
                    {/* Mobile Screen */}
                <div className='relative'>
                    <div onClick={()=> setHidden(!hidden)} className='bg-[#2B9C7F] px-2 py-2 rounded-full text-white text-xl lg:hidden'><RiMenu4Line /></div>
                    {
                        hidden && <ul className='absolute top-12 right-0 shadow-2xl bg-white p-3 z-10 lg:hidden flex flex-col gap-3'>
                        <ListItem hendleNavigate={hendleNavigate} ItemRef={homeRef} Name={'Home'} Style={"active"}></ListItem>
                        <ListItem hendleNavigate={hendleNavigate} ItemRef={aboutRef} Name={'About'}></ListItem>
                        <ListItem hendleNavigate={hendleNavigate} ItemRef={projectRef} Name={'Project'}></ListItem>
                        <ListItem hendleNavigate={hendleNavigate} ItemRef={contactRef} Name={'Contact'}></ListItem>
                    </ul>
                    }
                    
                </div>
                {/* Mobile Screen */}
                <div className=' lg:p-1 bg-transparent hover:bg-[#56F5CD] duration-1000 rounded-full'>
                    <div className='lg:p-1 bg-transparent hover:bg-[#45C7A6] duration-500 rounded-full'>
                        <a href="/cv.pdf" download={'Newaj_CV.pdf'}>
                            <button className='flex items-center gap-3 bg-[#2B9C7F] lg:px-7 px-2 py-2 rounded-full text-white text-xl font-semibold hover:cursor-pointer'><HiDownload /><span className='hidden md:block'>Download CV</span></button>
                        </a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;