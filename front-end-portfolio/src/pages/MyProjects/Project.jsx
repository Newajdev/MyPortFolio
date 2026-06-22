const Project = ({ items }) => {
    const { LiveLink, category, projectImg, projectName } = items;

    return (
        <a className='border p-2  rounded-2xl bg-[#0000003e] border-gray-200 text-white ' href={LiveLink} target='_blank'>
            <div className='w-full'>
                <img className='rounded-xl' src={projectImg} alt="" />
            </div>
            
            <div className='py-3 mt-2'>
                <h2 className='text-xl font-semibold '>{projectName}</h2>
                <p className='text-sm font-medium mt-2 ' >{category}</p>
            </div>
        </a>
    );
};

export default Project; 