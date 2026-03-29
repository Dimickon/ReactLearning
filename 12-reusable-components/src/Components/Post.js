import './Post.css';

export default function Post(props) {
  const { title, body } = props;

  return (
    <div className="post">
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}
