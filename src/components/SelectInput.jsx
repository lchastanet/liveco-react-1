import PropTypes from "prop-types"

function SelectInput({ selectOption, setHousesFilters }) {
  const handleChange = (event) => {
    setHousesFilters((prev) => ({ ...prev, selectOption: event.target.value }))
  }

  return (
    <select onChange={handleChange} name="home" value={selectOption}>
      <option value="All">All</option>
      <option value="Flat">Flat</option>
      <option value="House">House</option>
    </select>
  )
}

export default SelectInput

SelectInput.propTypes = {
  selectOption: PropTypes.string,
  setHousesFilters: PropTypes.func,
}
