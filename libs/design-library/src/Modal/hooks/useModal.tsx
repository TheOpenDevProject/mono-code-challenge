import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Modal } from "../Modal";

export function useModal() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalContents, setModalContents] = useState<React.ReactNode | null>(null);
  const [modalTitle, setModalTitle] = useState<string>("");
  const [modal, setModal] = useState<React.ReactNode | null>();
  const setContents = useCallback((contents: React.ReactNode, title: string) => {
    setModalContents(contents);
    setModalTitle(title);
  }, []);

  const toggleModal = useCallback(() => {
    setModalOpen(!modalOpen);
  }, [modalOpen]);

  useEffect(() => {
    const rootContainer = document.getElementById("root");

    if (modalOpen) {
      if (rootContainer) {
        setModal(
          ReactDOM.createPortal(
            <Modal title={modalTitle} onClose={toggleModal}>
              {modalContents}
            </Modal>,
            rootContainer
          )
        );
      }
      return;
    }

    setModal(null);
  }, [modalOpen, modalContents, toggleModal, modalTitle]);

  return { setContents, toggleModal, modal, modalOpen, setModalOpen };
}
