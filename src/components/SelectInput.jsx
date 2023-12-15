import PropTypes from "prop-types"

function SelectInput({ selectOption, setSelectOption }) {
  const handleChange = (event) => {
    setSelectOption(event.target.value)
    console.log(event.target.value)
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
  setSelectOption: PropTypes.func,
}
