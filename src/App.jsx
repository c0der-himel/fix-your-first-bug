import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import EvenNumbers from './components/pages/numberTheory/EvenNumbers';
import Footer from './components/pages/Footer';
import Home from './components/pages/Home';
import Navbar from './components/pages/Navbar';
import OddNumbers from './components/pages/numberTheory/OddNumbers';
import PrimeNumbers from './components/pages/numberTheory/PrimeNumbers';
import SelectPage from './components/pages/SelectPage';

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
