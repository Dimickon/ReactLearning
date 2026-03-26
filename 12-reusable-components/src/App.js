import { useState } from 'react';

import './App.css';
import MyComponent from './Components/MyComponent';
import OtherComponent from './Components/OtherComponent';
import PetInfo from './Components/PetInfo';
import RandomNumber from './Components/RandomNumber';
import Button from './Components/Button';
import Counter from './Components/Counter';

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <MyComponent />
      <OtherComponent />

      {/* Использование props */}
      <PetInfo hasPet animal="cat" age={23} />

      {/* Условный возврат JSX */}
      <PetInfo hasPet={false} animal="dog" age={2} />

      {/* Состояния компонента */}
      <RandomNumber max={1000} min={-1000} />

      {/* Изменение состояния из дочернего элемента */}
      <Counter count={count} />
      <Button onClick={incrementCount} text="Добавить" />
      <Button onClick={decrementCount} text="Убавить" />
      <Button text="Бездействие" />
    </div>
  );
}

export default App;
