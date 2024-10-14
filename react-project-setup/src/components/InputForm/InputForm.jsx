import "./InputForm.css";
export default function InputForm({ id, labelText }) {
  return (
    <div className="form__container">
      <label className="form__textLabel" htmlFor={id}>
        {labelText}
      </label>
      <input className="form__input" type="text" id={id} name={id} required />
    </div>
  );
}
