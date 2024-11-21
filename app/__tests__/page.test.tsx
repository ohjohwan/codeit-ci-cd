import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "../page";

describe("Page", () => {
  it("render the page", () => {
    render(<Page />);
    expect(
      screen.getByRole("listitem", { name: /Get started by editing/i })
    ).toBeInTheDocument();
  });
});
