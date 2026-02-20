"use client"

import { motion } from "framer-motion"
import { Music, Play, Heart, Clock, Eye, Pause, Volume2, VolumeX } from "lucide-react"
import { useState, useEffect, useRef } from "react"

interface Playlist {
  id: number
  name: string
  description: string
  trackCount: number
  duration: string
  views: number
}

interface Track {
  id: number
  title: string
  artist: string
  duration: string
  audioUrl: string | null
  playlistId: number | null
  plays: number
  likes: number
}

export default function SongsPage() {
  const [playlists, setPlaylists] = useState<Playlist[]>([])
  const [tracks, setTracks] = useState<Track[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [likedTracks, setLikedTracks] = useState<Set<number>>(new Set())
  
  // Audio player state
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  // Fetch playlists and tracks on mount
  useEffect(() => {
    fetchData()
  }, [])

  // Audio event listeners
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime)
    const handleDurationChange = () => setDuration(audio.duration)
    const handleEnded = () => {
      setIsPlaying(false)
      setCurrentTime(0)
    }

    audio.addEventListener('timeupdate', handleTimeUpdate)
    audio.addEventListener('durationchange', handleDurationChange)
    audio.addEventListener('ended', handleEnded)

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate)
      audio.removeEventListener('durationchange', handleDurationChange)
      audio.removeEventListener('ended', handleEnded)
    }
  }, [])

  const fetchData = async () => {
    try {
      setIsLoading(true)
      setError(null)

      const [playlistsRes, tracksRes] = await Promise.all([
        fetch('/api/playlists'),
        fetch('/api/tracks')
      ])

      if (!playlistsRes.ok || !tracksRes.ok) {
        throw new Error('Failed to fetch data')
      }

      const playlistsData = await playlistsRes.json()
      const tracksData = await tracksRes.json()

      setPlaylists(playlistsData)
      setTracks(tracksData)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  const handlePlaylistView = async (playlistId: number) => {
    try {
      const res = await fetch(`/api/playlists/${playlistId}/view`, {
        method: 'POST',
      })

      if (res.ok) {
        const updatedPlaylist = await res.json()
        setPlaylists(prev =>
          prev.map(p => p.id === playlistId ? updatedPlaylist : p)
        )
      }
    } catch (error) {
      console.error('Failed to increment playlist view:', error)
    }
  }

  const handleTrackPlay = async (track: Track) => {
    // If no audio URL, just increment play count
    if (!track.audioUrl) {
      try {
        const res = await fetch(`/api/tracks/${track.id}/play`, {
          method: 'POST',
        })

        if (res.ok) {
          const updatedTrack = await res.json()
          setTracks(prev =>
            prev.map(t => t.id === track.id ? updatedTrack : t)
          )
        }
      } catch (error) {
        console.error('Failed to increment track play:', error)
      }
      return
    }

    // If clicking on currently playing track, toggle play/pause
    if (currentTrack?.id === track.id) {
      if (isPlaying) {
        audioRef.current?.pause()
        setIsPlaying(false)
      } else {
        audioRef.current?.play()
        setIsPlaying(true)
      }
      return
    }

    // Play new track
    setCurrentTrack(track)
    setIsPlaying(true)
    
    // Increment play count
    try {
      const res = await fetch(`/api/tracks/${track.id}/play`, {
        method: 'POST',
      })

      if (res.ok) {
        const updatedTrack = await res.json()
        setTracks(prev =>
          prev.map(t => t.id === track.id ? updatedTrack : t)
        )
      }
    } catch (error) {
      console.error('Failed to increment track play:', error)
    }
  }

  const handleTrackLike = async (trackId: number) => {
    try {
      const res = await fetch(`/api/tracks/${trackId}/like`, {
        method: 'POST',
      })

      if (res.ok) {
        const updatedTrack = await res.json()
        setTracks(prev =>
          prev.map(t => t.id === trackId ? updatedTrack : t)
        )
        
        // Toggle liked state for visual feedback
        setLikedTracks(prev => {
          const newSet = new Set(prev)
          if (newSet.has(trackId)) {
            newSet.delete(trackId)
          } else {
            newSet.add(trackId)
          }
          return newSet
        })
      }
    } catch (error) {
      console.error('Failed to like track:', error)
    }
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value)
    setCurrentTime(newTime)
    if (audioRef.current) {
      audioRef.current.currentTime = newTime
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
    setIsMuted(newVolume === 0)
  }

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = volume
        setIsMuted(false)
      } else {
        audioRef.current.volume = 0
        setIsMuted(true)
      }
    }
  }

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00'
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  // Update audio source when current track changes
  useEffect(() => {
    if (currentTrack?.audioUrl && audioRef.current) {
      audioRef.current.src = currentTrack.audioUrl
      audioRef.current.play()
    }
  }, [currentTrack])

  if (isLoading) {
    return (
      <div className="min-h-screen p-8 lg:p-16 lg:pl-32 flex items-center justify-center">
        <div className="text-center space-y-4">
          <Music className="w-16 h-16 text-white/50 mx-auto animate-pulse" />
          <p className="text-xl text-white/70" style={{ fontFamily: 'Inter, sans-serif' }}>
            Loading music...
          </p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen p-8 lg:p-16 lg:pl-32 flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-xl text-white/70" style={{ fontFamily: 'Inter, sans-serif' }}>
            Error: {error}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={fetchData}
            className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-[12px] text-white font-medium transition-colors"
            style={{ fontFamily: 'Inter, sans-serif' }}>
            Retry
          </motion.button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-8 lg:p-16 lg:pl-32 pb-32">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"
        />
      </div>

      {/* Hidden audio element */}
      <audio ref={audioRef} />

      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Music className="w-12 h-12 text-white/80" />
            <h1 className="text-5xl lg:text-6xl font-bold text-white" style={{ fontFamily: 'Inter, sans-serif' }}>Music</h1>
          </div>
          <p className="text-xl text-white/70" style={{ fontFamily: 'Inter, sans-serif' }}>
            My curated playlists for design, focus, and creativity
          </p>
        </motion.div>

        {/* Playlists Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-white" style={{ fontFamily: 'Inter, sans-serif' }}>Playlists</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {playlists.map((playlist, index) => (
              <motion.div
                key={playlist.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-[24px] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer group">
                
                {/* Playlist Icon */}
                <div className="w-full aspect-square rounded-[16px] bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
                  <Music className="w-16 h-16 text-white/70" />
                </div>

                {/* Playlist Info */}
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-white/90 transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {playlist.name}
                </h3>
                <p className="text-sm text-white/60 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {playlist.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-white/50 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <span>{playlist.trackCount} tracks</span>
                  <div className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    <span>{playlist.views}</span>
                  </div>
                </div>

                {/* Play Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handlePlaylistView(playlist.id)}
                  className="w-full mt-4 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-[12px] flex items-center justify-center gap-2 font-medium text-white transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif' }}>
                  <Play className="w-4 h-4" />
                  View Playlist
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Favorite Tracks */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-white" style={{ fontFamily: 'Inter, sans-serif' }}>All Tracks</h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="p-6 rounded-[24px] bg-white/5 border border-white/10">
            
            <div className="space-y-3">
              {tracks.map((track, index) => {
                const isCurrentTrack = currentTrack?.id === track.id
                const isTrackPlaying = isCurrentTrack && isPlaying
                
                return (
                  <motion.div
                    key={track.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    whileHover={{ x: 4 }}
                    className={`flex items-center justify-between p-4 rounded-[12px] hover:bg-white/5 cursor-pointer group transition-all ${
                      isCurrentTrack ? 'bg-white/10' : ''
                    }`}>
                    
                    <div className="flex items-center gap-4 flex-1">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleTrackPlay(track)}
                        className={`p-2 rounded-full transition-colors ${
                          isCurrentTrack ? 'bg-white/20' : 'bg-white/10 group-hover:bg-white/20'
                        }`}>
                        {isTrackPlaying ? (
                          <Pause className="w-4 h-4 text-white" />
                        ) : (
                          <Play className="w-4 h-4 text-white" />
                        )}
                      </motion.button>
                      <div className="flex-1">
                        <h4 className={`font-medium transition-colors ${
                          isCurrentTrack ? 'text-white' : 'text-white/80 group-hover:text-white/90'
                        }`} style={{ fontFamily: 'Inter, sans-serif' }}>
                          {track.title}
                        </h4>
                        <p className="text-sm text-white/50" style={{ fontFamily: 'Inter, sans-serif' }}>{track.artist}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-sm text-white/50">
                        <Play className="w-3 h-3" />
                        <span style={{ fontFamily: 'Inter, sans-serif' }}>{track.plays}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-white/50">
                        <Clock className="w-4 h-4" />
                        <span style={{ fontFamily: 'Inter, sans-serif' }}>{track.duration}</span>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleTrackLike(track.id)}
                        className={`p-2 transition-colors ${
                          likedTracks.has(track.id)
                            ? 'text-white/90'
                            : 'text-white/50 hover:text-white/80'
                        }`}>
                        <Heart className={`w-5 h-5 ${likedTracks.has(track.id) ? 'fill-current' : ''}`} />
                      </motion.button>
                      <span className="text-sm text-white/50 min-w-[2ch]" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {track.likes}
                      </span>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Fixed Audio Player */}
      {currentTrack && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/10 p-4 z-50">
          <div className="max-w-6xl mx-auto">
            {/* Track Info & Controls */}
            <div className="flex items-center gap-6 mb-3">
              {/* Track Info */}
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <div className="w-12 h-12 rounded-[8px] bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Music className="w-6 h-6 text-white/70" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-white truncate" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {currentTrack.title}
                  </h4>
                  <p className="text-sm text-white/60 truncate" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {currentTrack.artist}
                  </p>
                </div>
              </div>

              {/* Play/Pause Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  if (isPlaying) {
                    audioRef.current?.pause()
                    setIsPlaying(false)
                  } else {
                    audioRef.current?.play()
                    setIsPlaying(true)
                  }
                }}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors flex-shrink-0">
                {isPlaying ? (
                  <Pause className="w-6 h-6 text-white" />
                ) : (
                  <Play className="w-6 h-6 text-white" />
                )}
              </motion.button>

              {/* Volume Control */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleMute}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors">
                  {isMuted ? (
                    <VolumeX className="w-5 h-5 text-white/70" />
                  ) : (
                    <Volume2 className="w-5 h-5 text-white/70" />
                  )}
                </motion.button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-24 h-1 bg-white/20 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
                />
              </div>
            </div>

            {/* Progress Bar */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-white/50 font-mono w-10 text-right" style={{ fontFamily: 'Inter, sans-serif' }}>
                {formatTime(currentTime)}
              </span>
              <input
                type="range"
                min="0"
                max={duration || 0}
                step="0.1"
                value={currentTime}
                onChange={handleSeek}
                className="flex-1 h-1 bg-white/20 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
              />
              <span className="text-xs text-white/50 font-mono w-10" style={{ fontFamily: 'Inter, sans-serif' }}>
                {formatTime(duration)}
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}