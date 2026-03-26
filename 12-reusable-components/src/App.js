import './App.css';
import MyComponent from './Components/MyComponent';
import OtherComponent from './Components/OtherComponent';
import PetInfo from './Components/PetInfo';

function App() {
  return (
    <div className="App">
      <MyComponent />
      <OtherComponent />
      <PetInfo hasPet animal="cat" age={23} />
      <PetInfo hasPet={false} animal="dog" age={2} />
    </div>
  );
}

export default App;
