import logo from './logo.svg';
import './App.css';
import { NavigationBar } from './components/NavigationBar';
import { Footer } from './components/Footer';

import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>





      <NavigationBar></NavigationBar>
      


      <Footer />

    </BrowserRouter>
  );
}

export default App;
