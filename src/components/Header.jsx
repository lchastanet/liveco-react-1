import style from "../styles/Header.module.css"

function Header() {
  console.log(style)

  return (
    <header className={style.header}>
      <h1>🏠 Find your home</h1>
    </header>
  )
}

export default Header
