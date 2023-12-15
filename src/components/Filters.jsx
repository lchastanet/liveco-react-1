import PropTypes from "prop-types"

import TextInput from "./TextInput"
import SelectInput from "./SelectInput"
import CheckBoxInput from "./CheckBoxInput"

import style from "../styles/Filters.module.css"

function Filters({ checked, setChecked }) {
  return (
    <div className={style.filters}>
      <TextInput />
      <SelectInput />
      <CheckBoxInput checked={checked} setChecked={setChecked} />
    </div>
  )
}

export default Filters

Filters.propTypes = {
  checked: PropTypes.bool,
  setChecked: PropTypes.func,
}
