"use server";

import { actionClient } from "@/lib/safe-action";
import { loginSchema } from "./schema";
import { loginUser } from "@/server/services/user.service";
import { signToken } from "@/server/utils/auth";

export const loginAction = actionClient
  .inputSchema(loginSchema)
  .action(async ({ parsedInput }) => {
    try {
      const user = await loginUser(parsedInput.email, parsedInput.password);

      if (!user) {
        return {
          success: false,
          message: "Invalid email or password",
        };
      }

      const token = signToken({
        id: user.id,
        role: user.role,
        name: user.name,
        email: user.email,
      }) as string;

      return {
        success: true,
        message: "Login successful",
        token,
        user,
      };
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : "Login failed");
    }
  });
