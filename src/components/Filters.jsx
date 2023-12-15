import TextInput from "./TextInput"
import SelectInput from "./SelectInput"
import CheckBoxInput from "./CheckBoxInput"

import style from "../styles/Filters.module.css"

function Filters() {
  return (
    <div className={style.filters}>
      <TextInput />
      <SelectInput />
      <CheckBoxInput />
    </div>
  )
}

export default Filters
