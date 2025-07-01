import { FaArrowRight } from 'react-icons/fa';
import Project_view from '../../assets/projects_preview.png'
const Project = () => {
    return (
        <div className="rounded-3xl  w-[590px] h-[346px] mt-12 relative hover:cursor-pointer project ">
            <div className='w-[590px] h-[0px]  bg-linear-to-b to-[#2B9C7F] absolute   opacity-0 duration-500 rounded-3xl info px-8 pt-16'>
                <h3 className='text-5xl font-bold text-base '>Lirante</h3>
               <p className="font-medium text-xl mt-6 text-black">Here you’ll find a collection of personal and client projects, each accompanied by a detailed case study highlighting the development process, challenges, and solutions.</p>
            </div>
            <img className="w-[590px] h-[346px] rounded-3xl" src={Project_view} alt="" />
            <FaArrowRight className='absolute top-0 right-0 m-6 border-2 p-2 rounded-full text-white text-5xl hover:border-transparent hover:bg-base hover:text-white duration-500'/>
            
            <div className='w-[590px] h-[25%]  bg-linear-to-b to-gray-800 absolute bottom-0 left-0 duration-500 rounded-3xl title opacity-100'>
                <h3 className='text-6xl font-bold px-6 text-white '>Lirante</h3>
            </div>

        </div>
    );
};

export default Project;