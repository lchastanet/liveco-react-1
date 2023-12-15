import PropTypes from "prop-types"

function TextInput({ searchText, setSearchText }) {
  const handleChange = (e) => {
    setSearchText(e.target.value)
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
  setSearchText: PropTypes.func,
}
