import style from "./style.module.scss";
// import card1 from "assets/image/card1.png";
// import card2 from "assets/image/card2.png";
// import card3 from "assets/image/card3.png";

// const cardsList = [card1, card2, card3];



const List = () => {
  
  return (
    <section className={style.section}>
      <div className={style.container}>
        <div className={style.containerContext}>
          <h4 className={style.containerContext__title}>
            Ferramentas exclusivas para você investir melhor!
          </h4>
        </div>
      
      </div>
    </section>
  );
};

export default List;
