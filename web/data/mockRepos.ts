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

export const mockRepos: Repo[] = [
  {
    name: "portfolio-site",
    lastActivity: "1 day ago",
    status: "Active",
    notes: "Recent updates",
    watched: false,
    stars: 85,
    forks: 20,
    healthScore: 90,
    activities: [
      { event: "Commit: Added new feature", time: "1 day ago" },
      { event: "Issue closed #10", time: "2 days ago" },
      { event: "PR merged: UI improvements", time: "3 days ago" },
      { event: "Comment on issue #12", time: "4 days ago" },
      { event: "New tag v1.2 released", time: "5 days ago" },
      { event: "Branch deleted: old-feature", time: "6 days ago" },
      { event: "Wiki page edited", time: "7 days ago" },
      { event: "Label added: enhancement", time: "8 days ago" },
      { event: "Milestone created: v1.3", time: "9 days ago" },
      { event: "Commit: Fixed typo", time: "10 days ago" },
      { event: "Issue opened #15", time: "11 days ago" },
      { event: "PR opened: New design", time: "12 days ago" },
      { event: "Star added by user", time: "13 days ago" },
      { event: "Fork created", time: "14 days ago" },
      { event: "Release drafted", time: "15 days ago" },
      { event: "Comment on PR #16", time: "16 days ago" },
      { event: "Issue assigned to dev", time: "17 days ago" },
      { event: "Commit: Refactor code", time: "18 days ago" },
      { event: "Branch created: feature-x", time: "19 days ago" },
      { event: "Label removed: bug", time: "20 days ago" },
      { event: "Milestone updated", time: "21 days ago" },
      { event: "PR closed: Duplicate", time: "22 days ago" },
      { event: "Issue reopened #8", time: "23 days ago" },
      { event: "Commit: Update docs", time: "24 days ago" },
      { event: "Wiki created page", time: "25 days ago" },
      { event: "Star removed by user", time: "26 days ago" },
      { event: "Fork deleted", time: "27 days ago" },
      { event: "Release published v1.1", time: "28 days ago" },
      { event: "Comment added to issue #9", time: "29 days ago" },
      { event: "Issue labeled: priority", time: "30 days ago" },
    ],
    pull_requests: ["PR #15: Feature addition", "PR #14: Bug fix"],
    commits: ["Commit 1: Initial setup", "Commit 2: Added features"],
    issues: ["Issue #1: Bug fix needed", "Issue #2: Enhancement request"],
    owner: {
      name: "Johnny Brave",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    },
  },
  // ... (other repos similarly, ensuring all fields are present)
  // Note: For brevity, assuming the other repos are defined similarly in the full code.
];

export const dormantRepos = mockRepos.filter(
  (repo) => repo.status === "Dormant" || repo.status === "Nearing"
);
