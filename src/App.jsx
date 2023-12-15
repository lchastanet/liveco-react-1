import { useState } from "react"

import Header from "./components/Header"
import Filters from "./components/Filters"
import Card from "./components/Card"

import style from "./styles/App.module.css"

import houses from "./data/houseToRent"

function App() {
  const [checked, setChecked] = useState(false)

  console.log(checked)

  return (
    <>
      <Header />
      <Filters checked={checked} setChecked={setChecked} />
      <div className={style.cards}>
        {houses
          .filter((house) => {
            if (checked) {
              return house.available
            } else {
              return true
            }
          })
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
