import * as UserModel from "@/server/models/user.model";
import { hash } from "@/server/utils/hashing";

export async function seedUsers() {
  try {
    console.log("👤 Seeding users...");

    const existingUser = await UserModel.getUserByEmail("admin@admin.com");
    if (existingUser) {
      console.log("ℹ️  Admin user already exists, skipping");
      return;
    }

    const hashedPassword = await hash("admin");

    const adminUser = {
      name: "admin",
      email: "admin@admin.com",
      password: hashedPassword,
      role: "admin",
    };

    const createdUser = await UserModel.createUser(adminUser);
    console.log("✅ Admin user created successfully:", createdUser.email);
  } catch (error) {
    console.error("❌ Error seeding users:", error);
    throw error;
  }
}
