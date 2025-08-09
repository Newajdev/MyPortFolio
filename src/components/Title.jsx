
const Title = ({Name, Style}) => {
    return (
        <div >
        <h2 className={`text-5xl font-extrabold  text-center text-${Style}`}>{Name}</h2>
            <div className={`w-[133px] h-[5px] bg-${Style} mx-auto mt-2`}></div>
        </div>
    );
};

export default Title;