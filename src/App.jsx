import Header from "./components/Header"
import Filters from "./components/Filters"

import style from "./styles/App.module.css"

function App() {
  return (
    <>
      <Header />
      <Filters />
      <div className={style.cards}></div>
    </>
  )
}

export default App
