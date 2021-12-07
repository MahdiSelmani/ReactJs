import Naavbar from './components/Navbar';
import Carouse from './components/Carousel';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Acordion from './components/Accord';
import Figurefn from './components/figure';
import Tablefn from './components/Table';
import Placeholderfn from './components/Placeholder';
import Formfn from './components/form';
function App() {
  return (
    <div className="App">
      <Naavbar />
      <Carouse />
      <Acordion />
      <main>
        <Figurefn />
        <Tablefn />
        <Placeholderfn />
        <Formfn/>
      </main>
      <footer>
        <h6>JAPAN RACING, ALL RIGHTS RESERVED. 2021	&copy;</h6>
      </footer>
    </div>
  )
}

export default App;
