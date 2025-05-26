import "./Dropdown.css";

const Dropdown = (props) => {
  return (
    <div className="dropdown">
      <label>{props.label}</label>
      <select required={props.required} onChange={(event) => props.onChange(event.target.value)} value={props.value}>
        <option value="">Selecione um gênero</option>
        {props.items.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default Dropdown;
