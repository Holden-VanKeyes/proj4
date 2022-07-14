import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage'
import CharCreator from './Character/CharCreator'
import CampCreator from './Campaign/CampCreator'
import AllCamps from './Campaign/AllCamps'
import LoginContainer from './LandingPage/LoginContainer'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <div className='link'>
              <Link to="/" style={{ 
                textDecoration: 'none',
                color: 'rgb(115, 34, 191)',  
                }}>Home</Link>
          </div>
          <div className='link'>
              <Link to="/Character/CharCreator" style={{ 
                textDecoration: 'none',
                color: 'rgb(115, 34, 191)', 
                }}>New Character</Link>
          </div>
          <div className='link'>
              <Link to="/Campaign/CampCreator" style={{ 
                textDecoration: 'none',
                color: 'rgb(115, 34, 191)', 
                }}>New Campaign</Link>
          </div>
          <div className='link'>
              <Link to="/Campaign/AllCamps" style={{ 
                textDecoration: 'none',
                color: 'rgb(115, 34, 191)', 
                }}>Campaigns</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/Character/CharCreator" element={<CharCreator />} />
          <Route path="/Campaign/CampCreator" element={<CampCreator />} />
          <Route path="/Campaign/AllCamps" element={<AllCamps />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
