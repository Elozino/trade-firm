import './App.css'
import Home from './Pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import About from './Pages/About/About'
import Affiliate from './Pages/Affiliate/Affiliate'
import FAQs from './Pages/FAQs/FAQs'
import Terms from './Pages/Terms/Terms'
import Dashboard from './Pages/Dashboard/Dashboard'
import SignIn from './Pages/Auth/SignIn'
import SignUp from './Pages/Auth/SignUp'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/affiliate" element={<Affiliate />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App
