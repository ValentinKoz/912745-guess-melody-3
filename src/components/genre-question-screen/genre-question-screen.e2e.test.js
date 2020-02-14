import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GenreQuestionScreen from "./genre-question-screen.jsx";

configure({adapter: new Adapter()});

const mock = {
  question: {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: ``,
        genre: `rock`,
      },
      {
        src: ``,
        genre: `jazz`,
      },
      {
        src: ``,
        genre: `jazz`,
      },
      {
        src: ``,
        genre: `blues`,
      },
    ],
  },
};

it(`not submit`, () => {
  const {question} = mock;
  const onAnswer = jest.fn();
  const screen = shallow(<GenreQuestionScreen
    onAnswer={onAnswer}
    question={question}
  />);

  const form = screen.find(`form`);
  const formSubmit = jest.fn();
  form.simulate(`submit`, {
    preventDefault: formSubmit,
  });

  expect(onAnswer).toHaveBeenCalledTimes(1);
  expect(formSubmit).toHaveBeenCalledTimes(1);
});

it(`submit passed to the callback`, () => {
  const {question} = mock;
  const onAnswer = jest.fn((...args) => [...args]);
  const userAnswer = [true, false, false, false];

  const genreQuestion = shallow(<GenreQuestionScreen
    onAnswer={onAnswer}
    question={question}
  />);

  const form = genreQuestion.find(`form`);
  const inputOne = genreQuestion.find(`input`).at(0);

  inputOne.simulate(`change`, {target: {checked: true}});
  form.simulate(`submit`, {preventDefault() {}});

  expect(onAnswer).toHaveBeenCalledTimes(1);

  expect(onAnswer.mock.calls[0][0]).toMatchObject(question);
  expect(onAnswer.mock.calls[0][1]).toMatchObject(userAnswer);

  expect(
      genreQuestion.find(`input`).map((it) => it.prop(`checked`))
  ).toEqual(userAnswer);
});
