import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Props = {
  label: string;
  value: string;
  delta: number;
  trend: "up" | "down";
  hint?: string;
  index?: number;
};

export function KpiCard({ label, value, delta, trend, hint, index = 0 }: Props) {
  const up = trend === "up";
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3, ease: "easeOut" }}
    >
      <Card className="relative overflow-hidden">
        <CardContent className="p-5">
          <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {label}
          </div>
          <div className="mt-2 flex items-end justify-between gap-2">
            <div className="text-3xl font-semibold tracking-tight tabular-nums">{value}</div>
            <div
              className={cn(
                "flex items-center gap-0.5 rounded-full px-2 py-0.5 text-xs font-medium",
                up
                  ? "bg-[color:var(--success)]/15 text-[color:var(--success)]"
                  : "bg-destructive/15 text-destructive"
              )}
            >
              {up ? <ArrowUpRight className="h-3.5 w-3.5" /> : <ArrowDownRight className="h-3.5 w-3.5" />}
              {Math.abs(delta)}%
            </div>
          </div>
          {hint && <div className="mt-1 text-xs text-muted-foreground">{hint}</div>}
          <div className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-primary/5 blur-2xl" />
        </CardContent>
      </Card>
    </motion.div>
  );
}
