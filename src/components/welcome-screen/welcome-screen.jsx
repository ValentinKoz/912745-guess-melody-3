import React from "react";
import PropTypes from "prop-types";


const WelcomeScreen = (props) => {

  const {errorCount, onWelcomeScreenBtnClick} = props;

  return (
    <section className="welcome">
      <div className="welcome__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></img></div>
      <button onClick={onWelcomeScreenBtnClick} className="welcome__button"><span className="visually-hidden">Начать игру</span></button>
      <h2 className="welcome__rules-title">Правила игры</h2>
      <p className="welcome__text">Правила просты:</p>
      <ul className="welcome__rules-list">
        <li>Нужно ответить на все вопросы.</li>
        <li>Можно допустить {errorCount} ошибки.</li>
      </ul>
      <p className="welcome__text">Удачи!</p>
    </section>);
};

WelcomeScreen.propTypes = {
  errorCount: PropTypes.number.isRequired,
  onWelcomeScreenBtnClick: PropTypes.func.isRequired
};

export default WelcomeScreen;
