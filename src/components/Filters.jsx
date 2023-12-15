import PropTypes from "prop-types"

import TextInput from "./TextInput"
import SelectInput from "./SelectInput"
import CheckBoxInput from "./CheckBoxInput"

import style from "../styles/Filters.module.css"

function Filters({
  checked,
  setChecked,
  selectOption,
  setSelectOption,
  searchText,
  setSearchText,
}) {
  return (
    <div className={style.filters}>
      <TextInput searchText={searchText} setSearchText={setSearchText} />
      <SelectInput
        selectOption={selectOption}
        setSelectOption={setSelectOption}
      />
      <CheckBoxInput checked={checked} setChecked={setChecked} />
    </div>
  )
}

export default Filters

Filters.propTypes = {
  checked: PropTypes.bool,
  setChecked: PropTypes.func,
  selectOption: PropTypes.string,
  setSelectOption: PropTypes.func,
  searchText: PropTypes.string,
  setSearchText: PropTypes.func,
}
