/* eslint-disable no-undef */
import { fireEvent, screen } from "@testing-library/react";
import React from "react";
import renderWithSettings from "../../Utils/TestUtils";
import SingleList from "./SingleList";

describe("<SingleList />", () => {
  const diagnostics = [
    {
      id: 1,
      name: "Enfermedad 1"
    },
    {
      id: 2,
      name: "Enfermedad 2"
    }
  ];
  const mockHandler = jest.fn();

  test("Render single list with delete buttons", () => {
    renderWithSettings(
      <SingleList data={diagnostics} onDelete={mockHandler} viewMode={false} />
    );

    expect(screen.getByText("Enfermedad 1"));
    expect(screen.getByText("Enfermedad 2"));
    expect(screen.getAllByTestId("DeleteIcon")).toHaveLength(2);

    fireEvent.click(screen.getAllByTestId("DeleteIcon")[0].parentNode);
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });

  test("Render single list with in view mode", () => {
    renderWithSettings(
      <SingleList data={diagnostics} onDelete={mockHandler} viewMode />
    );

    expect(screen.queryByTestId("DeleteIcon")).not.toBeInTheDocument();
  });
});
