import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { tracks } from '@/db/schema';
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
          error: 'Valid track ID is required',
          code: 'INVALID_ID',
        },
        { status: 400 }
      );
    }

    const trackId = parseInt(id);

    // Fetch track by ID
    const track = await db
      .select()
      .from(tracks)
      .where(eq(tracks.id, trackId))
      .limit(1);

    // Check if track exists
    if (track.length === 0) {
      return NextResponse.json(
        {
          error: 'Track not found',
        },
        { status: 404 }
      );
    }

    // Return track object
    return NextResponse.json(track[0], { status: 200 });
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