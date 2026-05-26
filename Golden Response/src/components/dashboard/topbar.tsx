import { Bell, Search, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";

export function Topbar({ title }: { title: string }) {
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-border bg-background/80 px-4 backdrop-blur md:px-6">
      <h1 className="text-base font-semibold tracking-tight md:text-lg">{title}</h1>
      <div className="ml-auto flex items-center gap-2">
        <div className="relative hidden md:block">
          <Search className="pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search dashboards, users, events…"
            className="h-9 w-72 pl-8"
            aria-label="Global search"
          />
        </div>
        <Button variant="ghost" size="icon" aria-label="Notifications" className="relative">
          <Bell className="h-5 w-5" />
          <Badge className="absolute -right-0.5 -top-0.5 h-4 min-w-4 rounded-full px-1 text-[10px]">
            3
          </Badge>
        </Button>
        <ThemeToggle />
        <Button variant="ghost" className="gap-2 pl-1.5 pr-2">
          <Avatar className="h-7 w-7">
            <AvatarFallback className="bg-primary text-primary-foreground text-xs">AK</AvatarFallback>
          </Avatar>
          <span className="hidden text-sm font-medium md:inline">Ada K.</span>
          <ChevronDown className="hidden h-4 w-4 text-muted-foreground md:inline" />
        </Button>
      </div>
    </header>
  );
}
