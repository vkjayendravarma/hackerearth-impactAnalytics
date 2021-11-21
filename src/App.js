import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './pages/Home/Home';

// components




function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} >
            <Route path="/dashboard" element={<Dashboard />} >
            
            </Route>
          </Route>

        </Routes>

      </div>
    </Router>

  );
}

export default App;
