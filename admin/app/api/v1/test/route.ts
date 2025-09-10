import { NextRequest, NextResponse } from "next/server";
import { getUserFromHeaders } from "@/server/utils/auth";

export async function GET(request: NextRequest) {
  try {
    const user = getUserFromHeaders(request.headers);

    if (!user) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      );
    }

    return NextResponse.json({
      message: "Authenticated request successful",
      user: {
        id: user.id,
        role: user.role,
        email: user.email,
      },
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("API test error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
