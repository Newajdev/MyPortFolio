import Ornament from '../../assets/ornament.png'
import Profile from '../../assets/HeroImage.png'
import qoute from '../../assets/quote-up.png'

const Header = () => {
    return (
        <div className='h-[779px]'>
            <div className=''>
            <div className='relative'>
                <h1 className='text-8xl font-semibold text-center leading-24 mt-14 flex flex-col'><span>I’m <span className='text-base'>Newaj,</span></span>MERN Stack Developer</h1>
                <img className='absolute top-[-20px] right-[380px] w-10 rotate-180' src={Ornament} alt="" />
                <img className='absolute top-[180px] left-[30px] w-20' src={Ornament} alt="" />
            </div>
            <div className='relative '>
                <img className='absolute -top-16 right-2/4 translate-x-2/4' src={Profile} alt="" />
            </div>
            <div className='relative '>
                <div className='absolute top-32'>
                    <img src={qoute} alt="" />
                    <p className='w-[500px] text-xl font-semibold'>I will Provide seamless MERN stack solutions,turning ideas into high-performing websites.</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Header;