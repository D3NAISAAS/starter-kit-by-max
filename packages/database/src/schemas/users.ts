import { boolean, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  banned: boolean("banned").notNull().default(false),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  defaultStoreId: text("default_store_id"),
  firstName: text("first_name").notNull(),

  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  email: text("email").notNull().unique(),
  imageUrl: text("image_url"),
  lastName: text("last_name").notNull(),
  locked: boolean("locked").notNull().default(false),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
