import { cn } from "@/lib/utils";
import { DashboardLayout } from "@/components/common/dashboard-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Server, HardDrive, Cpu } from "lucide-react";

export default function DashboardPage() {
  const metaDataItems = [
    {
      title: "Database Status",
      value: "Connected",
      description: "PostgreSQL 15.2",
      icon: Database,
      status: "success",
    },
    {
      title: "Server Health",
      value: "Operational",
      description: "99.9% uptime",
      icon: Server,
      status: "success",
    },
    {
      title: "Storage Usage",
      value: "2.4 GB",
      description: "of 10 GB used",
      icon: HardDrive,
      status: "warning",
    },
    {
      title: "CPU Usage",
      value: "23%",
      description: "Average load",
      icon: Cpu,
      status: "success",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-4 sm:space-y-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
            Meta Data
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground mt-1 sm:mt-2">
            System information and metadata overview
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
          {metaDataItems.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="min-h-[120px] sm:min-h-[140px]">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium truncate pr-2">
                    {item.title}
                  </CardTitle>
                  <Icon className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                </CardHeader>
                <CardContent>
                  <div className="text-xl sm:text-2xl font-bold truncate">
                    {item.value}
                  </div>
                  <div className="flex items-center justify-between mt-2 gap-2">
                    <p className="text-xs text-muted-foreground truncate flex-1">
                      {item.description}
                    </p>
                    <Badge
                      variant={
                        item.status === "success" ? "default" : "secondary"
                      }
                      className={cn(
                        "text-xs flex-shrink-0",
                        item.status === "success" && "bg-green-500"
                      )}
                    >
                      {item.status}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">
              System Information
            </CardTitle>
            <CardDescription className="text-sm">
              Detailed system metadata and configuration
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-sm">
                <div className="flex justify-between sm:block">
                  <span className="font-medium">Environment:</span>
                  <span className="sm:ml-2 text-muted-foreground">
                    Production
                  </span>
                </div>
                <div className="flex justify-between sm:block">
                  <span className="font-medium">Version:</span>
                  <span className="sm:ml-2 text-muted-foreground">v1.2.3</span>
                </div>
                <div className="flex justify-between sm:block">
                  <span className="font-medium">Last Deploy:</span>
                  <span className="sm:ml-2 text-muted-foreground">
                    2 hours ago
                  </span>
                </div>
                <div className="flex justify-between sm:block">
                  <span className="font-medium">Region:</span>
                  <span className="sm:ml-2 text-muted-foreground">
                    us-east-1
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
