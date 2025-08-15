import { FaArrowRight } from 'react-icons/fa';
import Project_view from '../../assets/projects_preview.png'

const Project = ({ items }) => {
    const { LiveLink, category, projectImg, projectName } = items;

    return (
        <a className='border p-2 group-hover:py-4 duration-500 rounded-2xl border-gray-200 hover:bg-[#2B9C7F] lg:text-white z-20 group ' href={LiveLink} target='_blank'>
            <div className='w-full z-10'>
                <img className='rounded-xl' src={projectImg} alt="" />
            </div>
            
            <div className='py-3 mt-2 lg:-mt-20 lg:invisible lg:opacity-0 group-hover:visible group-hover:mt-0 group-hover:opacity-100 duration-500 z-5'>
                <h2 className='text-xl font-semibold z-5'>{projectName}</h2>
                <p className='text-sm font-medium mt-2 z-5' >{category}</p>
            </div>
        </a>
    );
};

export default Project; 