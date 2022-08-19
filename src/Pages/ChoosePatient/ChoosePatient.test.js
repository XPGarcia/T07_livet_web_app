/* eslint-disable no-undef */
import React from "react";
import { screen } from "@testing-library/react";
import renderWithSettings from "../../Utils/TestUtils";
import ChoosePatient from "./ChoosePatient";
import * as auth from "../../Store/auth";

describe("<ChoosePatient />", () => {
  beforeEach(() => {
    jest.spyOn(auth, "hasRole").mockReturnValue("Doctor");
    jest.spyOn(auth, "getUserField").mockReturnValue("Test Doctor");
  });

  test("Render choose patient page", () => {
    renderWithSettings(<ChoosePatient />);

    expect(screen.getByLabelText("Buscar por cédula"));
  });
});
