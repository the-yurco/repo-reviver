import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@heroui/react";
import { UseDisclosureReturn } from "@/types";

interface AIReviveModalProps {
  disclosure: UseDisclosureReturn;
  onConfirm: () => void;
}

const AIReviveModal: React.FC<AIReviveModalProps> = ({
  disclosure,
  onConfirm,
}) => {
  return (
    <Modal isOpen={disclosure.isOpen} onClose={disclosure.onClose}>
      <ModalContent>
        <ModalHeader>AI Revive</ModalHeader>
        <ModalBody>
          <p>I am still working on this Revive option, stay tuned...</p>
        </ModalBody>
        <ModalFooter>
          <Button color="default" onClick={disclosure.onClose}>
            Cancel
          </Button>
          <Button color="primary" onClick={onConfirm}>
            Proceed Anyway
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AIReviveModal;
