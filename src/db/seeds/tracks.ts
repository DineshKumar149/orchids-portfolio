import { db } from '@/db';
import { tracks } from '@/db/schema';

async function main() {
    const sampleTracks = [
        {
            title: 'Skyfall',
            artist: 'Adele',
            duration: '4:46',
            audioUrl: 'https://www.youtube.com/watch?v=DeumyOzKqgI',
            playlistId: 1,
            plays: 0,
            likes: 0,
            createdAt: new Date().toISOString(),
        },
        {
            title: 'Say Yes To Heaven',
            artist: 'Lana Del Rey',
            duration: '3:35',
            audioUrl: 'https://example.com/audio/track-2.mp3',
            playlistId: 1,
            plays: 0,
            likes: 0,
            createdAt: new Date().toISOString(),
        },
        {
            title: 'Die With A Smile',
            artist: 'Lady Gaga & Bruno Mars',
            duration: '4:11',
            audioUrl: 'https://example.com/audio/track-3.mp3',
            playlistId: 2,
            plays: 0,
            likes: 0,
            createdAt: new Date().toISOString(),
        },
        {
            title: 'BIRDS OF A FEATHER',
            artist: 'Billie Eilish',
            duration: '3:30',
            audioUrl: 'https://example.com/audio/track-4.mp3',
            playlistId: 2,
            plays: 0,
            likes: 0,
            createdAt: new Date().toISOString(),
        },
        {
            title: 'La Isla Bonita',
            artist: 'Madonna',
            duration: '4:02',
            audioUrl: 'https://example.com/audio/track-5.mp3',
            playlistId: 3,
            plays: 0,
            likes: 0,
            createdAt: new Date().toISOString(),
        },
        {
            title: 'Happy Nation',
            artist: 'Ace of Base',
            duration: '4:14',
            audioUrl: 'https://example.com/audio/track-6.mp3',
            playlistId: 3,
            plays: 0,
            likes: 0,
            createdAt: new Date().toISOString(),
        },
    ];

    await db.insert(tracks).values(sampleTracks);
    
    console.log('✅ Tracks seeder completed successfully');
}

main().catch((error) => {
    console.error('❌ Seeder failed:', error);
});