import React from 'react';
import './footer.scss'

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-content'>
                <button className='button-cancel'
                >Отмена</button>
                <button className='button-add'>Добавить рассписание</button>
            </div>
        </div>
    );
};

