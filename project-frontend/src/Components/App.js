import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import NavHeader from './NavHeader'
import CharCreator from './CharCreator'
import User from './User'
import CampCreator from './CampCreator'
import AllCamps from './AllCamps'
import Home from './Home'

function App() {
  return (
    <div className="App">
      <NavHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-char" element={<CharCreator />} />
        <Route path="/user-home" element={<User />} />
        <Route path="/create-camp" element={<CampCreator />} />
        <Route path="/show-camps" element={<AllCamps />} />
      </Routes>
    </div>
  )
}

export default App
