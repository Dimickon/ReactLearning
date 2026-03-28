import { useEffect, useState } from 'react';

import './App.css';
import MyComponent from './Components/MyComponent';
import OtherComponent from './Components/OtherComponent';
import PetInfo from './Components/PetInfo';
import RandomNumber from './Components/RandomNumber';
import Button from './Components/Button';
import Counter from './Components/Counter';
import Persons from './Components/Persons';
import Card from './Components/Card';
import LoginUncontrolled from './Components/LoginUncontrolled';
import LoginControlled from './Components/LoginControlled';
import Wrapper from './Components/Wrapper';

const textsButtons = ['Прибавить', 'Добавить', 'Увеличить'];

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };
  const buttonStyle = { backgroundColor: 'lightgreen' };

  const [todo, setTodo] = useState(null);
  useEffect(() => {
    console.log('useEffect');
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => setTodo(json));
  }, []);
  console.log('App rendered');
  console.log(todo);

  return (
    <div className="App">
      <div className="lesson">
        <MyComponent />
      </div>

      <div className="lesson">
        <OtherComponent />
      </div>

      {/* Использование props */}
      <div className="lesson">
        <PetInfo hasPet animal="cat" age={23} />
      </div>

      {/* Условный возврат JSX */}
      <div className="lesson">
        <PetInfo hasPet={false} animal="dog" age={2} />
      </div>

      {/* Состояния компонента */}
      <div className="lesson">
        <RandomNumber max={1000} min={-1000} />
      </div>

      {/* Изменение состояния из дочернего элемента */}
      <div className="lesson">
        <Counter count={count} />
        <Button onClick={incrementCount} text={'Добавить'} />
        <Button onClick={decrementCount} text={'Убавить'} />
        <button>Reset</button>
      </div>

      {/* Перебор массива */}
      <div className="lesson">
        <Counter count={count} />
        {textsButtons.map((text, index) => {
          return <Button onClick={incrementCount} text={text} key={index} />;
        })}
      </div>

      {/* Передача параметров с помощью spread оператора (...) */}
      <div className="lesson lesson--person">
        <Persons />
      </div>

      {/* Условное отображение блока JSX с условием И */}
      <div className="lesson">
        <Counter count={count} />
        <Button onClick={incrementCount} text={'Добавить'} />
        <Button onClick={decrementCount} text={'Убавить'} />

        {count > 0 && (
          <div>
            <button style={buttonStyle} onClick={resetCount}>
              Обнулить
            </button>
          </div>
        )}
      </div>

      {/* React Fragment */}
      <div className="lesson">
        <Card />
      </div>

      {/* Обработка форм с неконтролируемыми инпутами */}
      <div className="lesson">
        <LoginUncontrolled />
      </div>

      {/* Обработка форм с контролируемыми инпутами */}
      <div className="lesson">
        <LoginControlled />
      </div>

      {/* Передача элементов через children */}
      <div className="lesson">
        <Wrapper color="lightblue">
          <h2>Text inside of the Wrapper</h2>
          <button>Click me</button>
        </Wrapper>
        <Wrapper color="lightgreen">
          <h2>another text</h2>
          <button>Click me</button>
        </Wrapper>
      </div>

      {/* Использование хука useEffect */}
      <div className="lesson">{todo && <h1>{todo.title}</h1>}</div>
    </div>
  );
}

export default App;
