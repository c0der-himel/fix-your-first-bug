import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import EvenNumbers from './components/EvenNumbers';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import OddNumbers from './components/OddNumbers';
import PrimeNumbers from './components/PrimeNumbers';
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
          <Route path="/even-numbers">
            <EvenNumbers />
          </Route>
          <Route path="/prime-numbers">
            <PrimeNumbers />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
