const Card = (props) => {
  return (
    <div className="card">
      <i className={props.icon}></i>
      <p>{props.title}</p>
    </div>
  );
};

export default Card;
