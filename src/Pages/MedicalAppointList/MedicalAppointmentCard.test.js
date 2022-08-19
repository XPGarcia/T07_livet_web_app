/* eslint-disable no-undef */
import React from "react";
import { screen } from "@testing-library/react";
import renderWithSettings from "../../Utils/TestUtils";
import MedicalAppointmentCard from "./MedicalAppointmentCard.";
import * as auth from "../../Store/auth";

describe("<MedicalAppointmentCard />", () => {
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

  test("Render the next medical appointment of a doctor", () => {
    renderWithSettings(
      <MedicalAppointmentCard appointment={data} style={{}} />
    );

    expect(screen.getByTestId("PersonIcon"));
    expect(screen.getByTestId("EventIcon"));
    expect(screen.getByTestId("AccessTimeIcon"));
    expect(screen.getByText("Sábado - 17 Junio, 2022"));
    expect(screen.getByText("12:30 PM - 1:00 PM"));
  });
});
