export default function Wrapper(props) {
  const style = {
    margin: '20px auto',
    width: '500px',
    backgroundColor: props.color,
  };

  return (
    <div style={style}>
      <h1>Hello from wrapper</h1>
      {props.children}
    </div>
  );
}
