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
          error: "Valid track ID is required",
          code: "INVALID_ID" 
        },
        { status: 400 }
      );
    }

    const trackId = parseInt(id);

    // Check if track exists
    const existingTrack = await db.select()
      .from(tracks)
      .where(eq(tracks.id, trackId))
      .limit(1);

    if (existingTrack.length === 0) {
      return NextResponse.json(
        { error: "Track not found" },
        { status: 404 }
      );
    }

    // Increment likes count using SQL increment
    const updatedTrack = await db.update(tracks)
      .set({ 
        likes: sql`${tracks.likes} + 1`
      })
      .where(eq(tracks.id, trackId))
      .returning();

    if (updatedTrack.length === 0) {
      return NextResponse.json(
        { error: "Failed to update track" },
        { status: 500 }
      );
    }

    return NextResponse.json(updatedTrack[0], { status: 200 });

  } catch (error) {
    console.error('POST /api/tracks/[id]/like error:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error: ' + (error instanceof Error ? error.message : 'Unknown error')
      },
      { status: 500 }
    );
  }
}