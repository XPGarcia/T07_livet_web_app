/* eslint-disable no-undef */
import React from "react";
import { screen } from "@testing-library/react";
import BottomBlockButtons from "./BottomBlockButtons";
import renderWithSettings from "../../Utils/TestUtils";

describe("<BottomBlockButtons />", () => {
  test("Render back and next button", () => {
    renderWithSettings(
      <BottomBlockButtons
        canGoBack
        nextDisabled={false}
        nextOnClick={() => {}}
      />
    );

    expect(screen.getByRole(/group/i).children.length).toEqual(2);
  });

  test("Render only next button", () => {
    renderWithSettings(
      <BottomBlockButtons
        canGoBack={false}
        nextDisabled={false}
        nextOnClick={() => {}}
      />
    );

    expect(screen.getByRole(/group/i).children.length).toEqual(1);
  });

  test("Disable next button", () => {
    renderWithSettings(
      <BottomBlockButtons canGoBack nextDisabled nextOnClick={() => {}} />
    );

    expect(screen.getByRole(/group/i).children[1]).toBeDisabled();
  });
});
