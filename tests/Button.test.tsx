import Button from '../src/Button/Button';
import { render, screen } from "@testing-library/react";
import React from 'react';

describe("Button", () => {

  it("applies correct variant based on props", () => {
    render(
      <Button size="large" variant="outlined"></Button>
    );
    const button = screen.getByRole("button");
    expect(button.className).toMatch("largeBtn outlinedBtn");
  });
});

