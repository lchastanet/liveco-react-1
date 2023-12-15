import PropTypes from "prop-types"

function CheckBoxInput({ checked, setHousesFilters }) {
  const handleChange = () =>
    setHousesFilters((prev) => ({ ...prev, checked: !checked }))

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
  setHousesFilters: PropTypes.func,
}
