import './App.css';
import Header from './components/Header';
import Challenge from './components/challenges/day01/Challenge';
import Footer from './components/challenges/day01/Footer';
import Home from './components/challenges/day01/Home';

function App() {
const name = "Joshua"

  return (
    <div className="App">
      <h1>Welcome to React, {name}</h1>
      <h2>We just modified our root App component</h2>
      <Header />
      <Challenge />
      <Home />
      <Footer />
    </div>
  );
}



export default App;
