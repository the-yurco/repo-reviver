import {
  AddNoteIcon,
  CopyDocumentIcon,
  EditDocumentIcon,
  StarIcon,
} from "@/components/Icons";

export const getIconForEvent = (event: string) => {
  const iconClass = "text-background dark:text-foreground";

  if (event.startsWith("Commit:")) {
    return <EditDocumentIcon className={iconClass} />;
  } else if (event.includes("Issue")) {
    return <AddNoteIcon className={iconClass} />;
  } else if (event.includes("PR")) {
    return <CopyDocumentIcon className={iconClass} />;
  } else {
    return <StarIcon className={iconClass} />;
  }
};

export const getTypeForEvent = (event: string) => {
  if (event.startsWith("Commit:")) return "Commit";
  if (event.includes("Issue")) return "Issue";
  if (event.includes("PR")) return "PR";
  return "Other";
};
