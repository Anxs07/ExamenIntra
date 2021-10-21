import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact render={(props) => (
          <>
            {/* <Login /> */}
            
          </>
        )} />
        
      </div>
    </Router>
  );
}

export default App;
