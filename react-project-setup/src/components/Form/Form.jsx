import InputForm from "../InputForm/InputForm";
import Button from "../Button/Button";
import "./Form.css";
export default function Form() {
  return (
    <form className="form">
      <h2 className="form__title">NEW ENTRY</h2>
      <InputForm labelText="Motto" id="motto" />
      <InputForm labelText="Notes" id="notes" />
      <Button textInput={"Create"} />
    </form>
  );
}
