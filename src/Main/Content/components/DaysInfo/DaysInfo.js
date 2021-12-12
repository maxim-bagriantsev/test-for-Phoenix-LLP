import React, {useState} from 'react';
import './daysInfo.scss'
import {Item} from "./Item";
import {
    friday,
    monday,
    mondayWednesdayFriday,
    saturday,
    sunday,
    thursday,
    tuesday,
    tuesdayThursday,
    wednesday
} from "./constants";

export const DaysInfo = (props) => {


    return (
        <div className='content-info-days'>
            <Item lable={mondayWednesdayFriday}/>
            <Item lable={tuesdayThursday}/>
            <Item lable={monday}/>
            <Item lable={tuesday}/>
            <Item lable={wednesday}/>
            <Item lable={thursday}/>
            <Item lable={friday}/>
            <Item lable={saturday}/>
            <Item lable={sunday}/>

        </div>
    );
};