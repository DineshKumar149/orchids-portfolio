import { NextRequest, NextResponse } from 'next/server';
import { getSongDetails, extractSongIdFromUrl, getBestQualityAudioUrl } from '@/lib/jiosaavn';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { url } = body;

    if (!url) {
      return NextResponse.json(
        { error: 'JioSaavn URL is required' },
        { status: 400 }
      );
    }

    // Extract song ID from URL
    const songId = extractSongIdFromUrl(url);
    if (!songId) {
      return NextResponse.json(
        { error: 'Invalid JioSaavn URL format' },
        { status: 400 }
      );
    }

    // Fetch song details from JioSaavn
    const songDetails = await getSongDetails(songId);
    
    // Get best quality audio URL
    const audioUrl = getBestQualityAudioUrl(songDetails.downloadUrl || []);

    if (!audioUrl) {
      return NextResponse.json(
        { error: 'No audio URL available for this song' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: {
        ...songDetails,
        audioUrl,
      }
    });
  } catch (error) {
    console.error('JioSaavn API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch song from JioSaavn' },
      { status: 500 }
    );
  }
}
