import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/dashboard/shell";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

export const Route = createFileRoute("/settings")({
  component: SettingsPage,
});

function SettingsPage() {
  return (
    <DashboardShell title="Settings">
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle className="text-base font-semibold">Workspace</CardTitle>
            <CardDescription>General organization settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="grid gap-2">
              <Label htmlFor="org">Organization name</Label>
              <Input id="org" defaultValue="Acme Corporation" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="domain">Primary domain</Label>
              <Input id="domain" defaultValue="acme.io" />
            </div>
            <Separator />
            <Pref label="Real-time updates" hint="Push live KPI changes via WebSocket." defaultChecked />
            <Pref label="AI anomaly detection" hint="Highlight unusual KPI movements automatically." defaultChecked />
            <Pref label="Weekly executive digest" hint="Email a Monday summary to admins." />
            <Pref label="Audit log retention (90 days)" hint="Required for SOC2 reporting." defaultChecked />
            <div className="flex justify-end">
              <Button onClick={() => toast.success("Settings saved")}>Save changes</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base font-semibold">Security</CardTitle>
            <CardDescription>Authentication & session policy</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <Pref label="Require 2FA for admins" defaultChecked />
            <Pref label="SSO (SAML / OIDC)" hint="Enterprise plan" defaultChecked />
            <Pref label="API rate limiting" defaultChecked />
            <Pref label="IP allowlist" />
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  );
}

function Pref({ label, hint, defaultChecked }: { label: string; hint?: string; defaultChecked?: boolean }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <div className="text-sm font-medium">{label}</div>
        {hint && <div className="text-xs text-muted-foreground">{hint}</div>}
      </div>
      <Switch defaultChecked={defaultChecked} aria-label={label} />
    </div>
  );
}
