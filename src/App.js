import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import CandidateProfile from './components/CandidatePage/CandidatePage';

// components



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} redirect to="dashboard/all" >
            <Route path="dashboard/all" element={<Dashboard type="all"></Dashboard>}></Route>
            <Route path="dashboard/pool" element={<Dashboard type="pool"></Dashboard>}></Route>
            <Route path="dashboard/shortlisted" element={<Dashboard type="shortlisted"></Dashboard>}></Route>
            <Route path="dashboard/rejected" element={<Dashboard type="rejected"></Dashboard>}></Route>
            <Route path="dashboard/candidate/:id" element={<CandidateProfile />} ></Route>
          </Route>

        </Routes>

      </div>
    </Router>

  );
}

export default App;
