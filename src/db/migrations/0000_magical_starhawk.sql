CREATE TABLE IF NOT EXISTS "project_tools" (
	"id" serial PRIMARY KEY NOT NULL,
	"dateCreated" timestamp DEFAULT now() NOT NULL,
	"projectId" integer NOT NULL,
	"toolId" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "projects" (
	"id" serial PRIMARY KEY NOT NULL,
	"dateCreated" timestamp DEFAULT now() NOT NULL,
	"title" text NOT NULL,
	"slug" text NOT NULL,
	"description" text NOT NULL,
	"topicId" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "task_answers" (
	"id" serial PRIMARY KEY NOT NULL,
	"dateCreated" timestamp DEFAULT now() NOT NULL,
	"taskId" integer NOT NULL,
	"userId" text NOT NULL,
	"completed" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tasks" (
	"id" serial PRIMARY KEY NOT NULL,
	"dateCreated" timestamp DEFAULT now() NOT NULL,
	"title" text NOT NULL,
	"projectId" integer NOT NULL,
	"sortOrder" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tools" (
	"id" serial PRIMARY KEY NOT NULL,
	"dateCreated" timestamp DEFAULT now() NOT NULL,
	"title" text NOT NULL,
	"url" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "topics" (
	"id" serial PRIMARY KEY NOT NULL,
	"dateCreated" timestamp DEFAULT now() NOT NULL,
	"title" text NOT NULL,
	"sortOrder" integer NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "project_tools" ADD CONSTRAINT "project_tools_projectId_projects_id_fk" FOREIGN KEY ("projectId") REFERENCES "public"."projects"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "project_tools" ADD CONSTRAINT "project_tools_toolId_tools_id_fk" FOREIGN KEY ("toolId") REFERENCES "public"."tools"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "projects" ADD CONSTRAINT "projects_topicId_topics_id_fk" FOREIGN KEY ("topicId") REFERENCES "public"."topics"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "task_answers" ADD CONSTRAINT "task_answers_taskId_tasks_id_fk" FOREIGN KEY ("taskId") REFERENCES "public"."tasks"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tasks" ADD CONSTRAINT "tasks_projectId_projects_id_fk" FOREIGN KEY ("projectId") REFERENCES "public"."projects"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
