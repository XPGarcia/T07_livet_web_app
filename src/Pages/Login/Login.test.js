/* eslint-disable no-undef */
import React from "react";
import { act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "./Login";
import renderWithSettings from "../../Utils/TestUtils";

describe("<Login />", () => {
  test("Login with blank Data", () => {
    renderWithSettings(<Login />);

    userEvent.click(screen.getByText(/login/i));
    expect(screen.getAllByText(/este campo es requerido/i)).toHaveLength(2);
  });

  test("Login with incorrect Data", async () => {
    renderWithSettings(<Login />);

    userEvent.type(screen.getByLabelText(/email/i), "notcorret@test.com");
    userEvent.type(screen.getByLabelText(/password/i), "n0tc0rr3tp4ssw0rd");
    await act(async () => {
      userEvent.click(screen.getByText(/login/i));
    });

    expect(screen.getByRole(/presentation/i)).toBeVisible();
  });

  test("Login Successfully", async () => {
    renderWithSettings(<Login />);

    userEvent.type(screen.getByLabelText(/email/i), "secretaria@test.com");
    userEvent.type(screen.getByLabelText(/password/i), "Livet123-");
    await act(async () => {
      userEvent.click(screen.getByText(/login/i));
    });

    expect(screen.getByRole(/presentation/i)).toBeVisible();
  });
});
