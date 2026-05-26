import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Sparkles, TrendingUp } from "lucide-react";
import { DashboardShell } from "@/components/dashboard/shell";
import { KpiCard } from "@/components/dashboard/kpi-card";
import { RevenueChart, TrafficPie, RegionBars } from "@/components/dashboard/charts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { kpis, insights } from "@/lib/mock-data";

export const Route = createFileRoute("/")({
  component: OverviewPage,
});

function OverviewPage() {
  return (
    <DashboardShell title="Executive Overview">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {kpis.map((k, i) => (
          <KpiCard key={k.label} {...k} index={i} />
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader className="flex flex-row items-start justify-between space-y-0">
            <div>
              <CardTitle className="text-base font-semibold">Revenue & Forecast</CardTitle>
              <CardDescription>Last 30 days · AI-projected next-period in dashed</CardDescription>
            </div>
            <div className="flex items-center gap-1 rounded-full bg-[color:var(--success)]/15 px-2 py-1 text-xs font-medium text-[color:var(--success)]">
              <TrendingUp className="h-3.5 w-3.5" /> Healthy
            </div>
          </CardHeader>
          <CardContent>
            <RevenueChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base font-semibold">Traffic by Channel</CardTitle>
            <CardDescription>Share of new sessions</CardDescription>
          </CardHeader>
          <CardContent>
            <TrafficPie />
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle className="text-base font-semibold">Active Users by Region</CardTitle>
            <CardDescription>Monthly active users · five regions</CardDescription>
          </CardHeader>
          <CardContent>
            <RegionBars />
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base font-semibold">
              <Sparkles className="h-4 w-4 text-primary" /> AI Insights
            </CardTitle>
            <CardDescription>Auto-generated from your KPIs</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {insights.map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="rounded-md border border-border bg-muted/30 p-3 text-sm leading-relaxed"
              >
                {text}
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  );
}
