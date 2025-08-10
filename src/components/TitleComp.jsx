
const TitleComp = ({Style,Name }) => {
    return (
        <h2 className={`text-5xl font-extrabold  text-center text-${Style}`}>{Name}</h2>
    );
};

export default TitleComp;