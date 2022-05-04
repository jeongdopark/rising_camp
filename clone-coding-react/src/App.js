import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from './main/main.js';
import Host from './host/host';
import List from './list/list';
import Calendar from './detail/calendar';
import Reserve from './reserve/reserve';

import Test from './test.js'
import CalendarTest from './calendarTest';
import RoomInfo from './roominfo/roomInfo';
const App = () => {
    return(
        // <Router>
        //     <Routes>
        //         <Route path="/" element={<Main/>}/>
        //         <Route path="/host" element={<Host/>}/>
        //         <Route path="/list" element={<List/>}/>
        //     </Routes>
        // </Router>
        <RoomInfo></RoomInfo>

    )
}

export default App;
