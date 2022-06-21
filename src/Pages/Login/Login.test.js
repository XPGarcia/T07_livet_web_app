/* eslint-disable no-undef */
import React from "react";
import { act, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import userEvent from "@testing-library/user-event";
import Login from "./Login";

const theme = createTheme({
  palette: {
    primary: {
      main: "#256FB5"
    },
    secondary: {
      main: "#26B1FF"
    },
    white: {
      main: "#FFFFFF"
    },
    neutral: {
      main: "#64748B"
    }
  }
});

test("Login with blank Data", () => {
  render(
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </ThemeProvider>
  );

  userEvent.click(screen.getByText(/login/i));
  expect(screen.getAllByText(/este campo es requerido/i)).toHaveLength(2);
});

test("Login with incorrect Data", async () => {
  render(
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </ThemeProvider>
  );

  userEvent.type(screen.getByLabelText(/email/i), "notcorret@test.com");
  userEvent.type(screen.getByLabelText(/password/i), "n0tc0rr3tp4ssw0rd");
  await act(async () => {
    userEvent.click(screen.getByText(/login/i));
  });

  expect(screen.getByRole(/presentation/i)).toBeVisible();
});

// test("Login Successfully", async () => {
//   render(
//     <ThemeProvider theme={theme}>
//       <BrowserRouter>
//         <Login />
//       </BrowserRouter>
//     </ThemeProvider>
//   );

//   userEvent.type(screen.getByLabelText(/email/i), "secretaria@test.com");
//   userEvent.type(screen.getByLabelText(/password/i), "Livet123-");
//   await act(async () => {
//     userEvent.click(screen.getByText(/login/i));
//   });

//   expect(screen.getByRole(/presentation/i)).not.toBeVisible();
// });
