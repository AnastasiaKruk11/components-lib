import React, { FC } from "react";
export interface ModalProps {
    content: string;
    isOpen: boolean;
    children?: React.ReactNode;
    onClose: () => void;
}
declare const Modal: FC<ModalProps>;
export default Modal;
