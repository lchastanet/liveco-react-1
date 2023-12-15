import PropTypes from "prop-types"

function TextInput({ searchText, setHousesFilters }) {
  const handleChange = (e) => {
    setHousesFilters((prev) => ({ ...prev, searchText: e.target.value }))
  }

  return (
    <input
      onChange={handleChange}
      type="text"
      placeholder="🔎 Type to search"
      value={searchText}
    />
  )
}

export default TextInput

TextInput.propTypes = {
  searchText: PropTypes.string,
  setHousesFilters: PropTypes.func,
}
