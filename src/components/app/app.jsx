import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import WelcomeScreen from "./../welcome-screen/welcome-screen.jsx";
import ArtistQuestionScreen from "./../artist-question-screen/artist-question-screen.jsx";
import GenreQuestionScreen from "./../genre-question-screen/genre-question-screen.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: -1
    };
  }

  _renderScreen() {
    const {errorCount, questions} = this.props;
    const {step} = this.state;
    const question = questions[step];

    if (step === -1 || step >= questions.length) {
      return (
        <WelcomeScreen
          errorCount={errorCount}
          onWelcomeScreenBtnClick={() => {
            this.setState({
              step: 0,
            });
          }}
        />
      );
    }

    if (question) {
      switch (question.type) {
        case `artist`:
          return (
            <ArtistQuestionScreen
              question={question}
              onAnswer={() => {
                this.setState((prevState) => ({
                  step: prevState.step + 1,
                }));
              }}
            />
          );
        case `genre`:
          return (
            <GenreQuestionScreen
              question={question}
              onAnswer={() => {
                this.setState((prevState) => ({
                  step: prevState.step + 1,
                }));
              }}
            />
          );
      }
    }

    return null;
  }

  render() {
    const {questions} = this.props;

    return (<BrowserRouter>
      <Switch>
        <Route exact path="/">
          {this._renderScreen()}
        </Route>
        <Route exact path="/dev-artist">
          <ArtistQuestionScreen
            question={questions[1]}
            onAnswer={()=> {}}/>
        </Route>
        <Route exact path="/dev-genre">
          <GenreQuestionScreen
            question={questions[0]}
            onAnswer={()=> {}}/>
        </Route>
      </Switch>
    </BrowserRouter>);
  }
}

App.propTypes = {
  errorCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};

export default App;
