import React, {useContext} from "react";
import UserContext from "../../utils/userContext";
import "./style.css";

function CardBtn(props) {
  const { handleUserBtnClick } = useContext(UserContext)
  return (
    <div>
        <button onClick={handleUserBtnClick} className={`card-btn ${props["data-value"]}`} {...props} />
    </div>
  );
}

export default CardBtn;
