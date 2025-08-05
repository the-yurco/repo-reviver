import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Checkbox,
  Input,
} from "@heroui/react";
import { UseDisclosureReturn } from "@/types";

interface AutoReviveModalProps {
  disclosure: UseDisclosureReturn;
  onConfirm: () => void;
}

const AutoReviveModal: React.FC<AutoReviveModalProps> = ({
  disclosure,
  onConfirm,
}) => {
  const [autoUpdateDeps, setAutoUpdateDeps] = useState(false);
  const [autoMergePRs, setAutoMergePRs] = useState(false);
  const [schedule, setSchedule] = useState("");

  const handleSubmit = () => {
    // Simulate
    console.log({ autoUpdateDeps, autoMergePRs, schedule });
    onConfirm();
  };

  return (
    <Modal isOpen={disclosure.isOpen} onClose={disclosure.onClose}>
      <ModalContent>
        <ModalHeader>Auto Revive</ModalHeader>
        <ModalBody>
          <Checkbox
            isSelected={autoUpdateDeps}
            onValueChange={setAutoUpdateDeps}
          >
            Auto Update Dependencies
          </Checkbox>
          <Checkbox isSelected={autoMergePRs} onValueChange={setAutoMergePRs}>
            Auto Merge Safe PRs
          </Checkbox>
          <Input
            label="Schedule (cron)"
            value={schedule}
            onChange={(e) => setSchedule(e.target.value)}
            placeholder="0 0 * * *"
          />
        </ModalBody>
        <ModalFooter>
          <Button color="default" onClick={disclosure.onClose}>
            Cancel
          </Button>
          <Button color="primary" onClick={handleSubmit}>
            Set Auto Revive
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AutoReviveModal;
