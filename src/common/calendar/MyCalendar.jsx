import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './MyCalendar.css';

class MyCalendar extends Component {
    render() {
        return (
          <div className="App">
            <FullCalendar 
              id="calendar"
              defaultView="dayGridMonth" 
              plugins={[ dayGridPlugin ]}
            />
          </div>
        );
    }
}
export default MyCalendar;