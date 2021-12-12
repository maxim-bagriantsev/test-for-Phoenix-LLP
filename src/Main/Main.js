import React from 'react';
import './main.scss'
import {Header} from "./Header/Header";
import {Content} from "./Content/Content";
import {Footer} from "./Footer/Footer";

export const Main = () => {
    return (
        <div className='main'>
            <div className='main-content'>
                <div className='wrapper'>
                    <Header/>
                    <Content/>
                    <Footer/>
                </div>
            </div>
        </div>
    );
};

