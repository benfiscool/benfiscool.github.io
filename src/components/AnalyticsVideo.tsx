'use client'

import { usePortfolioAnalytics } from '@/lib/analytics'

interface AnalyticsVideoProps {
  src: string
  postId: string
  videoName: string
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

export function AnalyticsVideo({ 
  src, 
  postId, 
  videoName, 
  className = "w-full rounded-lg shadow-lg", 
  style,
  children 
}: AnalyticsVideoProps) {
  const { trackBlogVideoPlay } = usePortfolioAnalytics()

  const handlePlay = () => {
    trackBlogVideoPlay(postId, videoName)
  }

  return (
    <video 
      controls 
      className={className}
      style={style}
      onPlay={handlePlay}
    >
      <source src={src} type="video/mp4" />
      {children || "Your browser does not support the video tag."}
    </video>
  )
}