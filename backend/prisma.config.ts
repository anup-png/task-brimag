import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    // Access env variable directly instead of using env() helper
    url: process.env.DATABASE_URL || "",
  },
});
