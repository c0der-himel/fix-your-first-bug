import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EvenNumbers from './components/pages/numberTheory/EvenNumbers';
import Footer from './components/pages/Footer';
import Home from './components/pages/Home';
import Navbar from './components/pages/Navbar';
import OddNumbers from './components/pages/numberTheory/OddNumbers';
import PrimeNumbers from './components/pages/numberTheory/PrimeNumbers';
import SelectPage from './components/pages/SelectPage';
import Contributors from './components/pages/Contributors';
import PageNotFound from './components/pages/PageNotFound';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/select">
            <SelectPage />
          </Route>
          <Route exact path="/contributors">
            <Contributors />
          </Route>
          <Route exact path="/odd-numbers">
            <OddNumbers />
          </Route>
          <Route exact path="/even-numbers">
            <EvenNumbers />
          </Route>
          <Route exact path="/prime-numbers">
            <PrimeNumbers />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
