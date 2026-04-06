import { useState } from 'react';
import User from './components/User';
import './App.css';

function App() {
  const [user, setUser] = useState('Dima');

  return (
    <div className="App">
      <User user={user} />
    </div>
  );
}

export default App;
