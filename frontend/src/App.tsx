import React from 'react';
import {Routes, Route} from "react-router-dom";
import FeedbacksPage from "./pages/FeedbacksPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/feedbacks" element={<FeedbacksPage/>}/>
      </Routes>

  );
}
export default App;
