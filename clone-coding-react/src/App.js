import React from 'react'
import ReactDOM from "react-dom/client";
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Main from './main/main.js';
import Host from './host/host';
import List from './list/list';
import Calendar from './detail/calendar';
import Reserve from './reserve/reserve';

import Test from './test.js'
import CalendarTest from './calendarTest';
import RoomInfo from './roominfo/roomInfo';
import GoogleMapTest from './googleMap';
import SearchPage from './search/search-page';
import TestPage from './testPage';
const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/host" element={<Host/>}/>
                <Route path="/list" element={<List/>}/>
                <Route path="/roomInfo" element={<RoomInfo/>}/>
                <Route path="/search" element={<SearchPage/>}/>
                <Route path="/reserve" element={<Reserve/>}/>
            </Routes>
        </BrowserRouter>
        // <Router>
        //     <Routes>
        //         <Route path="/" element={<Main/>}/>
        //         <Route path="/host" element={<Host/>}/>
        //         <Route path="/list" element={<List/>}/>
        //     </Routes>
        // </Router>
        // <Main></Main>
        // <RoomInfo></RoomInfo>
        // <Reserve></Reserve>
        // <Host></Host>
        // <List></List>
        // <SearchPage></SearchPage>
    )
}

export default App;
