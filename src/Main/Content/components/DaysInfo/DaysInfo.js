import React from 'react';
import './daysInfo.scss'
import { Item } from "./Item";

// allDays = {
//       monday: false,
//       tuesday: false,
//       wednesday: false,
//       thursday: false,
//       friday: false,
//       saturday: false,
//       sunday: false,
//   }

// const data = { monday: true }



export const DaysInfo = ({ allDays, setAllDays }) => {

      const fu = (data) => {
            setAllDays({ ...allDays, ...data })
      }

      const handleClick = () => {

      }

      return (
            <div className='content-info-days'>
                  <Item
                  lable ="ПН"
                        isChecked={allDays.monday}
                        onClick={() => fu({ monday: !allDays.monday })} />
                  <Item isChecked={allDays.tuesday}
                  lable ="ПН"
                        onClick={() => fu({ tuesday: !allDays.thursday })} />
                  <Item isChecked={allDays.wednesday} 
                  lable ="ПН"/>
                  <Item isChecked={allDays.thursday} 
                  lable ="ПН"/>
                  <Item isChecked={allDays.friday} 
                  lable ="ПН"/>
                  <Item isChecked={allDays.saturday} 
                  lable ="ПН"/>
                  <Item isChecked={allDays.sunday} 
                  lable ="ПН"/>
            </div>
      );
};