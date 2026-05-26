import { createFileRoute } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { DashboardShell } from "@/components/dashboard/shell";
import { UsersTable } from "@/components/dashboard/users-table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const Route = createFileRoute("/users")({
  component: UsersPage,
});

function UsersPage() {
  return (
    <DashboardShell title="Users & Roles">
      <Card>
        <CardHeader className="flex flex-row items-start justify-between space-y-0">
          <div>
            <CardTitle className="text-base font-semibold">Workspace members</CardTitle>
            <CardDescription>Manage roles, sessions, and access across your organization.</CardDescription>
          </div>
          <Button size="sm" className="gap-1.5">
            <Plus className="h-4 w-4" /> Invite member
          </Button>
        </CardHeader>
        <CardContent>
          <UsersTable />
        </CardContent>
      </Card>
    </DashboardShell>
  );
}
