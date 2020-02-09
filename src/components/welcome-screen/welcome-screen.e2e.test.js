import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WelcomeScreen from "./welcome-screen";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should button click`, () => {
  const onWelcomeScreenBtnHandler = jest.fn();
  const welcomeScreen = shallow(<WelcomeScreen
    errorCount={3}
    onWelcomeScreenBtnClick={onWelcomeScreenBtnHandler}
  />
  );

  const button = welcomeScreen.find(`button.welcome__button`);
  button.props().onClick();
  expect(onWelcomeScreenBtnHandler.mock.calls.length).toBe(1);
});
