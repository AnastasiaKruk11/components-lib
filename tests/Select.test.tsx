import Select from '../src/Select/Select';
import { render, screen } from "@testing-library/react";
import React from 'react';
import '@testing-library/jest-dom';

const optionsForTest = [{key: 1, value: 'one'}, {key: 2, value: 'two'}, {key: 3, value: 'three'}, {key: 4, value: 'four'}, {key: 5, value: 'five'}]

describe("Select", () => {
  
    it("renders with label and options", () => {
    render(<Select label="Select" options={optionsForTest} />);
    expect(screen.getByText("Select")).toBeInTheDocument();
    expect(screen.getByLabelText("Select")).toBeInTheDocument();
  });
});