import UserContext from '../context/UserContext';
import { useContext } from 'react';

export default function UserInfo() {
  const { userName } = useContext(UserContext);
  return (
    <h1>{userName}</h1>
    // Получение контекста через Consumer
    //<UserContext.Consumer>{(value) => <h1>{value}</h1>}</UserContext.Consumer>
  );
}
