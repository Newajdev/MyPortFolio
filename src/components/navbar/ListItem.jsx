

const ListItem = ({Name, Style,hendleNavigate, ItemRef}) => {
    
    return (
        <li onClick={()=> hendleNavigate(ItemRef)} className={`text-lg font-semibold  hover:text-[#2B9C7F] duration-500 hover:cursor-pointer ${Style}`}>{Name}</li>
    );
};

export default ListItem;