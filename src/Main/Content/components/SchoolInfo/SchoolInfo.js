import React from 'react';
import './schoolInfo.scss'
import 'antd/dist/antd.css';
import './index.css';
import {Button, Dropdown, Menu, Space, message} from "antd";
import {DownOutlined, UserOutlined} from "@ant-design/icons";


export const SchoolInfo = () => {

    function handleMenuClick(e) {
    }

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="1">
                красный
            </Menu.Item>
            <Menu.Item key="2">
                синий
            </Menu.Item>
            <Menu.Item key="3">
                серый
            </Menu.Item>
        </Menu>
    );

    return (
        <div className='content-info-school'>
            <div className='school-name'>
                <p className='name-title'>Онлайн школа</p>
            </div>

            <div className='school-color'>
                <span className='group-color'>Цвет группы:</span>
                <div>
                    <Space wrap>
                        <Dropdown overlay={menu}>
                            <Button className='button-color'>
                                <div className='box-select-color'/>
                                <DownOutlined/>
                            </Button>
                        </Dropdown>
                    </Space>
                </div>
            </div>


        </div>
    );
};

