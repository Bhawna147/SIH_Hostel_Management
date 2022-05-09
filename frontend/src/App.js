import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Main from "./components/Main";
import HostelPage from "./components/HostelPage";
import StudentDetails from "./components/StudentDetails";
const App = () => {
  
return (
  <Router>
    <Routes>

    <Route exact path="/" element={<Main />}></Route>
    <Route exact path="/hostelPage" element={<HostelPage/>}></Route>
    <Route exact path="/studentDetails" element={<StudentDetails/>}></Route>


    </Routes>
    </Router>
  );
};

export default App;

