import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  DatePicker,
  Input,
  Textarea,
  Select,
  SelectItem,
  DateValue,
} from "@heroui/react";
import { UseDisclosureReturn } from "@/types";

interface WatchModalProps {
  disclosure: UseDisclosureReturn;
  onConfirm: () => void;
}

const WatchModal: React.FC<WatchModalProps> = ({ disclosure, onConfirm }) => {
  const [reminderDate, setReminderDate] = useState<DateValue | null>(null);
  const [quickNote, setQuickNote] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  const handleSubmit = () => {
    // Simulate saving data
    console.log({ reminderDate, quickNote, status, priority, tags });
    onConfirm();
  };

  return (
    <Modal isOpen={disclosure.isOpen} onClose={disclosure.onClose}>
      <ModalContent>
        <ModalHeader>Set to Watch</ModalHeader>
        <ModalBody>
          <DatePicker
            label="Reminder Date"
            value={reminderDate}
            onChange={setReminderDate}
          />
          <Textarea
            label="Quick Note"
            value={quickNote}
            onChange={(e) => setQuickNote(e.target.value)}
          />
          <Select
            label="Status"
            selectedKeys={[status]}
            onSelectionChange={(keys) =>
              setStatus(Array.from(keys)[0] as string)
            }
          >
            <SelectItem key="active">Active</SelectItem>
            <SelectItem key="pending">Pending</SelectItem>
            <SelectItem key="archived">Archived</SelectItem>
          </Select>
          <Select
            label="Priority"
            selectedKeys={[priority]}
            onSelectionChange={(keys) =>
              setPriority(Array.from(keys)[0] as string)
            }
          >
            <SelectItem key="low">Low</SelectItem>
            <SelectItem key="medium">Medium</SelectItem>
            <SelectItem key="high">High</SelectItem>
          </Select>
          <Select
            label="Tags"
            selectionMode="multiple"
            selectedKeys={tags}
            onSelectionChange={(keys) => setTags(Array.from(keys) as string[])}
          >
            <SelectItem key="feature">Feature</SelectItem>
            <SelectItem key="bug">Bug</SelectItem>
            <SelectItem key="enhancement">Enhancement</SelectItem>
            <SelectItem key="docs">Docs</SelectItem>
          </Select>
        </ModalBody>
        <ModalFooter>
          <Button color="default" onClick={disclosure.onClose}>
            Cancel
          </Button>
          <Button color="primary" onClick={handleSubmit}>
            Set to Watch
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default WatchModal;
