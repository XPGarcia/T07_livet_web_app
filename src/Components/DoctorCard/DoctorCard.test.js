/* eslint-disable no-undef */
import { fireEvent, screen } from "@testing-library/react";
import React from "react";
import renderWithSettings from "../../Utils/TestUtils";
import DoctorCard from "./DoctorCard";

describe("<DoctorCard />", () => {
  const doctor = {
    id: 1,
    name: "Test Doctor",
    specialty: "cardiology",
    schedule: [
      {
        id: 1000,
        startDate: "2022-06-21T09:30",
        endDate: "2022-06-21T10:30"
      },
      {
        id: 1001,
        startDate: "2022-06-21T17:00",
        endDate: "2022-06-21T17:30"
      }
    ]
  };
  const medicalCenter = "Sauces";

  const mockHandler = jest.fn();

  beforeEach(() => {
    renderWithSettings(
      <DoctorCard
        doctor={doctor}
        medicalCenter={medicalCenter}
        onScheduleClicked={mockHandler}
      />
    );
  });

  test("Render doctor card with appointments", () => {
    expect(screen.getByText("Test Doctor"));
    expect(screen.getByText("Cardiología"));
    expect(screen.getByText(medicalCenter));
    expect(screen.getByText("9:30 AM"));
    expect(screen.getByText("5:00 PM"));
  });

  test("Change color of selected schedule", () => {
    fireEvent.click(screen.getByText("9:30 AM"));

    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});
