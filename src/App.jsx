import { useState } from "react"

import Header from "./components/Header"
import Filters from "./components/Filters"
import Card from "./components/Card"

import style from "./styles/App.module.css"

import houses from "./data/houseToRent"

function App() {
  const [checked, setChecked] = useState(false)
  const [selectOption, setSelectOption] = useState("All")
  const [searchText, setSearchText] = useState("")

  console.log(checked)

  return (
    <>
      <Header />
      <Filters
        checked={checked}
        setChecked={setChecked}
        selectOption={selectOption}
        setSelectOption={setSelectOption}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <div className={style.cards}>
        {houses
          .filter((house) => (checked ? house.available : true))
          .filter(
            (house) => selectOption === "All" || house.type === selectOption
          )
          .filter((house) =>
            house.name
              .toLocaleLowerCase()
              .includes(searchText.toLocaleLowerCase())
          )
          .map((house) => (
            <Card
              key={house.name}
              description={house.desc}
              title={house.name}
              image={house.img}
            />
          ))}
      </div>
    </>
  )
}

export default App
