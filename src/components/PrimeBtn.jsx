

const PrimeBtn = ({Title, hendleProjects, style, Active}) => {
    return (
        <button onClick={()=> hendleProjects(Title)} className={`text-lg font-semibold py-2 px-4  rounded-lg hover:bg-[#2B9C7F] hover:text-white duration-300 ${style} ${Active && 'bg-[#2B9C7F] text-white'}`}>{Title}</button>
    );
};

export default PrimeBtn;