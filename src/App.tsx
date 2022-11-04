import './App.css';
import Home from './Pages/Home';
import {BrowserRouter as Router ,Routes,Route,useNavigate} from 'react-router-dom'
import Users from './Pages/Users';
import Weather from './Pages/Weather';
function App() { 
  // const navigate = useNavigate();
return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path='/' exact element={() => navigate('/add-Users')} /> */}
          <Route path='/Add User' element={<Home />}/>
          <Route path='/Users' element={<Users />}/>
          <Route path='/Weather' element={<Weather />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
