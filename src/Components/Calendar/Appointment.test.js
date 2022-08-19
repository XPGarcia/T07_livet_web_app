/* eslint-disable no-undef */
import React from "react";
import { screen } from "@testing-library/react";
import renderWithSettings from "../../Utils/TestUtils";
import Appointment from "./Appointment";
import AppointmentComponent from "./AppointmentComponent";

describe("<Appointment />", () => {
  const data = {
    id: 1,
    patient: "Xavier García",
    doctor: "Doctor Luis",
    startDate: "2022-06-23T09:30",
    endDate: "2022-06-23T10:00",
    title: "Cardiología - Doctor Luis",
    code: "cardiology"
  };

  test("Render Appointment with correct style", () => {
    const color = "#D9534F";

    renderWithSettings(
      <Appointment style={{}} data={data}>
        <AppointmentComponent data={data} />
      </Appointment>
    );

    expect(screen.getByText(data.title));
    expect(screen.getByText(data.patient));
    expect(screen.getByText("9:30 AM"));
    expect(screen.getByText("10:00 AM"));

    expect(
      screen.getByText("Cardiología - Doctor Luis").parentNode.parentNode
        .parentNode
    ).toHaveStyle(`background-color: ${color}`);
  });
});
