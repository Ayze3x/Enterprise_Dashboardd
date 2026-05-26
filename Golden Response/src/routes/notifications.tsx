import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, CheckCircle2, Info } from "lucide-react";
import { DashboardShell } from "@/components/dashboard/shell";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { notifications as initial } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/notifications")({
  component: NotificationsPage,
});

const icon = {
  warning: AlertTriangle,
  success: CheckCircle2,
  info: Info,
} as const;

const iconColor = {
  warning: "text-[color:var(--warning)]",
  success: "text-[color:var(--success)]",
  info: "text-primary",
} as const;

function NotificationsPage() {
  const [items, setItems] = useState(initial);
  const [filter, setFilter] = useState<"all" | "unread">("all");

  const list = filter === "unread" ? items.filter((n) => !n.read) : items;
  const markAll = () => setItems((xs) => xs.map((n) => ({ ...n, read: true })));

  return (
    <DashboardShell title="Notification Center">
      <Card>
        <CardHeader className="flex flex-row items-start justify-between space-y-0">
          <div>
            <CardTitle className="text-base font-semibold">Activity</CardTitle>
            <CardDescription>Real-time system alerts and audit events</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Tabs value={filter} onValueChange={(v) => setFilter(v as any)}>
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="unread">Unread</TabsTrigger>
              </TabsList>
            </Tabs>
            <Button variant="outline" size="sm" onClick={markAll}>
              Mark all read
            </Button>
          </div>
        </CardHeader>
        <CardContent className="divide-y divide-border">
          <AnimatePresence initial={false}>
            {list.map((n) => {
              const Icon = icon[n.level];
              return (
                <motion.div
                  key={n.id}
                  layout
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: 12 }}
                  className="flex items-start gap-3 py-4"
                >
                  <div className={cn("mt-0.5 rounded-md bg-muted p-2", iconColor[n.level])}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{n.title}</span>
                      {!n.read && <span className="h-1.5 w-1.5 rounded-full bg-primary" />}
                    </div>
                    <p className="text-sm text-muted-foreground">{n.body}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{n.time}</span>
                </motion.div>
              );
            })}
          </AnimatePresence>
          {list.length === 0 && (
            <div className="flex h-32 items-center justify-center text-sm text-muted-foreground">
              You're all caught up.
            </div>
          )}
        </CardContent>
      </Card>
    </DashboardShell>
  );
}
