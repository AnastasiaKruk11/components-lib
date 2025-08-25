import Modal from '../src/Modal/Modal';
import { render, screen, fireEvent } from "@testing-library/react";
import React from 'react';
import '@testing-library/jest-dom';

describe("Modal", () => {
  const onClose = jest.fn();
  const text = "Some content";

  it("does not render when prop isOpen is false", () => {
    render(
      <Modal isOpen={false} onClose={onClose} content={text} />
    );
    const modal = screen.getByText(text);
    expect(modal.classList.contains('openedModal')).toBe(false);
  });

  it("renders when isOpen is true", () => {
    render(
      <Modal isOpen={true} onClose={onClose} content={text} />
    );
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it("does not call onClose when modal content is clicked", () => {
    render(
      <Modal isOpen onClose={onClose} content={text} />
    );

    const modalContent = screen.getByText(text);
    fireEvent.click(modalContent);
    expect(onClose).not.toHaveBeenCalled();
  });

});