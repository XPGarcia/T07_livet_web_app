/* eslint-disable no-undef */
import React from "react";
import { screen } from "@testing-library/react";
import renderWithSettings from "../../Utils/TestUtils";
import Specialties from "./Specialties";
import * as auth from "../../Store/auth";

describe("<Specialties />", () => {
  beforeEach(() => {
    jest.spyOn(auth, "hasRole").mockReturnValue("Secretary");
    jest.spyOn(auth, "getUserField").mockReturnValue("Test Secretary");
  });

  test("Render all the specialties", () => {
    renderWithSettings(<Specialties />);

    expect(screen.getByText("Cardiología")).toHaveStyle(
      "background-color: #D9534F"
    );
    expect(screen.getByText("Medicina General")).toHaveStyle(
      "background-color: #5CB85C"
    );
    expect(screen.getByText("Ginecología")).toHaveStyle(
      "background-color: #F0AD4E"
    );
    expect(screen.getByText("Pediatría")).toHaveStyle(
      "background-color: #E26DC9"
    );
    expect(screen.getByText("Terapia de Sueros")).toHaveStyle(
      "background-color: #714BC3"
    );
  });
});
