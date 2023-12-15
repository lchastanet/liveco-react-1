import style from "../styles/Card.module.css"

function Card() {
  return (
    <div className={style.card}>
      <div className={style["card-header"]}>
        <div
          className={style["card-img"]}
          style="
                background-image: url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80');
              "
        ></div>
      </div>
      <div className={style["card-body"]}>
        <h2 className={style["card-title"]}>Sample Card</h2>
        <p className={style["card-description"]}>
          This is just a sample card, take the structure of this card as an
          example for the function createCard
        </p>
        <button className={style["card-button"]}>I want it!</button>
      </div>
    </div>
  )
}

export default Card
