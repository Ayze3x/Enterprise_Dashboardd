import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { AppSidebar } from "./sidebar";
import { Topbar } from "./topbar";

export function DashboardShell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex min-h-dvh bg-background text-foreground">
      <AppSidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar title={title} />
        <motion.main
          key={title}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="flex-1 p-4 md:p-6"
        >
          {children}
        </motion.main>
      </div>
    </div>
  );
}
