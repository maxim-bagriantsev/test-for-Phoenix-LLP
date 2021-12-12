import React from 'react';

export const Item = ({isChecked, onClick, lable}) => {

    const className = isChecked ? 'content-info-days-button-active' : 'content-info-days-button'

    return (
        <>
            <button className={isChecked ? className : 'content-info-days-button'}
                    onClick={onClick}
            >
                <p className='days-button-title'>{lable}</p>
            </button>
        </>
    )
};

