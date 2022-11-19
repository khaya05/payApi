import '../../styles/FormInput.css'

function FormInput(props) {
  const { errorMessage, label, onChange, id, ...inputProps } = props;
  return (
    <div className='form-input'>
      <label>{label}</label>
      <input {...inputProps} onChange={onChange } />
      <span>{errorMessage}</span>
    </div>
  );
}

export default FormInput;
