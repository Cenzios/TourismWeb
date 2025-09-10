import { cn } from "@/lib/utils";
import { DashboardLayout } from "@/components/common/dashboard-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Eye, Edit, Trash2, Calendar, User } from "lucide-react";

export default function PostsPage() {
  const posts = [
    {
      id: 1,
      title: "Getting Started with Next.js 14",
      excerpt:
        "Learn the fundamentals of Next.js 14 and its new features including the App Router and Server Components.",
      author: "John Doe",
      date: "2024-01-15",
      status: "published",
      views: 1234,
    },
    {
      id: 2,
      title: "Building Modern Dashboards",
      excerpt:
        "A comprehensive guide to creating responsive and accessible dashboard interfaces with React and Tailwind CSS.",
      author: "Jane Smith",
      date: "2024-01-12",
      status: "draft",
      views: 0,
    },
    {
      id: 3,
      title: "TypeScript Best Practices",
      excerpt:
        "Essential TypeScript patterns and practices for building scalable applications with better type safety.",
      author: "Mike Johnson",
      date: "2024-01-10",
      status: "published",
      views: 856,
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-4 sm:space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
              Posts
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground mt-1 sm:mt-2">
              Manage your blog posts and articles
            </p>
          </div>
          <Button className="gap-2 w-full sm:w-auto">
            <Plus className="h-4 w-4" />
            New Post
          </Button>
        </div>

        <div className="grid gap-4 sm:gap-6">
          {posts.map((post) => (
            <Card key={post.id}>
              <CardHeader className="pb-3 sm:pb-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div className="space-y-2 min-w-0 flex-1">
                    <CardTitle className="text-lg sm:text-xl leading-tight">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base line-clamp-2">
                      {post.excerpt}
                    </CardDescription>
                  </div>
                  <Badge
                    variant={
                      post.status === "published" ? "default" : "secondary"
                    }
                    className={cn(
                      "self-start flex-shrink-0",
                      post.status === "published" && "bg-green-500"
                    )}
                  >
                    {post.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      <span className="truncate">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      <span>{post.views} views</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 sm:h-9 sm:w-9 p-0"
                    >
                      <Eye className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 sm:h-9 sm:w-9 p-0"
                    >
                      <Edit className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 sm:h-9 sm:w-9 p-0"
                    >
                      <Trash2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
