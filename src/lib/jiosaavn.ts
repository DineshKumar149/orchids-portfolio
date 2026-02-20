// JioSaavn integration utilities
// ⚠️ LEGAL WARNING: This uses unofficial APIs and violates JioSaavn ToS
// Only for personal/educational use, NOT for production/commercial apps

export interface JioSaavnSong {
  id: string;
  name: string;
  artist: string;
  album: string;
  image: string;
  duration: number;
  downloadUrl?: Array<{
    quality: string;
    url: string;
  }>;
}

/**
 * Extract song ID from JioSaavn URL
 * Example: https://www.jiosaavn.com/song/skyfall/JzkDeiwEfGs -> JzkDeiwEfGs
 */
export function extractSongIdFromUrl(url: string): string | null {
  const match = url.match(/\/song\/[^/]+\/([A-Za-z0-9_-]+)/);
  return match ? match[1] : null;
}

/**
 * Fetch song details from JioSaavn using unofficial API
 */
export async function getSongDetails(songId: string): Promise<JioSaavnSong> {
  try {
    const response = await fetch(`https://saavn.dev/api/songs/${songId}`, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
      cache: 'no-store', // Don't cache as URLs expire
    });

    if (!response.ok) {
      throw new Error(`JioSaavn API error: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.success) {
      throw new Error("Failed to fetch song details");
    }

    const songData = data.data[0];
    
    return {
      id: songData.id,
      name: songData.name,
      artist: songData.artists?.primary?.[0]?.name || songData.artists?.all?.[0]?.name || "Unknown Artist",
      album: songData.album?.name || "Unknown Album",
      image: songData.image?.[songData.image.length - 1]?.url || "",
      duration: songData.duration || 0,
      downloadUrl: songData.downloadUrl || [],
    };
  } catch (error) {
    console.error("Failed to fetch JioSaavn song:", error);
    throw error;
  }
}

/**
 * Get the highest quality audio URL from download links
 */
export function getBestQualityAudioUrl(downloadUrls: Array<{ quality: string; url: string }>): string | null {
  if (!downloadUrls || downloadUrls.length === 0) return null;
  
  // Prefer 320kbps > 160kbps > 96kbps
  const qualityOrder = ["320kbps", "160kbps", "96kbps"];
  
  for (const quality of qualityOrder) {
    const link = downloadUrls.find(link => link.quality === quality);
    if (link) return link.url;
  }
  
  // Fallback to first available URL
  return downloadUrls[0]?.url || null;
}

/**
 * Format duration from seconds to MM:SS
 */
export function formatDuration(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}
