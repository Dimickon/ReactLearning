export default function Person(props) {
  const { firstName, lastName, email, img } = props;

  return (
    <div className="person__item">
      <img src={img} />
      <h3>
        {firstName} {lastName}
      </h3>
      <h4>{email}</h4>
    </div>
  );
}
