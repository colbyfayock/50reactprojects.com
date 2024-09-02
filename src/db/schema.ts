import { pgTable, serial, text, timestamp, integer, boolean } from 'drizzle-orm/pg-core';

// const project = {
//   id: 1234,
//   title: 'Analytics',
//   description: 'Add Google Analytics to your webpage to analyze web traffic and performance.',
//   topicId: 1234,
// }

export const Projects = pgTable('projects', {
  id: serial('id').primaryKey().notNull(),
  dateCreated: timestamp('dateCreated').defaultNow().notNull(),
  title: text('title').notNull(),
  slug: text('slug').notNull(),
  description: text('description').notNull(),
  topicId: integer('topicId').notNull().references(() => Topics.id),
});

// const topic = {
//   id: 1234,
//   title: 'Project Add-Ons',
//   order: 1
// }

export const Topics = pgTable('topics', {
  id: serial('id').primaryKey().notNull(),
  dateCreated: timestamp('dateCreated').defaultNow().notNull(),
  title: text('title').notNull(),
  sortOrder: integer('sortOrder').notNull(),
});

// const task = {
//   id: 1234,
//   title: 'Create GA account',
//   projectId: 1234
// }

export const Tasks = pgTable('tasks', {
  id: serial('id').primaryKey().notNull(),
  dateCreated: timestamp('dateCreated').defaultNow().notNull(),
  title: text('title').notNull(),
  projectId: integer('projectId').notNull().references(() => Projects.id),
  sortOrder: integer('sortOrder').notNull(),
});

export const TaskAnswers = pgTable('task_answers', {
  id: serial('id').primaryKey().notNull(),
  dateCreated: timestamp('dateCreated').defaultNow().notNull(),
  taskId: integer('taskId').notNull().references(() => Tasks.id),
  userId: text('userId').notNull(),
  completed: boolean('completed').notNull().default(false),
});

// const took = {
//   id: 1234,
//   title: 'Google Analytics'
// }

export const Tools = pgTable('tools', {
  id: serial('id').primaryKey().notNull(),
  dateCreated: timestamp('dateCreated').defaultNow().notNull(),
  title: text('title').notNull(),
  url: text('url'),
});

export const ProjectTools = pgTable('project_tools', {
  id: serial('id').primaryKey().notNull(),
  dateCreated: timestamp('dateCreated').defaultNow().notNull(),
  projectId: integer('projectId').notNull().references(() => Projects.id),
  toolId: integer('toolId').notNull().references(() => Tools.id),
});