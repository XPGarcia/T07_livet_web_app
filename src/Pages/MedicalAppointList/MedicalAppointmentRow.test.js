/* eslint-disable no-undef */
import React from "react";
import { screen } from "@testing-library/react";
import renderWithSettings from "../../Utils/TestUtils";
import MedicalAppointmentRow from "./MedicalAppointmentRow";
import * as auth from "../../Store/auth";

describe("<MedicalAppointmentRow />", () => {
  const data = {
    id: 1,
    patient: "Xavier García",
    doctor: "Doctor Luis",
    startDate: "2022-06-17T12:30",
    endDate: "2022-06-17T13:00",
    title: "Cardiología",
    code: "cardiology"
  };

  beforeEach(() => {
    jest.spyOn(auth, "hasRole").mockReturnValue("Doctor");
    jest.spyOn(auth, "getUserField").mockReturnValue("Test Doctor");
  });

  test("Render a next doctor's medical appointment of the list", () => {
    renderWithSettings(<MedicalAppointmentRow appointment={data} />);

    expect(screen.getByTestId("PersonIcon"));
    expect(screen.getByTestId("EventIcon"));
    expect(screen.getByText("Sábado - 17 Junio, 2022"));
    expect(screen.getByText("12:30 PM - 1:00 PM"));
  });
});
