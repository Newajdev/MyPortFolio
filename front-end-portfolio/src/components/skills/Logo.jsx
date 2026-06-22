import React from 'react';


const Logo = ({name, img}) => {
    return (
        <>
        <div className='w-40 border inline-block animate-upDown '>
            <h4 className='font-bold text-center'>{name}</h4>
            <img className='h-20 mx-auto' src={img} alt="" />
        </div>
        </>
    );
};

export default Logo;