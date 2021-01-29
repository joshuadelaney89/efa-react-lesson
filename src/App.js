import './App.css';
// import NameProp from './components/NameProp';
import Contacts from './components/Contacts';
import State from './components/State';

function App() {
  return (
    <div className="App">
      {/* <NameProp name="Joshua" /> */}
      <Contacts name="Joshua" age="31" school="Southside" graduationYear="2008"/>
      <p>------------------------------------</p>
      <State />
    </div>
  );
}



export default App;
