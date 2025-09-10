import { NextRequest, NextResponse } from "next/server";
import { verifyTokenEdge } from "@/server/utils/auth";

const protectedRoutes = [
  "/dashboard",
  "/dashboard/meta-data",
  "/dashboard/posts",
];

//const publicRoutes = ["/", "/login", "/register", "/api/health"];

const protectedApiRoutes = ["/api/v1"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const token = request.cookies.get("token")?.value;

  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  const isProtectedApiRoute = protectedApiRoutes.some((route) =>
    pathname.startsWith(route)
  );

  //   const isPublicRoute = publicRoutes.some(
  //     (route) => pathname === route || pathname.startsWith(route)
  //   );

  if (isProtectedRoute || isProtectedApiRoute) {
    if (!token) {
      if (isProtectedRoute) {
        const loginUrl = new URL("/", request.url);
        loginUrl.searchParams.set("redirectTo", pathname);
        return NextResponse.redirect(loginUrl);
      }

      if (isProtectedApiRoute) {
        return NextResponse.json(
          { error: "Authentication required" },
          { status: 401 }
        );
      }
    }

    try {
      const decoded = await verifyTokenEdge(token!);

      const response = NextResponse.next();
      response.headers.set("x-user-id", (decoded as any).id);
      response.headers.set("x-user-role", (decoded as any).role);
      response.headers.set("x-user-email", (decoded as any).email);

      return response;
    } catch (error) {
      if (isProtectedRoute) {
        const loginUrl = new URL("/", request.url);
        loginUrl.searchParams.set("redirectTo", pathname);
        loginUrl.searchParams.set("error", "session_expired");
        return NextResponse.redirect(loginUrl);
      }

      if (isProtectedApiRoute) {
        return NextResponse.json(
          { error: "Invalid or expired token" },
          { status: 401 }
        );
      }
    }
  }

  if (pathname === "/" && token) {
    try {
      await verifyTokenEdge(token);
      return NextResponse.redirect(new URL("/dashboard", request.url));
    } catch (error) {
      const response = NextResponse.next();
      response.cookies.delete("token");
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc.)
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
