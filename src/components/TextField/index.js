import './TextField.css';

export const TextField = (props) => {
  const { labelName, placeholder, required, value, onChange } = props;

  const whenTyped = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="text-field">
      <label>{labelName}</label>
      <input
        value={value}
        onChange={whenTyped}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
};
