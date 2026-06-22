import Ornament from '../../assets/ornament.png'
import Profile from '../../assets/HeroImage.png'
import qoute from '../../assets/quote-up.png'
import { ReactTyped} from 'react-typed';

const Header = () => {
    return (
        <div className=''>
            <div className="">
                <div >
                    <h1 className='text-3xl lg:text-4xl font-semibold flex flex-col'>
                        I’m Newaj,<br/> MERN Stack Developer
                    </h1> 
                </div>
                <div>
                    <div className='flex flex-col'>
                        <img className='rotate-180 lg:rotate-0 flex w-8' src={qoute} alt=""/>
                        <p className='w-[150px] lg:w-[500px] text-sm text-right lg:text-left lg:text-xl font-semibold'>
                            <ReactTyped strings={['I will Provide seamless MERN stack solutions,turning ideas into high-performing websites.']} typeSpeed={10}/>
                            </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;