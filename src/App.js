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
          <Route path="/" element={<Home />} redirect to="dashboard" >
            <Route path="dashboard/:type" element={<Dashboard />}  redirect to="all">
            
            </Route>
            <Route path="candidate/:id" element={<CandidateProfile />} >
            
            </Route>
          </Route>

        </Routes>

      </div>
    </Router>

  );
}

export default App;
