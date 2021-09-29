import { Container } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import RestaurantDetails from './components/RestaurantDetails';
import {BrowserRouter as Router,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <main className="py-3">
    <Header/>
      <Container>  
        <Route exact path='/' component={Home}/>
        <Route path='/restaurants/:id' component={RestaurantDetails}/>
      </Container>
    </main>
    </Router>
  );
}

export default App;