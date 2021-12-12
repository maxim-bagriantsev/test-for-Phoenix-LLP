import React from "react";
import {CloseOutlined} from "@ant-design/icons";
import './header.scss'

export const Header = () => {

    const handleClick = () => {

    }
    return (
        <div className='header'>
            <div className='header-content'>
                <p className='header-title'>Редактирование расписания</p>
                <CloseOutlined
                    onClick={handleClick}/>
            </div>

        </div>
    )
}