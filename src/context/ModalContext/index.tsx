import React, { createContext, useContext, useState } from "react";
import Modal from "../../components/overlays/Modal";

// Define types for the context values
interface ModalContextType {
    showModal: (content: React.ReactNode) => void;
    closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | null>(null);

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) throw new Error("useModal must be used within a ModalProvider");
    return context;

};

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
    const [modalContent, setModalContent] = useState<React.ReactNode | null>(null);

    const showModal = (content: React.ReactNode) => {
        setModalContent(content);
    };

    const closeModal = () => {
        setModalContent(null);
    };

    return (
        <ModalContext.Provider value={{ showModal, closeModal }}>
            {children}
            {modalContent && (
                <Modal onClose={closeModal}>
                    {modalContent}
                </Modal>
            )}
        </ModalContext.Provider>
    );
};