import { db } from '@/db';
import { playlists } from '@/db/schema';

async function main() {
    const samplePlaylists = [
        {
            name: 'Summertime Sadness',
            description: 'Perfect concentration music for design work and engineering tasks',
            trackCount: 44,
            duration: '4:26',
            views: 0,
            createdAt: new Date().toISOString(),
        },
        {
            name: 'Young and Beautiful',
            description: 'Upbeat tracks to boost creativity during brainstorming sessions',
            trackCount: 28,
            duration: '3:59',
            views: 0,
            createdAt: new Date().toISOString(),
        },
        {
            name: 'Cinnamon Girl',
            description: 'Relaxing ambient sounds for late-night CAD modeling',
            trackCount: 30,
            duration: '4:59',
            views: 0,
            createdAt: new Date().toISOString(),
        },
    ];

    await db.insert(playlists).values(samplePlaylists);
    
    console.log('✅ Playlists seeder completed successfully');
}

main().catch((error) => {
    console.error('❌ Seeder failed:', error);
});