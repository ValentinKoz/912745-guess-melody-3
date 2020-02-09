import React from "react";
import renderer from "react-test-renderer";
import WelcomScreen from "./welcome-screen.jsx";

it(`Should WelcomeScreen renderer correctly`, () => {
  const tree = renderer
    .create(<WelcomScreen
      errorCount={3}
      onWelcomeScreenBtnClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
