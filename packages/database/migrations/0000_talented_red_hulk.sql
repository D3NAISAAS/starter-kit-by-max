CREATE TABLE "users" (
	"banned" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"default_store_id" text,
	"first_name" text NOT NULL,
	"id" text PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"image_url" text,
	"last_name" text NOT NULL,
	"locked" boolean DEFAULT false NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
