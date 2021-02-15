import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import EvenNumbers from './components/layers/EvenNumbers';
import Footer from './components/layers/Footer';
import Home from './components/layers/Home';
import Navbar from './components/layers/Navbar';
import OddNumbers from './components/layers/OddNumbers';
import PrimeNumbers from './components/layers/PrimeNumbers';
import SelectPage from './components/layers/SelectPage';

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
