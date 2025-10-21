import { useState, useEffect } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
  useSidebar,
} from "./components/ui/sidebar";
import { CalendarView } from "./components/CalendarView";
import { DashboardView } from "./components/DashboardView";
import { StudyTracker } from "./components/StudyTracker";
import { TasksView } from "./components/TasksView";
import { AccountView } from "./components/AccountView";
import { LinksView } from "./components/LinksView";
import { SpacedRepetitionSettings } from "./components/SpacedRepetitionSettings";
import { SpacedRepetitionProvider } from "./components/SpacedRepetitionContext";
import { Header } from "./components/Header";
import { Switch } from "./components/ui/switch";
import { Label } from "./components/ui/label";
import { Toaster } from "./components/ui/sonner";
import {
  Calendar,
  LayoutDashboard,
  BookOpen,
  CheckSquare,
  User,
  Link2,
  BrainCircuit,
  Menu,
} from "lucide-react";

type ViewType =
  | "home"
  | "study-tracker"
  | "tasks"
  | "dashboards"
  | "account"
  | "links"
  | "spaced-repetition";

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>("study-tracker");
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const renderView = () => {
    switch (currentView) {
      case "home":
        return <CalendarView />;
      case "study-tracker":
        return <StudyTracker />;
      case "tasks":
        return <TasksView />;
      case "dashboards":
        return <DashboardView />;
      case "account":
        return <AccountView />;
      case "links":
        return <LinksView />;
      case "spaced-repetition":
        return <SpacedRepetitionSettings />;
      default:
        return <CalendarView />;
    }
  };

  return (
    <SpacedRepetitionProvider>
      <SidebarProvider defaultOpen={true}>
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel className="text-gradient-primary">
                Task Manager
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      onClick={() => setCurrentView("home")}
                      isActive={currentView === "home"}
                    >
                      <Calendar className="h-4 w-4" />
                      <span>Home</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      onClick={() => setCurrentView("study-tracker")}
                      isActive={currentView === "study-tracker"}
                    >
                      <BookOpen className="h-4 w-4" />
                      <span>Study Tracker</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      onClick={() => setCurrentView("tasks")}
                      isActive={currentView === "tasks"}
                    >
                      <CheckSquare className="h-4 w-4" />
                      <span>Tasks</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      onClick={() => setCurrentView("dashboards")}
                      isActive={currentView === "dashboards"}
                    >
                      <LayoutDashboard className="h-4 w-4" />
                      <span>Dashboards</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      onClick={() => setCurrentView("links")}
                      isActive={currentView === "links"}
                    >
                      <Link2 className="h-4 w-4" />
                      <span>Links</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      onClick={() => setCurrentView("spaced-repetition")}
                      isActive={currentView === "spaced-repetition"}
                    >
                      <BrainCircuit className="h-4 w-4" />
                      <span>Spaced Repetition Settings</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      onClick={() => setCurrentView("account")}
                      isActive={currentView === "account"}
                    >
                      <User className="h-4 w-4" />
                      <span>Account</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>Appearance</SidebarGroupLabel>
              <SidebarGroupContent>
                <div className="flex items-center justify-between px-2 py-2">
                  <Label htmlFor="dark-mode" className="cursor-pointer">
                    Dark Mode
                  </Label>
                  <Switch
                    id="dark-mode"
                    checked={isDark}
                    onCheckedChange={setIsDark}
                  />
                </div>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <SidebarInset>
          <Header
            title={
              currentView === "home"
                ? "Dashboard Overview"
                : currentView === "study-tracker"
                  ? "Study Tracker"
                  : currentView === "tasks"
                    ? "Task Manager"
                    : currentView === "dashboards"
                      ? "Analytics Dashboard"
                      : currentView === "account"
                        ? "Account Settings"
                        : currentView === "links"
                          ? "Saved Links"
                          : "Spaced Repetition Settings"
            }
          />
          <div className="flex-1 p-6">{renderView()}</div>
        </SidebarInset>

        <Toaster />
      </SidebarProvider>
    </SpacedRepetitionProvider>
  );
}