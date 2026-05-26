import { useMemo, useState } from "react";
import { ArrowUpDown, Download, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { users, type UserRow, type Role } from "@/lib/mock-data";
import { toast } from "sonner";

type SortKey = keyof Pick<UserRow, "name" | "role" | "status" | "sessions">;

const roleColor: Record<Role, string> = {
  Admin: "bg-primary/15 text-primary",
  Manager: "bg-[color:var(--chart-4)]/15 text-[color:var(--chart-4)]",
  Analyst: "bg-[color:var(--chart-2)]/15 text-[color:var(--chart-2)]",
  Viewer: "bg-muted text-muted-foreground",
};

const statusColor: Record<UserRow["status"], string> = {
  Active: "bg-[color:var(--success)]/15 text-[color:var(--success)]",
  Invited: "bg-[color:var(--warning)]/15 text-[color:var(--warning)]",
  Suspended: "bg-destructive/15 text-destructive",
};

export function UsersTable() {
  const [q, setQ] = useState("");
  const [role, setRole] = useState<string>("all");
  const [sort, setSort] = useState<{ key: SortKey; dir: "asc" | "desc" }>({
    key: "name",
    dir: "asc",
  });
  const [page, setPage] = useState(1);
  const pageSize = 8;

  const filtered = useMemo(() => {
    let list = users.filter(
      (u) =>
        (role === "all" || u.role === role) &&
        (q === "" ||
          u.name.toLowerCase().includes(q.toLowerCase()) ||
          u.email.toLowerCase().includes(q.toLowerCase()))
    );
    list = [...list].sort((a, b) => {
      const av = a[sort.key];
      const bv = b[sort.key];
      if (av < bv) return sort.dir === "asc" ? -1 : 1;
      if (av > bv) return sort.dir === "asc" ? 1 : -1;
      return 0;
    });
    return list;
  }, [q, role, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pageRows = filtered.slice((page - 1) * pageSize, page * pageSize);

  const toggleSort = (key: SortKey) =>
    setSort((s) => ({ key, dir: s.key === key && s.dir === "asc" ? "desc" : "asc" }));

  const exportCsv = () => {
    const header = ["id", "name", "email", "role", "status", "sessions", "lastActive"];
    const rows = filtered.map((u) => header.map((h) => (u as any)[h]).join(","));
    const csv = [header.join(","), ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "users.csv";
    a.click();
    URL.revokeObjectURL(url);
    toast.success(`Exported ${filtered.length} users`);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <div className="relative">
          <Search className="pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setPage(1);
            }}
            placeholder="Search name or email"
            className="h-9 w-64 pl-8"
            aria-label="Filter users"
          />
        </div>
        <Select
          value={role}
          onValueChange={(v) => {
            setRole(v);
            setPage(1);
          }}
        >
          <SelectTrigger className="h-9 w-40" aria-label="Filter by role">
            <SelectValue placeholder="Role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All roles</SelectItem>
            <SelectItem value="Admin">Admin</SelectItem>
            <SelectItem value="Manager">Manager</SelectItem>
            <SelectItem value="Analyst">Analyst</SelectItem>
            <SelectItem value="Viewer">Viewer</SelectItem>
          </SelectContent>
        </Select>
        <div className="ml-auto flex items-center gap-2">
          <span className="text-xs text-muted-foreground">{filtered.length} results</span>
          <Button variant="outline" size="sm" onClick={exportCsv} className="gap-1.5">
            <Download className="h-4 w-4" /> Export CSV
          </Button>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-border bg-card">
        <Table>
          <TableHeader className="bg-muted/40">
            <TableRow>
              {(
                [
                  { k: "name", label: "User" },
                  { k: "role", label: "Role" },
                  { k: "status", label: "Status" },
                  { k: "sessions", label: "Sessions" },
                ] as { k: SortKey; label: string }[]
              ).map(({ k, label }) => (
                <TableHead key={k}>
                  <button
                    onClick={() => toggleSort(k)}
                    className="inline-flex items-center gap-1 text-xs font-medium uppercase tracking-wide text-muted-foreground hover:text-foreground"
                  >
                    {label}
                    <ArrowUpDown className="h-3 w-3" />
                  </button>
                </TableHead>
              ))}
              <TableHead className="text-xs uppercase tracking-wide text-muted-foreground">Last active</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pageRows.map((u) => (
              <TableRow key={u.id} className="hover:bg-muted/40">
                <TableCell>
                  <div className="font-medium">{u.name}</div>
                  <div className="text-xs text-muted-foreground">{u.email}</div>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className={roleColor[u.role]}>
                    {u.role}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className={statusColor[u.status]}>
                    {u.status}
                  </Badge>
                </TableCell>
                <TableCell className="tabular-nums">{u.sessions}</TableCell>
                <TableCell className="text-muted-foreground">{u.lastActive}</TableCell>
              </TableRow>
            ))}
            {pageRows.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center text-sm text-muted-foreground">
                  No users match your filters.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">
          Page {page} of {totalPages}
        </span>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
            Previous
          </Button>
          <Button variant="outline" size="sm" disabled={page === totalPages} onClick={() => setPage((p) => p + 1)}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
