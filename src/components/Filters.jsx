import PropTypes from "prop-types"

import TextInput from "./TextInput"
import SelectInput from "./SelectInput"
import CheckBoxInput from "./CheckBoxInput"

import style from "../styles/Filters.module.css"

function Filters({ housesFilters, setHousesFilters }) {
  return (
    <div className={style.filters}>
      <TextInput
        searchText={housesFilters.searchText}
        setHousesFilters={setHousesFilters}
      />
      <SelectInput
        selectOption={housesFilters.selectOption}
        setHousesFilters={setHousesFilters}
      />
      <CheckBoxInput
        checked={housesFilters.checked}
        setHousesFilters={setHousesFilters}
      />
    </div>
  )
}

export default Filters

Filters.propTypes = {
  housesFilters: PropTypes.shape({
    checked: PropTypes.bool,
    selectOption: PropTypes.string,
    searchText: PropTypes.string,
  }),
  setHousesFilters: PropTypes.func,
}
