import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

export const playlists = sqliteTable('playlists', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  description: text('description'),
  trackCount: integer('track_count').default(0),
  duration: text('duration'),
  views: integer('views').default(0),
  createdAt: text('created_at').notNull(),
});

export const tracks = sqliteTable('tracks', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  artist: text('artist').notNull(),
  duration: text('duration').notNull(),
  audioUrl: text('audio_url'),
  playlistId: integer('playlist_id').references(() => playlists.id),
  plays: integer('plays').default(0),
  likes: integer('likes').default(0),
  createdAt: text('created_at').notNull(),
});