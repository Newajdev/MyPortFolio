import Ornament from '../../assets/ornament.png'
import Profile from '../../assets/HeroImage.png'
import qoute from '../../assets/quote-up.png'
import { ReactTyped} from 'react-typed';

const Header = () => {
    return (
        <div className='h-[565px] lg:h-[779px]'>
            <div className=''>
                <div className='relative'>
                    <h1 className='text-3xl lg:text-8xl font-semibold text-center lg:leading-24 mt-6 lg:mt-14 flex flex-col'><span>I’m <span className='text-base'>Newaj,</span></span>
                    <ReactTyped strings={['MERN Stack Developer']} typeSpeed={60} /></h1>

                    <img className='absolute top-[-15px] lg:top-[-20px] right-[100px] lg:right-[380px] w-8 lg:w-10 rotate-180' src={Ornament} alt="" />

                    <img className='absolute top-[50px] lg:top-[180px] left-[8px] lg:left-[30px] w-12 lg:w-20' src={Ornament} alt="" />
                </div>
                <div className='relative'>
                    <img className='absolute -top-4 lg:-top-16 right-2/4 translate-x-2/4' src={Profile} alt="" />
                </div>
                <div className='relative'>
                    <div className='absolute top-6 lg:top-32 lg:left-0 right-5 lg:block flex flex-col items-end'>
                        <img className='rotate-180 lg:rotate-0 flex w-8' src={qoute} alt="" />
                        <p className='w-[150px] lg:w-[500px] text-sm text-right lg:text-left lg:text-xl font-semibold'>
                            <ReactTyped strings={['I will Provide seamless MERN stack solutions,turning ideas into high-performing websites.']} typeSpeed={10} />
                            </p>
                    </div>
                </div>


            </div>


        </div>
    );
};

export default Header;