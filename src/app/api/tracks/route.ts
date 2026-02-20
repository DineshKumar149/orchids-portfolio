import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { tracks } from '@/db/schema';
import { eq, like, or, and } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const limit = Math.min(parseInt(searchParams.get('limit') ?? '10'), 100);
    const offset = parseInt(searchParams.get('offset') ?? '0');
    const search = searchParams.get('search');
    const playlistId = searchParams.get('playlistId');

    let query = db.select().from(tracks);

    const conditions = [];

    if (playlistId) {
      const parsedPlaylistId = parseInt(playlistId);
      if (!isNaN(parsedPlaylistId)) {
        conditions.push(eq(tracks.playlistId, parsedPlaylistId));
      }
    }

    if (search) {
      const searchCondition = or(
        like(tracks.title, `%${search}%`),
        like(tracks.artist, `%${search}%`)
      );
      conditions.push(searchCondition);
    }

    if (conditions.length > 0) {
      query = query.where(and(...conditions));
    }

    const results = await query.limit(limit).offset(offset);

    return NextResponse.json(results, { status: 200 });
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + (error as Error).message },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, artist, duration, playlistId, plays, likes } = body;

    // Validate required fields
    if (!title || typeof title !== 'string' || title.trim() === '') {
      return NextResponse.json(
        { error: 'Title is required and must be a non-empty string', code: 'MISSING_TITLE' },
        { status: 400 }
      );
    }

    if (!artist || typeof artist !== 'string' || artist.trim() === '') {
      return NextResponse.json(
        { error: 'Artist is required and must be a non-empty string', code: 'MISSING_ARTIST' },
        { status: 400 }
      );
    }

    if (!duration || typeof duration !== 'string' || duration.trim() === '') {
      return NextResponse.json(
        { error: 'Duration is required and must be a non-empty string', code: 'MISSING_DURATION' },
        { status: 400 }
      );
    }

    // Validate optional fields
    if (playlistId !== undefined && playlistId !== null && (typeof playlistId !== 'number' || isNaN(playlistId))) {
      return NextResponse.json(
        { error: 'PlaylistId must be a valid integer', code: 'INVALID_PLAYLIST_ID' },
        { status: 400 }
      );
    }

    if (plays !== undefined && (typeof plays !== 'number' || isNaN(plays) || plays < 0)) {
      return NextResponse.json(
        { error: 'Plays must be a non-negative integer', code: 'INVALID_PLAYS' },
        { status: 400 }
      );
    }

    if (likes !== undefined && (typeof likes !== 'number' || isNaN(likes) || likes < 0)) {
      return NextResponse.json(
        { error: 'Likes must be a non-negative integer', code: 'INVALID_LIKES' },
        { status: 400 }
      );
    }

    // Prepare insert data
    const insertData: {
      title: string;
      artist: string;
      duration: string;
      playlistId?: number | null;
      plays: number;
      likes: number;
      createdAt: string;
    } = {
      title: title.trim(),
      artist: artist.trim(),
      duration: duration.trim(),
      plays: plays ?? 0,
      likes: likes ?? 0,
      createdAt: new Date().toISOString(),
    };

    if (playlistId !== undefined) {
      insertData.playlistId = playlistId;
    }

    const newTrack = await db.insert(tracks).values(insertData).returning();

    return NextResponse.json(newTrack[0], { status: 201 });
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + (error as Error).message },
      { status: 500 }
    );
  }
}