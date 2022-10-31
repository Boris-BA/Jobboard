const Jobs = (props) => {
  return (
    <div className={`item ${props.color}`}>
      <h2>{props.title}</h2>
      <p className={props.className}>
        {props.contractType} - {props.country} - {props.city} -{" "}
      </p>
    </div>
  );
};

export default Jobs;
