import React, {useState} from 'react';
import './content.scss'
import {SchoolInfo} from "./components/SchoolInfo/SchoolInfo";
import {DateInfo} from "./components/DateInfo/DateInfo";
import {DaysInfo} from "./components/DaysInfo/DaysInfo";
import {PauseInfo} from "./components/PauseInfo/PauseInfo";
import {TeacherInfo} from "./components/TeacherInfo/TeacherInfo";
import {Node} from "./components/Node/Node";

export const Content = (props) => {
    const [typeDate, setTypeDate] = useState('Академические')

    return (
        <div className='content'>
            <SchoolInfo/>
            <DateInfo typeDate={typeDate}
                      setTypeDate={setTypeDate}
            />
            <DaysInfo/>
            <PauseInfo typeDate={typeDate}
            />
            <TeacherInfo/>
            <Node/>
        </div>
    );
};

