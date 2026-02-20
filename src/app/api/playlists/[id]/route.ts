import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { playlists, tracks } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;

    // Validate ID is a valid integer
    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json(
        {
          error: 'Valid playlist ID is required',
          code: 'INVALID_ID',
        },
        { status: 400 }
      );
    }

    const playlistId = parseInt(id);

    // Fetch playlist by ID
    const playlist = await db
      .select()
      .from(playlists)
      .where(eq(playlists.id, playlistId))
      .limit(1);

    if (playlist.length === 0) {
      return NextResponse.json(
        { error: 'Playlist not found' },
        { status: 404 }
      );
    }

    // Fetch all tracks that belong to this playlist
    const playlistTracks = await db
      .select()
      .from(tracks)
      .where(eq(tracks.playlistId, playlistId));

    return NextResponse.json(
      {
        playlist: playlist[0],
        tracks: playlistTracks,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json(
      {
        error: 'Internal server error: ' + (error as Error).message,
      },
      { status: 500 }
    );
  }
}