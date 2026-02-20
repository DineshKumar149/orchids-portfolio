import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { playlists } from '@/db/schema';
import { eq, sql } from 'drizzle-orm';

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;

    // Validate ID
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

    // Check if playlist exists
    const existingPlaylist = await db
      .select()
      .from(playlists)
      .where(eq(playlists.id, playlistId))
      .limit(1);

    if (existingPlaylist.length === 0) {
      return NextResponse.json(
        { error: 'Playlist not found' },
        { status: 404 }
      );
    }

    // Increment views count
    const updatedPlaylist = await db
      .update(playlists)
      .set({ views: sql`${playlists.views} + 1` })
      .where(eq(playlists.id, playlistId))
      .returning();

    return NextResponse.json(updatedPlaylist[0], { status: 200 });
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json(
      {
        error: 'Internal server error: ' + (error as Error).message,
      },
      { status: 500 }
    );
  }
}