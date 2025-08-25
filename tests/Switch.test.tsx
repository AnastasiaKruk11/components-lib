import Switch from '../src/Switch/Switch';
import { render, screen, fireEvent } from "@testing-library/react";
import React from 'react';
import '@testing-library/jest-dom';

describe("Switch", () => {

  it("renders with label", () => {
    render(<Switch label="Theme" disabled={false} />);
    expect(screen.getByText("Theme")).toBeInTheDocument();
  });

  it("toggles state", () => {
    render(<Switch label="Theme" disabled={false} />);
    const input = screen.getByRole("checkbox") as HTMLInputElement;

    expect(input.checked).toBe(false);
    fireEvent.click(input);
    expect(input.checked).toBe(true);
  });

  it("could be rendered as checked", () => {
    render(<Switch label="Theme" disabled={false} checked={true} />);
    const input = screen.getByRole("checkbox") as HTMLInputElement;

    expect(input.checked).toBe(true);
  });

  it("calls onChange when toggled", () => {
    const handleChange = jest.fn();
    render(<Switch label="Theme" disabled={false} onChange={handleChange} />);
    const input = screen.getByRole("checkbox");

    fireEvent.click(input);

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith("on");
  });

  it("could be rendered as disabled", () => {
    render(<Switch label="Theme" disabled={true} />);
    const input = screen.getByRole("checkbox");

    expect(input).toBeDisabled();
  });
});