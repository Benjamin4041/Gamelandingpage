import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import Comments from './components/comments';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/test' element={<Comments/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
