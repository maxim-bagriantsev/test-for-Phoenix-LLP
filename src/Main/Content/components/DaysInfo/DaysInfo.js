import React from 'react';
import './daysInfo.scss'
import {Item} from "./Item/Item";

export const DaysInfo = ({allDays, setAllDays}) => {

    const fu = (data) => {
        setAllDays({...allDays, ...data})
    }
    console.log(allDays)

    return (
        <div className='content-info-days'>
            <Item
                lable="ПН/СР/ПТ"
                isChecked={allDays.mondayWednesdayFriday}
                onClick={() => fu({
                    mondayWednesdayFriday: !allDays.mondayWednesdayFriday,
                    monday: !allDays.monday,
                    wednesday: !allDays.wednesday,
                    friday: !allDays.friday,
                })}
            />
            <Item
                lable="ВТ/ЧТ"
                isChecked={allDays.tuesdayThursday}
                onClick={() => fu({
                    tuesdayThursday: !allDays.tuesdayThursday,
                    tuesday: !allDays.tuesday,
                    thursday: !allDays.thursday,
                })}
            />
            <Item
                lable="ПН"
                isChecked={allDays.monday}
                onClick={() => fu({
                    monday: !allDays.monday,
                })}
            />
            <Item
                lable="ВТ"
                isChecked={allDays.tuesday}
                onClick={() => fu({
                    tuesday: !allDays.tuesday,
                })}
            />
            <Item
                lable="СР"
                isChecked={allDays.wednesday}
                onClick={() => fu({
                    wednesday: !allDays.wednesday,
                })}
            />
            <Item
                lable="ЧТ"
                isChecked={allDays.thursday}
                onClick={() => fu({
                    thursday: !allDays.thursday,
                })}
            />
            <Item
                lable="ПТ"
                isChecked={allDays.friday}
                onClick={() => fu({
                    friday: !allDays.friday,
                })}
            />
            <Item
                lable="СБ"
                isChecked={allDays.saturday}
                onClick={() => fu({
                    saturday: !allDays.saturday,
                })}
            />
            <Item
                lable="ВС"
                isChecked={allDays.sunday}
                onClick={() => fu({
                    sunday: !allDays.sunday
                })}
            />
        </div>
    );
};