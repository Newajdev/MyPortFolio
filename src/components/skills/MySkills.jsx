import Marquee from "react-fast-marquee";
import HTML from '../../assets/html.png'
import CSS from '../../assets/css.png'
import bootstrap from '../../assets/bootstrap.png'
import tailwind from '../../assets/tailwind.png'
import javascript from '../../assets/javascript.png'
import react from '../../assets/react.png'
import firebase from '../../assets/firebase.png'
import node from '../../assets/node.png'
import nextjs from '../../assets/nextjs.png'
import sql from '../../assets/sql.png'
import ex from '../../assets/ex.png'
import mongobd from '../../assets/mongodb.png'
import Title from "../Title";


const MySkills = () => {

    return (
        <div className="">
            <div className="mb-16">
                <Title Name={'My Skills'} Style={'base'}></Title>
            </div>

            <Marquee pauseOnHover  speed={30}>
                <div className="flex gap-44">
                        <div className="h-[250px] flex items-center relative">
                            <div className='w-40 inline-block animate-upDown2'>
                                <h4 className='font-bold text-center'>HTML</h4>
                                <img className='h-20 mx-auto' src={HTML} alt="" />
                            </div>
                        </div>
                    
                        <div className="h-[250px] flex items-center  relative">
                            <div className='w-40 inline-block animate-upDown'>
                                <h4 className='font-bold text-center'>CSS</h4>
                                <img className='h-20 mx-auto' src={CSS} alt="" />
                            </div>
                        </div>
                        <div className="h-[250px] flex items-center relative">
                            <div className='w-40 inline-block animate-upDown2'>
                                <h4 className='font-bold text-center'>Bootstrap</h4>
                                <img className='h-20 mx-auto' src={bootstrap} alt="" />
                            </div>
                        </div>
                    
                        <div className="h-[250px] flex items-center  relative">
                            <div className='w-40 inline-block animate-upDown'>
                                <h4 className='font-bold text-center'>Tailwind</h4>
                                <img className='h-20 mx-auto' src={tailwind} alt="" />
                            </div>
                        </div>
                        <div className="h-[250px] flex items-center relative">
                            <div className='w-40 inline-block animate-upDown2'>
                                <h4 className='font-bold text-center'>JavaScript</h4>
                                <img className='h-20 mx-auto' src={javascript} alt="" />
                            </div>
                        </div>
                    
                        <div className="h-[250px] flex items-center  relative">
                            <div className='w-40 inline-block animate-upDown'>
                                <h4 className='font-bold text-center'>React</h4>
                                <img className='h-20 mx-auto' src={react} alt="" />
                            </div>
                        </div>
                        <div className="h-[250px] flex items-center relative">
                            <div className='w-40 inline-block animate-upDown2'>
                                <h4 className='font-bold text-center'>Node js</h4>
                                <img className='h-20 mx-auto' src={node} alt="" />
                            </div>
                        </div>
                    
                        <div className="h-[250px] flex items-center  relative">
                            <div className='w-40  inline-block animate-upDown'>
                                <h4 className='font-bold text-center'>Next js</h4>
                                <img className='h-20 mx-auto' src={nextjs} alt="" />
                            </div>
                        </div>
                        <div className="h-[250px] flex items-center relative">
                            <div className='w-40  inline-block animate-upDown2'>
                                <h4 className='font-bold text-center'>MongoBD</h4>
                                <img className='h-20 mx-auto' src={mongobd} alt="" />
                            </div>
                        </div>
                    
                        <div className="h-[250px] flex items-center  relative">
                            <div className='w-40  inline-block animate-upDown'>
                                <h4 className='font-bold text-center'>Express js</h4>
                                <img className='h-20 mx-auto' src={ex} alt="" />
                            </div>
                        </div>
                        <div className="h-[250px] flex items-center relative">
                            <div className='w-40  inline-block animate-upDown2'>
                                <h4 className='font-bold text-center'>Firebase</h4>
                                <img className='h-20 mx-auto' src={firebase} alt="" />
                            </div>
                        </div>
                    
                        <div className="h-[250px] flex items-center  relative">
                            <div className='w-40  inline-block animate-upDown'>
                                <h4 className='font-bold text-center'>SQL</h4>
                                <img className='h-20 mx-auto' src={sql} alt="" />
                            </div>
                        </div>
                        <div className="h-[250px] flex items-center relative">
                            <div className='w-40  inline-block animate-upDown2'>
                                <h4 className='font-bold text-center'></h4>
                                <img className='h-20 mx-auto' src="" alt="" />
                            </div>
                        </div>
                    
                        
                    
                </div>

            </Marquee>



        </div>
    );
};

export default MySkills;