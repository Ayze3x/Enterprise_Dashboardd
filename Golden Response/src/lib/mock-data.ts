// Mock enterprise data — replace with real API once backend is wired
export type Role = "Admin" | "Manager" | "Analyst" | "Viewer";

export const kpis = [
  { label: "Total Revenue", value: "$2.847M", delta: 12.4, trend: "up" as const, hint: "vs last month" },
  { label: "Active Users", value: "184,392", delta: 8.1, trend: "up" as const, hint: "DAU" },
  { label: "Conversion Rate", value: "4.82%", delta: -0.6, trend: "down" as const, hint: "checkout funnel" },
  { label: "Avg Session", value: "6m 24s", delta: 3.2, trend: "up" as const, hint: "engagement" },
];

export const revenueSeries = Array.from({ length: 30 }, (_, i) => {
  const base = 80000 + Math.sin(i / 3) * 12000 + i * 1800;
  return {
    day: `D${i + 1}`,
    revenue: Math.round(base + (Math.random() - 0.5) * 8000),
    forecast: Math.round(base * 1.05 + (Math.random() - 0.5) * 5000),
  };
});

export const trafficByChannel = [
  { name: "Organic", value: 42 },
  { name: "Direct", value: 24 },
  { name: "Referral", value: 14 },
  { name: "Social", value: 12 },
  { name: "Email", value: 8 },
];

export const usageByRegion = [
  { region: "NA", users: 84200 },
  { region: "EU", users: 62100 },
  { region: "APAC", users: 48700 },
  { region: "LATAM", users: 18900 },
  { region: "MEA", users: 9400 },
];

const firstNames = ["Aiko", "Mateo", "Priya", "Lukas", "Zara", "Jonas", "Mei", "Noor", "Kai", "Ada", "Elena", "Omar"];
const lastNames = ["Tanaka", "Garcia", "Patel", "Müller", "Khan", "Andersen", "Chen", "Hassan", "Reed", "Lovelace", "Rossi", "Diallo"];
const roles: Role[] = ["Admin", "Manager", "Analyst", "Viewer"];
const statuses = ["Active", "Invited", "Suspended"] as const;

export type UserRow = {
  id: string;
  name: string;
  email: string;
  role: Role;
  status: (typeof statuses)[number];
  lastActive: string;
  sessions: number;
};

export const users: UserRow[] = Array.from({ length: 48 }, (_, i) => {
  const f = firstNames[i % firstNames.length];
  const l = lastNames[(i * 3) % lastNames.length];
  return {
    id: `usr_${1000 + i}`,
    name: `${f} ${l}`,
    email: `${f}.${l}`.toLowerCase() + "@acme.io",
    role: roles[i % roles.length],
    status: statuses[i % statuses.length],
    lastActive: `${(i % 23) + 1}h ago`,
    sessions: Math.floor(20 + Math.random() * 400),
  };
});

export const notifications = [
  { id: "n1", title: "Revenue anomaly detected", body: "EU revenue dropped 14% in the last hour.", time: "2m ago", level: "warning" as const, read: false },
  { id: "n2", title: "New admin invited", body: "priya.patel@acme.io accepted the invite.", time: "1h ago", level: "info" as const, read: false },
  { id: "n3", title: "Weekly report ready", body: "Your executive summary for week 21 is ready.", time: "5h ago", level: "success" as const, read: true },
  { id: "n4", title: "API rate limit warning", body: "Service `analytics-ingest` hit 85% of quota.", time: "yesterday", level: "warning" as const, read: true },
  { id: "n5", title: "Database failover completed", body: "Primary replica restored, p99 normalized.", time: "2d ago", level: "info" as const, read: true },
];

export const insights = [
  "Conversion in checkout dropped 0.6% — primarily on mobile Safari. Consider QA on payment sheet.",
  "EU/APAC sessions trending +18% week-over-week, outpacing infrastructure capacity plan.",
  "Three Analyst-role accounts inactive 30+ days — review for license reclaim.",
];
