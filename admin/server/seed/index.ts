import { createUsersTable } from "./table-migration";
import { seedUsers } from "./user.seed";

async function runSeed() {
  try {
    console.log("🚀 Starting database seed...");

    // Create tables first
    await createUsersTable();

    // Then seed data
    await seedUsers();

    console.log("✅ Database seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
}

runSeed();
