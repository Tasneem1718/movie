import './App.css';
import {BrowserRouter as ROuter, Routes, Route} from 'react-router-dom'
import Upcoming from './components/Upcoming';
import Toprated from './components/Toprated';
import Nowplaying from './components/Nowplaying';
import Popular from './components/popular';
import Nav from './components/Nav';
import Err from './components/err';
function App() {
  return (
    <div>
      <ROuter>
        <Routes>
          <Route path='/' element={<Nowplaying />} />
          <Route path='/now' element={<Nowplaying />} />
          <Route path='/upcomming' element={<Upcoming />} />
          <Route path='/rated' element={<Toprated />} />
          <Route path='/popular' element={<Popular />} />
          <Route path='*' element={<Err />} />
        </Routes>
        <Nav/>
      </ROuter>
   </div>
  );
}

export default App;
