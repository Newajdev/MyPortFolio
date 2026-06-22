

const PrimeBtn = ({Title, hendleProjects, style, Active}) => {
    return (
        <button onClick={()=> hendleProjects(Title)} className={`text-sm lg:text-lg font-semibold py-2 px-4  rounded-lg   ${style} ${ Active === Title ? 'bg-white text-black': 'text-white'}`}>{Title}</button>
    );
};

export default PrimeBtn;