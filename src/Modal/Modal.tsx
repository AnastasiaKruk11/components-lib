import React, {FC, useRef, useEffect} from "react";
import styles from './Modal.module.css';

export interface ModalProps {
    content: string;
    isOpen: boolean;
    children?: React.ReactNode;
    onClose: () => void
}

const Modal: FC<ModalProps> = ( {content, isOpen, children, onClose} ) => {

    const modalClasses = [styles.modalOverlay];

    if (isOpen) {
        modalClasses.push(styles.openedModal);
    }

    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
       const handleClickOutside = (event: MouseEvent) => {
         if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
           onClose();
         }
       };

       if (isOpen) {
         document.addEventListener('mousedown', handleClickOutside);
       } else {
         document.removeEventListener('mousedown', handleClickOutside);
       }

       return () => {
         document.removeEventListener('mousedown', handleClickOutside);
       };

    }, [isOpen, onClose]);

    return (
        <div role="modal" className={modalClasses.join(' ')}>
            <div className={styles.modal} ref={modalRef}>
            {content}
            {children}
            </div>
        </div>
    );
};

export default Modal;