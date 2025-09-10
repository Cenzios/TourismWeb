import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET || "";

export const signToken = (payload: any) =>
  jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });

export const verifyToken = (token: string) => jwt.verify(token, JWT_SECRET);

// Edge Runtime compatible token verification using Web Crypto API
export const verifyTokenEdge = async (token: string): Promise<any> => {
  try {
    const [header, payload, signature] = token.split(".");

    if (!header || !payload || !signature) {
      throw new Error("Invalid token format");
    }

    // Decode payload without verification first
    const decodedPayload = JSON.parse(
      Buffer.from(payload, "base64url").toString("utf8")
    );

    // Check expiration
    if (
      decodedPayload.exp &&
      decodedPayload.exp < Math.floor(Date.now() / 1000)
    ) {
      throw new Error("Token expired");
    }

    // Create the signing input
    const signingInput = `${header}.${payload}`;

    // Import the secret key
    const key = await crypto.subtle.importKey(
      "raw",
      new TextEncoder().encode(JWT_SECRET),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["verify"]
    );

    // Verify the signature
    const signatureBuffer = Buffer.from(signature, "base64url");
    const isValid = await crypto.subtle.verify(
      "HMAC",
      key,
      signatureBuffer,
      new TextEncoder().encode(signingInput)
    );

    if (!isValid) {
      throw new Error("Invalid signature");
    }

    return decodedPayload;
  } catch (error) {
    throw new Error("Token verification failed");
  }
};

export const getAuthHeader = (req: NextRequest) => {
  const authHeader = req.headers.get("authorization");
  if (!authHeader?.startsWith("Bearer ")) return null;
  return authHeader.substring(7);
};

export const authenticate = async (req: NextRequest) => {
  const token = getAuthHeader(req);
  if (!token) return null;

  try {
    const decoded = verifyToken(token) as any;
    return decoded;
  } catch {
    return null;
  }
};

export const getUserFromHeaders = (headers: Headers) => {
  const userId = headers.get("x-user-id");
  const userRole = headers.get("x-user-role");
  const userEmail = headers.get("x-user-email");

  if (!userId || !userRole || !userEmail) {
    return null;
  }

  return {
    id: parseInt(userId),
    role: userRole,
    email: userEmail,
  };
};
