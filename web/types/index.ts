export interface Repo {
  name: string;
  lastActivity: string;
  status: string;
  notes: string;
  watched: boolean;
  stars: number;
  forks: number;
  healthScore: number;
  activities: { event: string; time: string }[];
  pull_requests: string[];
  commits: string[];
  issues: string[];
  owner: { name: string; avatar: string };
}

export interface UseDisclosureReturn {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onOpenChange: (isOpen: boolean) => void;
}
