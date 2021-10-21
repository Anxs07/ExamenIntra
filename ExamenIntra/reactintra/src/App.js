import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'

function App() {
  return (
    <Router>
      <div className="container">
        <Route path="/" exact render={(props) => (
          <>
            {/* <Login /> */}
            <Home/>
          </>
        )} />
        
      </div>
    </Router>
  );
}

export default App;
