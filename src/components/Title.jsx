import React from 'react';

const Title = ({Name, Style}) => {
    return (
        <div >
        <h2 className={`text-5xl font-extrabold  text-center text-${Style}`}>{Name}</h2>
            <div className={`w-[133px] h-[5px] bg-${Style} mx-auto`}></div>
        </div>
    );
};

export default Title;