import './App.css';
import MyComponent from './Components/MyComponent';
import OtherComponent from './Components/OtherComponent';
import PetInfo from './Components/PetInfo';
import RandomNumber from './Components/RandomNumber';

function App() {
  return (
    <div className="App">
      <MyComponent />
      <OtherComponent />
      <PetInfo hasPet animal="cat" age={23} />
      <PetInfo hasPet={false} animal="dog" age={2} />
      <RandomNumber max={1000} min={-1000} />
    </div>
  );
}

export default App;
