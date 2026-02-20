import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { playlists } from '@/db/schema';
import { eq, like, or } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = Math.min(parseInt(searchParams.get('limit') ?? '10'), 100);
    const offset = parseInt(searchParams.get('offset') ?? '0');
    const search = searchParams.get('search');

    let query = db.select().from(playlists);

    if (search) {
      query = query.where(
        or(
          like(playlists.name, `%${search}%`),
          like(playlists.description, `%${search}%`)
        )
      );
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
    const { name, description, trackCount, duration, views } = body;

    // Validate required fields
    if (!name || typeof name !== 'string' || name.trim() === '') {
      return NextResponse.json(
        {
          error: 'Name is required and must be a non-empty string',
          code: 'MISSING_REQUIRED_FIELD'
        },
        { status: 400 }
      );
    }

    // Prepare insert data with defaults and auto-generated fields
    const insertData = {
      name: name.trim(),
      description: description ? description.trim() : null,
      trackCount: trackCount !== undefined ? trackCount : 0,
      duration: duration ? duration.trim() : null,
      views: views !== undefined ? views : 0,
      createdAt: new Date().toISOString()
    };

    const newPlaylist = await db.insert(playlists)
      .values(insertData)
      .returning();

    return NextResponse.json(newPlaylist[0], { status: 201 });
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + (error as Error).message },
      { status: 500 }
    );
  }
}