import React, { useContext } from "react";
import CardBtn from "../CardBtn";
import LanguageContext from "../../utils/LanguageContext";
import "./style.css";

function LanguageSelector() {
  const { language, handleLanguageBtnClick } = useContext(LanguageContext);
  return (
    <div>
      <h3 className="text-center">Select the user language below:</h3>
      <div className="language-btn">
        <CardBtn
          onClick={handleLanguageBtnClick}
          data-value="back"
        />
        <span className="text-center">{language}</span>
        <CardBtn
          onClick={handleLanguageBtnClick}
          data-value="next"
        />
      </div>
    </div>
  );
}

export default LanguageSelector;
