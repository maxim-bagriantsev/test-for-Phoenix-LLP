import React, {useState} from 'react';
import './dateInfo.scss';
import './index.css'
import moment from 'moment'
import {Button, Dropdown, Menu, Space} from "antd";
import {DownOutlined, MinusOutlined, PlusOutlined} from "@ant-design/icons";

export const DateInfo = ({
                             typeDate,
                             setTypeDate
                         }) => {
    const [hourAll, setHourAll] = useState(0)

    const handleMenuClick = (e) => {
        setTypeDate(typeDate === 'Академические' ? 'Астрономические' : "Академические")
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
                    <Dropdown overlay={menu} overlayClassName='dropdown'>
                        <Button className='button-dropdown'>
                            <span className='button-title'>
                                 {typeDate}
                            </span>
                            <DownOutlined/>
                        </Button>
                    </Dropdown>
                </Space>
            </div>

            <div className='hours-on-course'>
                <Button type="primary"
                        size='middle'
                        className='button-icon'
                        onClick={() => setHourAll(hourAll === 0 ? 0 : hourAll - 1)}
                >
                    <MinusOutlined/>
                </Button>
                <div className='wrapper-button'>
                    <p className='total-hours'>{hourAll}</p>
                    <p className='total-hours-title'>Всего часов</p>
                </div>
                <Button type="primary"
                        size='middle'
                        className='button-icon'
                        onClick={() => setHourAll(hourAll + 1)}
                >
                    <PlusOutlined/>
                </Button>
            </div>
            <div className='date-on-course'>
                <div className='wrapper-date-on-course'>
                    <span>{moment().format("DD.MM.YYYY")}</span>
                    <span className='date-on-course-title'>до</span>
                    <span>{moment().add(`${hourAll}`, 'days').format("DD.MM.YYYY")}</span>
                </div>
            </div>
        </div>
    );
};

