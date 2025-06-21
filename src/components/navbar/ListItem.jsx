

const ListItem = ({Name, Style}) => {
    return (
        <li className={`text-lg font-semibold  hover:text-[#2B9C7F] duration-500 hover:cursor-pointer ${Style}`}>{Name}</li>
    );
};

export default ListItem;