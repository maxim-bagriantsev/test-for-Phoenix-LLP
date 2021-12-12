import React, { useState } from 'react';
import './content.scss'
import { SchoolInfo } from "./components/SchoolInfo/SchoolInfo";
import { DateInfo } from "./components/DateInfo/DateInfo";
import { DaysInfo } from "./components/DaysInfo/DaysInfo";
import { PauseInfo } from "./components/PauseInfo/PauseInfo";
import { TeacherInfo } from "./components/TeacherInfo/TeacherInfo";
import { Node } from "./components/Node/Node";

export const Content = (props) => {
    const [typeDate, setTypeDate] = useState('Академические')
    const [allDays, setAllDays] = useState(
        {
            monday: false,
            tuesday: false,
            wednesday: false,
            thursday: false,
            friday: false,
            saturday: false,
            sunday: false,
        })



    return (
        <div className='content'>
            <SchoolInfo />
            <DateInfo
                typeDate={typeDate}
                setTypeDate={setTypeDate}
            />
            <DaysInfo
                allDays={allDays}
                setAllDays={setAllDays}
            />
            <PauseInfo
                typeDate={typeDate}
            />
            <TeacherInfo />
            <Node />
        </div>
    );
};

