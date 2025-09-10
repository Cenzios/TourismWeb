"use client";

import type React from "react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  User,
  Database,
  FileText,
  LogOut,
  Image,
  Home,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./ModeToggle";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("token");
    toast.success("Logged out successfully");
    router.push("/");
  };

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "Meta Data", href: "/dashboard/meta-data", icon: Database },
    { name: "Posts", href: "/dashboard/posts", icon: FileText },
    { name: "Gallery", href: "/dashboard/gallery", icon: Image },
  ];

  const Sidebar = ({ mobile = false }: { mobile?: boolean }) => (
    <div className="flex h-full flex-col bg-sidebar">
      {/* Logo Area */}
      <div className="flex h-14 sm:h-16 items-center border-b border-sidebar-border px-4 sm:px-6">
        <Link
          href="/"
          className="flex h-8 w-20 sm:w-24 items-center justify-center border-2 border-dashed border-sidebar-foreground/30 text-xs sm:text-sm text-sidebar-foreground hover:border-sidebar-foreground/50 transition-colors"
        >
          Logo area
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 sm:space-y-2 p-3 sm:p-4">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link key={item.name} href={item.href}>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start gap-3 h-10 sm:h-9 text-sm sm:text-base text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                  isActive && "bg-sidebar-accent text-sidebar-accent-foreground"
                )}
                onClick={() => mobile && setSidebarOpen(false)}
              >
                <Icon className="h-4 w-4 sm:h-4 sm:w-4 flex-shrink-0" />
                <span className="truncate">{item.name}</span>
              </Button>
            </Link>
          );
        })}
      </nav>

      {/* Logout Button */}
      <div className="border-t border-sidebar-border p-3 sm:p-4">
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 h-10 sm:h-9 text-sm sm:text-base text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          onClick={handleLogout}
        >
          <LogOut className="h-4 w-4 flex-shrink-0" />
          <span className="truncate">Log out</span>
        </Button>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-muted-background">
      {/* Desktop Sidebar */}
      <div className="hidden w-56 lg:w-64 lg:block">
        <Sidebar />
      </div>

      {/* Mobile Sidebar */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="w-64 p-0">
          <Sidebar mobile />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="flex flex-1 flex-col min-w-0">
        {/* Header */}
        <header className="flex h-14 sm:h-16 items-center justify-between border-b bg-background px-4 sm:px-6">
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Mobile Menu Button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden h-9 w-9 sm:h-10 sm:w-10"
                  onClick={() => setSidebarOpen(true)}
                >
                  <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </SheetTrigger>
            </Sheet>
          </div>

          {/* Header Controls */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Theme Toggle */}
            <ModeToggle />

            {/* User Profile */}
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 sm:h-9 sm:w-9"
            >
              <User className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span className="sr-only">User profile</span>
            </Button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-4 sm:p-6">{children}</main>
      </div>
    </div>
  );
}
