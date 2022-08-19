/* eslint-disable no-undef */
import React from "react";
import { screen } from "@testing-library/react";
import renderWithSettings from "../../Utils/TestUtils";
import MedicalAppointmentList from "./MedicalAppointmentList";
import * as auth from "../../Store/auth";

describe("<MedicalAppointmentList />", () => {
  beforeEach(() => {
    jest.spyOn(auth, "hasRole").mockReturnValue("Doctor");
    jest.spyOn(auth, "getUserField").mockReturnValue("Test Doctor");
  });

  test("Render the list of medical appointments of a doctor", () => {
    renderWithSettings(<MedicalAppointmentList />);

    expect(screen.getAllByTestId("PersonIcon")).toHaveLength(5);
  });
});
