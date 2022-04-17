export const TodoItem = ({ props, handleStatus }) => {
  return (
    <div>
      <div>{props.id}</div>
      {props.title} - {props.status ? "Done" : "Not Done"}
      <button onClick={() => handleStatus(props.id)}>Toggle</button>
    </div>
  );
};
