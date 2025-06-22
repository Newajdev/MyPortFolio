const Info = ({title, information}) => {
    return (
        <div className="text-center">
            <h3 className="font-semibold text-lg text-[#E1FF00]">{title}</h3>
            <h3 className="font-medium text-lg text-white">{information}</h3>
        </div>
    );
};

export default Info;