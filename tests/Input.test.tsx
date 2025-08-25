import Input from '../src/Input/Input';
import { render, screen, fireEvent } from "@testing-library/react";
import React from 'react';
import '@testing-library/jest-dom';

describe("Input", () => {
  it("renders with label and placeholder", () => {
    render(<Input label="Label" placeholder="Some text" />);
    expect(screen.getByLabelText("Label")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Some text")).toBeInTheDocument();
  });

  it("handles user typing", () => {
    render(<Input label="Name" placeholder="Write your name"/>);
    const input = screen.getByLabelText("Name") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "Anastasia" } });
    expect(input.value).toBe("Anastasia");
  });

  it('renders with a className equal to "error"', () => {
    const { getByRole } = render(<Input label="Password" placeholder="Write the password" error />);
    const inputElement = getByRole('textbox', { name: 'Text' });
    expect(inputElement.classList.contains('errorInput')).toBe(true);
});
});