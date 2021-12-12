import {Button, Dropdown, Menu, Space} from "antd";
import {DownOutlined, MinusOutlined, PlusOutlined} from "@ant-design/icons";
import React, {useEffect, useState} from "react";
import './pauseInfo.scss'
import './index.css'
import {pauseAll} from "./constants";
import moment from "moment";

export const PauseInfo = ({
                              typeDate,
                          }) => {
    const [hourOnDay, setHourOnDay] = useState(1)
    const [timeEndAcadem, setTimeEndAcadem] = useState('07:45')
    const [timeEndAstra, setTimeEndAstra] = useState('08:00')

    function handleMenuClick(e) {

    }

    useEffect(() => {

    }, [hourOnDay])

    const result = pauseAll.map((item) => {
        return (
            <Menu.Item key={item.id}>
                {item.value}
            </Menu.Item>
        )
    })

    const menu = (
        <Menu onClick={handleMenuClick}>
            {result}
        </Menu>
    );

    const startTime = '07:00'
    const endTime = moment().add(45, 'minute')

    console.log(startTime)

    return (
        <div className='content-info-date'>
            <div className='type-pause'>
                <Space wrap>
                    <Dropdown overlay={menu} overlayClassName='dropdown'>
                        <Button className='button-dropdown-pause'>
                            <span className='button-title'>
                                 без перерыва
                            </span>
                            <DownOutlined/>
                        </Button>
                    </Dropdown>
                </Space>
            </div>

            <div className='hours-on-course'>
                <Button type="primary" size='middle'
                        className='button-icon'
                        onClick={() => setHourOnDay(hourOnDay === 1 ? 1 : hourOnDay - 1)}
                >
                    <MinusOutlined/>
                </Button>
                <div className='wrapper-button'>
                    <p className='total-hours'>{hourOnDay}</p>
                    <p className='total-hours-title'>Часов в день</p>
                </div>
                <Button type="primary"
                        size='middle'
                        className='button-icon'
                        onClick={() => setHourOnDay(hourOnDay + 1)}>
                    <PlusOutlined/>
                </Button>
            </div>
            <div className='date-on-course'>
                <div className='wrapper-date-on-course'>
                    {/*<span>{timeStart}</span>*/}
                    <span>{startTime}</span>
                    <span className='date-on-course-title'>до</span>
                    <span>{typeDate === 'Академические' ? timeEndAcadem : timeEndAstra}</span>
                    {/*/!*<span>{moment().add(typeDate === 'Академические' ? `${hourOnDay}` : `${hourOnDay * 60 - (hourOnDay * 60 / 4)}`, "hours").format('hh:mm')}</span>*!/*/}
                    {/*<span>{typeDate === 'Академические' ? moment().add(`${hourOnDay * 45}`, 'minutes').format('hh:mm') : moment().add(`${hourOnDay}`, 'hours').format('hh:mm')}</span>*/}
                </div>
            </div>
        </div>
    );
};