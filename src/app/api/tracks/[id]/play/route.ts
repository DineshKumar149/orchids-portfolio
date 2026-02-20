import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { tracks } from '@/db/schema';
import { eq, sql } from 'drizzle-orm';

export async function POST(
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

    // Increment play count using SQL increment
    const updatedTrack = await db
      .update(tracks)
      .set({ 
        plays: sql`${tracks.plays} + 1`
      })
      .where(eq(tracks.id, trackId))
      .returning();

    // Check if track was found and updated
    if (updatedTrack.length === 0) {
      return NextResponse.json(
        { error: 'Track not found' },
        { status: 404 }
      );
    }

    // Return the updated track object
    return NextResponse.json(updatedTrack[0], { status: 200 });
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + (error as Error).message },
      { status: 500 }
    );
  }
}