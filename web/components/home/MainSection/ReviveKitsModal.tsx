import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Select,
  SelectItem,
  Checkbox,
  Textarea,
} from "@heroui/react";
import { UseDisclosureReturn } from "@/types";

interface ReviveKitsModalProps {
  disclosure: UseDisclosureReturn;
  onConfirm: () => void;
}

const ReviveKitsModal: React.FC<ReviveKitsModalProps> = ({
  disclosure,
  onConfirm,
}) => {
  const [kitType, setKitType] = useState("");
  const [customKitName, setCustomKitName] = useState("");
  const [dependencies, setDependencies] = useState<string[]>([]);
  const [features, setFeatures] = useState<string[]>([]);
  const [license, setLicense] = useState("");
  const [description, setDescription] = useState("");
  const [includeTests, setIncludeTests] = useState(false);
  const [includeDocs, setIncludeDocs] = useState(false);
  const [ciCdIntegration, setCiCdIntegration] = useState(false);

  const handleSubmit = () => {
    // Simulate saving
    console.log({
      kitType,
      customKitName,
      dependencies,
      features,
      license,
      description,
      includeTests,
      includeDocs,
      ciCdIntegration,
    });
    onConfirm();
  };

  return (
    <Modal isOpen={disclosure.isOpen} onClose={disclosure.onClose} size="2xl">
      <ModalContent>
        <ModalHeader>Revive Kits</ModalHeader>
        <ModalBody className="grid grid-cols-2 gap-4">
          <Select
            label="Kit Type"
            selectedKeys={[kitType]}
            onSelectionChange={(keys) =>
              setKitType(Array.from(keys)[0] as string)
            }
          >
            <SelectItem key="frontend">Frontend</SelectItem>
            <SelectItem key="backend">Backend</SelectItem>
            <SelectItem key="fullstack">Fullstack</SelectItem>
            <SelectItem key="ml">Machine Learning</SelectItem>
            <SelectItem key="custom">Custom</SelectItem>
          </Select>
          <Input
            label="Custom Kit Name"
            value={customKitName}
            onChange={(e) => setCustomKitName(e.target.value)}
            isDisabled={kitType !== "custom"}
          />
          <Select
            label="Dependencies"
            selectionMode="multiple"
            selectedKeys={dependencies}
            onSelectionChange={(keys) =>
              setDependencies(Array.from(keys) as string[])
            }
          >
            <SelectItem key="react">React</SelectItem>
            <SelectItem key="nextjs">Next.js</SelectItem>
            <SelectItem key="tailwind">Tailwind CSS</SelectItem>
            <SelectItem key="express">Express</SelectItem>
            <SelectItem key="tensorflow">TensorFlow</SelectItem>
          </Select>
          <Select
            label="Features"
            selectionMode="multiple"
            selectedKeys={features}
            onSelectionChange={(keys) =>
              setFeatures(Array.from(keys) as string[])
            }
          >
            <SelectItem key="auth">Authentication</SelectItem>
            <SelectItem key="db">Database Integration</SelectItem>
            <SelectItem key="api">API Endpoints</SelectItem>
            <SelectItem key="ui">UI Components</SelectItem>
            <SelectItem key="mlmodels">ML Models</SelectItem>
          </Select>
          <Select
            label="License"
            selectedKeys={[license]}
            onSelectionChange={(keys) =>
              setLicense(Array.from(keys)[0] as string)
            }
          >
            <SelectItem key="mit">MIT</SelectItem>
            <SelectItem key="gpl">GPL</SelectItem>
            <SelectItem key="apache">Apache</SelectItem>
          </Select>
          <Textarea
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="col-span-2 flex flex-col gap-2">
            <Checkbox isSelected={includeTests} onValueChange={setIncludeTests}>
              Include Tests
            </Checkbox>
            <Checkbox isSelected={includeDocs} onValueChange={setIncludeDocs}>
              Include Documentation
            </Checkbox>
            <Checkbox
              isSelected={ciCdIntegration}
              onValueChange={setCiCdIntegration}
            >
              CI/CD Integration
            </Checkbox>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="default" onClick={disclosure.onClose}>
            Cancel
          </Button>
          <Button color="primary" onClick={handleSubmit}>
            Apply Kit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ReviveKitsModal;
