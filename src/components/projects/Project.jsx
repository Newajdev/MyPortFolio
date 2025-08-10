import { FaArrowRight } from 'react-icons/fa';
import Project_view from '../../assets/projects_preview.png'

const Project = ({items}) => {
    const {LiveLink,category, projectImg, projectName} = items;
    
    return (
        <a className='border p-4 rounded-2xl border-gray-200 hover:bg-gray-100' href={LiveLink} target='_blank'>
            <div className='w-full '>
                <div className='w-full'>
                    <img className='rounded-xl' src={projectImg} alt="" />
                </div>
                <div className='py-3'>
                    <h2 className='text-xl font-semibold'>{projectName}</h2>
                    <p className='text-sm font-medium mt-2'>{category}</p>
                </div>
            </div>
        </a>
    );
};

export default Project; 