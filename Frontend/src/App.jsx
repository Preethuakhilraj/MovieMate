import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Footer from './Pages/Footer';
import Userdashboard from './Pages/Userdashboard';
import Admindashboard from './Pages/Admindashboard';
// import Privateroutes from './Pages/Privateroutes';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/userdashboard" element={<Userdashboard />} />
          <Route path="/admindashboard" element={<Admindashboard />} />
          {/* <Route element={<Privateroutes />}>
            <Route path="/dashboard" element={<Main child={<Dashboard />} />} />
            <Route path="/form" element={<Main child={<Form />} />} />
          </Route> */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;