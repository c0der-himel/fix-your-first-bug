import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import OddNumbers from './components/OddNumbers';
import SelectPage from './components/SelectPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/select">
            <SelectPage />
          </Route>
          <Route path="/odd-numbers">
            <OddNumbers />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
