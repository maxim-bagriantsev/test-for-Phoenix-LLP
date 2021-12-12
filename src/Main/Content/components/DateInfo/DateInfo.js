import React from 'react';
import './dateInfo.scss';
import './index.css'
import {Button, Dropdown, Menu, Space} from "antd";
import {DownOutlined} from "@ant-design/icons";

export const DateInfo = () => {

    function handleMenuClick(e) {

    }

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="1">
                Академические
            </Menu.Item>
            <Menu.Item key="2">
                Астрономические
            </Menu.Item>
        </Menu>
    );

    return (
        <div className='content-info-date'>
            <div className='type-watch'>
                <Space wrap>
                    <Dropdown overlay={menu}>
                        <Button>
                            Академические <DownOutlined/>
                        </Button>
                    </Dropdown>
                </Space>
            </div>

            <div className='hours-on-course'>
                <button>-</button>
                <p>3</p>
                <p>Всего часов</p>
                <button>+</button>
            </div>
            <div>
                <span>22.04.2021 до 22.04.2021</span>
            </div>

        </div>
    );
};

