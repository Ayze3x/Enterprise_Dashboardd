import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/dashboard/shell";
import { KpiCard } from "@/components/dashboard/kpi-card";
import { RevenueChart, ConversionLine, RegionBars } from "@/components/dashboard/charts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { kpis } from "@/lib/mock-data";

export const Route = createFileRoute("/analytics")({
  component: AnalyticsPage,
});

function AnalyticsPage() {
  return (
    <DashboardShell title="Analytics">
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="acquisition">Acquisition</TabsTrigger>
          <TabsTrigger value="retention">Retention</TabsTrigger>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {kpis.map((k, i) => (
              <KpiCard key={k.label} {...k} index={i} />
            ))}
          </div>
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
            <Card className="xl:col-span-2">
              <CardHeader>
                <CardTitle className="text-base font-semibold">Revenue trend</CardTitle>
                <CardDescription>Daily revenue with forecast overlay</CardDescription>
              </CardHeader>
              <CardContent><RevenueChart /></CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base font-semibold">Conversion rate</CardTitle>
                <CardDescription>Checkout completion %</CardDescription>
              </CardHeader>
              <CardContent><ConversionLine /></CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="text-base font-semibold">Users by region</CardTitle>
              <CardDescription>Distribution across geographies</CardDescription>
            </CardHeader>
            <CardContent><RegionBars /></CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="acquisition">
          <EmptyTab label="Acquisition" />
        </TabsContent>
        <TabsContent value="retention">
          <EmptyTab label="Retention" />
        </TabsContent>
        <TabsContent value="revenue">
          <EmptyTab label="Revenue deep-dive" />
        </TabsContent>
      </Tabs>
    </DashboardShell>
  );
}

function EmptyTab({ label }: { label: string }) {
  return (
    <Card>
      <CardContent className="flex h-64 flex-col items-center justify-center text-center">
        <div className="text-base font-medium">{label} module</div>
        <p className="mt-1 max-w-sm text-sm text-muted-foreground">
          Wire this tab to your data warehouse to populate cohort, funnel, and attribution views.
        </p>
      </CardContent>
    </Card>
  );
}
