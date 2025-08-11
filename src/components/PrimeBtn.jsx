

const PrimeBtn = ({Title, hendleProjects, style, Active}) => {
    return (
        <button onClick={()=> hendleProjects(Title)} className={`text-sm lg:text-lg font-semibold py-2 px-4  rounded-lg hover:bg-base hover:text-white duration-300 ${style} ${ Active === Title ? 'bg-base text-white': ''}`}>{Title}</button>
    );
};

export default PrimeBtn;