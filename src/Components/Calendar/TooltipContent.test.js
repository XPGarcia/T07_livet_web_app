/* eslint-disable no-undef */
import React from "react";
import { screen } from "@testing-library/react";
import renderWithSettings from "../../Utils/TestUtils";
import TooltipContent from "./TooltipContent";

describe("<TooltipContent />", () => {
  const data = {
    id: 2,
    patient: "Xavier García",
    doctor: "Doctor Luis",
    startDate: "2022-06-23T09:30",
    endDate: "2022-06-23T10:00",
    title: "Pediatría - Xavier García",
    code: "pediatrics"
  };

  test("Render custom appointment tooltip with correct style", () => {
    const color = "#E26DC9";

    renderWithSettings(<TooltipContent appointmentData={data} />);

    expect(screen.getByText("Pediatría - Xavier García"));
    expect(screen.getByText("Viernes - 23 Junio, 2022"));
    expect(screen.getByText("9:30 AM - 10:00 AM"));

    expect(screen.getByTestId("LensIcon")).toHaveStyle(`color: ${color}`);
    expect(screen.getByText("Tomar datos")).toHaveStyle(
      `background-color: ${color}`
    );
  });
});
