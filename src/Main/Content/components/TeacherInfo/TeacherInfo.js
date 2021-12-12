import React from 'react';
import './teacherInfo.scss'
import './index.css'
import {Button, Dropdown, Menu, Space} from "antd";
import {DownOutlined} from "@ant-design/icons";

export const TeacherInfo = () => {

    function handleMenuClick(e) {

    }

    const menu = (
        <Menu onClick={handleMenuClick}>

        </Menu>
    );
    return (
        <div className='teacher-info'>

            <div className='type-teacher'>
                <Space wrap>
                    <Dropdown overlay={menu} overlayClassName='dropdown'>
                        <Button className='button-dropdown-teacher'>
                            <span className='button-title'>
                                 Выберете преподавателя на это время
                            </span>
                            <DownOutlined/>
                        </Button>
                    </Dropdown>
                </Space>
            </div>

                <div className='type-pause'>
                <Space wrap>
                    <Dropdown overlay={menu} overlayClassName='dropdown'>
                        <Button className='button-dropdown-pause'>
                            <span className='button-title'>
                                 Аудитория
                            </span>
                            <DownOutlined/>
                        </Button>
                    </Dropdown>
                </Space>
            </div>

        </div>
    );
};

