import Checkbox from '../src/Checkbox/Checkbox';
import { render, screen } from "@testing-library/react";
import React from 'react';
import '@testing-library/jest-dom';

describe("Checkbox", () => {
  it("renders with label", () => {
    render(<Checkbox label="Accept" disabled={false} />);
    expect(screen.getByText("Accept")).toBeInTheDocument();
  });

  it("is unchecked by default", () => {
    render(<Checkbox label="Accept" disabled={false} />);
    const input = screen.getByRole("checkbox") as HTMLInputElement;
    expect(input.checked).toBe(false);
  });

  it("could be disabled", () => {
    render(<Checkbox label="Accept" disabled={true} />);
    const input = screen.getByRole("checkbox") as HTMLInputElement;
    expect(input.disabled).toBe(true);
  });

});