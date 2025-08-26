import Button from '../src/Button/Button';
import { render, screen, fireEvent } from "@testing-library/react";
import React from 'react';

describe("Button", () => {

  it("applies correct variant based on props", () => {
    render(
      <Button size="large" variant="outlined"></Button>
    );
    const button = screen.getByRole("button");
    expect(button.className).toMatch("largeBtn outlinedBtn");
  });

  it("calls onClick", () => {
    const handleClick = jest.fn();
    render(<Button size="medium" variant="contained" onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

