// import React, { useState } from 'react';
// import calendar from 'react-calendar';
// // import '../Calender/calendar.css';

// export default function Calendar() {
// const [value, onChange] = useState(new Date());

// return (
// 	<div className='calendar'>
// 	<h1>Calendar </h1>
// 	<Calendar
// 		onChange={onChange}
// 		value={value}
// 	/>
// 	</div>
// );
// }

import Calendar from 'react-calendar';
import '../Calender/calender.css';
export default function calendar(){
    return (
        <>
        <div className='calender'>
            <hr/>
            <h4>Calendar</h4>
            <Calendar/>
        </div>
        </>
    )
}