import { useState } from "react"

import Header from "./components/Header"
import Filters from "./components/Filters"
import Card from "./components/Card"

import style from "./styles/App.module.css"

import houses from "./data/houseToRent"

const initialFilter = {
  checked: false,
  selectOption: "All",
  searchText: "",
}

function App() {
  const [housesFilters, setHousesFilters] = useState(initialFilter)

  console.log(housesFilters)

  return (
    <>
      <Header />
      <Filters
        housesFilters={housesFilters}
        setHousesFilters={setHousesFilters}
      />
      <div className={style.cards}>
        {houses
          .filter((house) => (housesFilters.checked ? house.available : true))
          .filter(
            (house) =>
              housesFilters.selectOption === "All" ||
              house.type === housesFilters.selectOption
          )
          .filter((house) =>
            house.name
              .toLocaleLowerCase()
              .includes(housesFilters.searchText.toLocaleLowerCase())
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
