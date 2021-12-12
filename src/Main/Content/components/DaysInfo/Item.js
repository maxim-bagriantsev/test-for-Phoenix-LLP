import React, {useState} from 'react';
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

export const Item = (props) => {
    const [isActived, setIsActived] = useState(false)
    const [selectedMonday, setSelectedMonday] = useState(null)

    const className = isActived ? 'content-info-days-button-active' : 'content-info-days-button'

    const handleSelect = () => {
        if (!isActived) {
            setIsActived(true)
        }
        if (isActived) {
            setIsActived(false)
        }
    }
    console.log(selectedMonday)

    return (
        <>
            <button className={isActived ? className : 'content-info-days-button'}
                    onClick={handleSelect}
            >
                <p className='days-button-title'>{props.lable}</p>
            </button>
        </>
    )
};

