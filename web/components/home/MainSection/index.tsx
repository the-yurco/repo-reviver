"use client";
import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/react";
import { Repo } from "@/types";
import ReviveActivityCard from "./ReviveActivityCard";
import WatchModal from "./WatchModal";
import AIReviveModal from "./AIReviveModal";
import ReviveKitsModal from "./ReviveKitsModal";
import AutoReviveModal from "./AutoReviveModal";
import { dormantRepos, mockRepos } from "@/data/mockRepos";
import ReviveRepoCard from "./ReviveRepoCard";

const FirstSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const mockFeaturedRepo: Repo = dormantRepos[currentIndex] || mockRepos[0];
  const watchDisclosure = useDisclosure();
  const aiReviveDisclosure = useDisclosure();
  const reviveKitsDisclosure = useDisclosure();
  const autoReviveDisclosure = useDisclosure();
  const actionDisclosure = useDisclosure();
  const handleWatch = () => {
    watchDisclosure.onOpen();
  };
  const handleReviveOption = (key: string) => {
    if (key === "ai") {
      aiReviveDisclosure.onOpen();
    } else if (key === "kits") {
      reviveKitsDisclosure.onOpen();
    } else if (key === "auto") {
      autoReviveDisclosure.onOpen();
    }
  };
  const handleConfirmAction = () => {
    setCurrentIndex((prev) => (prev + 1) % dormantRepos.length);
    watchDisclosure.onClose();
    aiReviveDisclosure.onClose();
    reviveKitsDisclosure.onClose();
    autoReviveDisclosure.onClose();
    actionDisclosure.onOpen();
  };

  return (
    <section className="my-8 flex gap-4">
      <div className="w-2/3 h-full">
        <ReviveRepoCard
          repo={mockFeaturedRepo}
          handleWatch={handleWatch}
          handleReviveOption={handleReviveOption}
        />
      </div>
      <div className="w-1/3">
        <ReviveActivityCard />
      </div>
      <WatchModal
        disclosure={watchDisclosure}
        onConfirm={handleConfirmAction}
      />
      <AIReviveModal
        disclosure={aiReviveDisclosure}
        onConfirm={handleConfirmAction}
      />
      <ReviveKitsModal
        disclosure={reviveKitsDisclosure}
        onConfirm={handleConfirmAction}
      />
      <AutoReviveModal
        disclosure={autoReviveDisclosure}
        onConfirm={handleConfirmAction}
      />
      <Modal
        isOpen={actionDisclosure.isOpen}
        onClose={actionDisclosure.onClose}
      >
        <ModalContent>
          <ModalHeader>Action Confirmed</ModalHeader>
          <ModalBody>
            <p>Repository has been updated. Moved to next repo.</p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={actionDisclosure.onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </section>
  );
};
export default FirstSection;
