import React, { useEffect, useState } from "react";
import API from "../utils/API";
import UserContext from "../utils/userContext";
import CardContainer from "../components/CardContainer";
import Row from "../components/Row";
import LanguageContext from "../utils/LanguageContext";
import LanguageSelector from "../components/LanguageSelector";

function Gallery() {
  const [languages, setLanguages] = useState([]);
  const [language, setLanguage] = useState("");
  const [languageIndex, setLanguageIndex] = useState(0);

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [userIndex, setUserIndex] = useState(0);

  useEffect(() => {
    API.getLanguagesList().then(languages => {
      setLanguages(languages);
      setLanguage(languages[0]);

      loadUsers(languages[0]);
    });
  }, []);

  function nextUser(userIndex) {
    // Ensure that the user index stays within our range of users
    if (userIndex >= users.length) {
      userIndex = 0;
    }
    setUser(users[userIndex]);
    setUserIndex(userIndex);
  }

  function previousUser(userIndex) {
    // Ensure that the user index stays within our range of users
    if (userIndex < 0) {
      userIndex = users.length - 1;
    }
    setUser(users[userIndex]);
    setUserIndex(userIndex);
  }

  function handleUserBtnClick(event) {
    // Get the title of the clicked button
    const btnName = event.target.getAttribute("data-value");
    if (btnName === "next") {
      const newUserIndex = userIndex + 1;
      nextUser(newUserIndex);
    } else {
      const newUserIndex = userIndex - 1;
      previousUser(newUserIndex);
    }
  }

  const loadUsers = language => {
    API.getUsersByLanguage(language)
      .then(users => {
        setUsers(users);
        setUser(users[0]);
      })
      .catch(err => console.log(err));
  };

  function nextLanguage(languageIndex) {
    // Ensure that the language index stays within our range of languages
    if (languageIndex >= languages.length) {
      languageIndex = 0;
    }
    loadUsers(languages[languageIndex]);

    setLanguage(languages[languageIndex]);
    setLanguageIndex(languageIndex);
  }

  function previousLanguage(languageIndex) {
    // Ensure that the language index stays within our range of languages
    if (languageIndex < 0) {
      languageIndex = languages.length - 1;
    }
    loadUsers(languages[languageIndex]);

    setLanguage(languages[languageIndex]);
    setLanguageIndex(languageIndex);
  }

  function handleLanguageBtnClick(event) {
    // Get the title of the clicked button
    const btnName = event.target.getAttribute("data-value");
    if (btnName === "next") {
      const newLanguageIndex = languageIndex + 1;
      nextLanguage(newLanguageIndex);
    } else {
      const newLanguageIndex = languageIndex - 1;
      previousLanguage(newLanguageIndex);
    }
  }

  return (
    <UserContext.Provider value={{ user, users, handleUserBtnClick }}>
      <LanguageContext.Provider
        value={{ language, languages, handleLanguageBtnClick }}
      >
        <div>
          <h1 className="text-center">Welcome to LinkedUp</h1>
          <h3 className="text-center">Click on the arrows to browse users</h3>
          <LanguageSelector />
          <Row>
            <CardContainer />
          </Row>
        </div>
      </LanguageContext.Provider>
    </UserContext.Provider>
  );
}

export default Gallery;
