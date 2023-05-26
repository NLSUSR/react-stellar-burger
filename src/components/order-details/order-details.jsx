import Style from "./order-details.module.sass";
import done from "../../images/done.svg";
import PropTypes from "prop-types";

const OrderDetails = ({ children }) => {
  return (
    <div className={Style.container}>
      <h2 className={Style.title}>{children}</h2>
      <p className={Style.subtitle}>идентификатор заказа</p>
      <img
        className={Style.done}
        src={done}
        alt="Ваш заказ начали готовить - Дождитесь готовности на орбитальной станции"
      />
      <p className={Style.attention}>Ваш заказ начали готовить</p>
      <p className={Style.wait}>Дождитесь готовности на орбитальной станции</p>
    </div>
  );
};

OrderDetails.propTypes = {
  children: PropTypes.number.isRequired,
};

export default OrderDetails;
