import persons from '../Data/persons';
import Person from './Person';

export default function Persons(props) {
  return (
    <div className="person__list">
      {persons.map((person) => {
        return <Person {...person} key={person.id} />;
      })}
    </div>
  );
}
