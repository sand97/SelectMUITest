import "@testing-library/jest-dom";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Demo from "./demo";

test("When I choose a thing, then the thing changes", async () => {
  // This test is a reasonably accurate representation of the user's
  // real actions:
  // 1. Click on the MUI "select".
  // 2. Locate the corresponding popup of options.
  // 3. Click an option in the popup.

  render(<Demo />);

  // Confirm default state.
  expect(await screen.findByText(/the thing is: none/i)).toBeInTheDocument();

  // Click on the MUI "select" (as found by the label).
  const selectLabel = /choose a thing/i;
  const selectEl = await screen.findByLabelText(selectLabel);

  expect(selectEl).toBeInTheDocument();

  userEvent.click(selectEl);

  // Locate the corresponding popup (`listbox`) of options.
  const optionsPopupEl = await screen.findByRole("listbox", {
    name: selectLabel
  });

  // Click an option in the popup.
  userEvent.click(within(optionsPopupEl).getByText(/marshmallow/i));

  // Confirm the outcome.
  expect(
    await screen.findByText(/the thing is: marshmallow/i)
  ).toBeInTheDocument();
});
