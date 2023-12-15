import PropTypes from "prop-types"

function CheckBoxInput({ checked, setChecked }) {
  const handleChange = () => setChecked(!checked)

  return (
    <div>
      <label htmlFor="available">Show only Available </label>
      <input
        onChange={handleChange}
        type="checkbox"
        name="checkbox"
        id=""
        checked={checked}
      />
    </div>
  )
}

export default CheckBoxInput

CheckBoxInput.propTypes = {
  checked: PropTypes.bool,
  setChecked: PropTypes.func,
}
