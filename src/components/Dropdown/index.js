import './Dropdown.css';

export const Dropdown = (props) => {
  const { labelName, items, required, value, onChange } = props;

  return (
    <div className="dropdown">
      <label>{labelName}</label>
      <select
        onChange={(event) => onChange(event.target.value)}
        required={required}
        value={value}
      >
        {items.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};
