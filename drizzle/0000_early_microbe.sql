CREATE TABLE `playlists` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`description` text,
	`track_count` integer DEFAULT 0,
	`duration` text,
	`views` integer DEFAULT 0,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tracks` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`artist` text NOT NULL,
	`duration` text NOT NULL,
	`playlist_id` integer,
	`plays` integer DEFAULT 0,
	`likes` integer DEFAULT 0,
	`created_at` text NOT NULL,
	FOREIGN KEY (`playlist_id`) REFERENCES `playlists`(`id`) ON UPDATE no action ON DELETE no action
);
