import { useAnalytics } from '@/components/Analytics'

// Pre-defined analytics events for your portfolio
export const AnalyticsEvents = {
  // Navigation events
  BLOG_POST_VIEW: 'blog_post_view',
  ABOUT_PAGE_VIEW: 'about_page_view',
  RESUME_PAGE_VIEW: 'resume_page_view',
  COURSES_PAGE_VIEW: 'courses_page_view',
  
  // Blog interactions
  BLOG_POST_READ: 'blog_post_read',
  BLOG_VIDEO_PLAY: 'blog_video_play',
  BLOG_IMAGE_VIEW: 'blog_image_view',
  
  // Contact/Social interactions
  EMAIL_CLICK: 'email_click',
  LINKEDIN_CLICK: 'linkedin_click',
  GITHUB_CLICK: 'github_click',
  RESUME_DOWNLOAD: 'resume_download',
  
  // Project interactions
  PROJECT_VIEW: 'project_view',
  PROJECT_EXTERNAL_LINK: 'project_external_link',
  
  // General engagement
  SCROLL_DEPTH: 'scroll_depth',
  TIME_ON_PAGE: 'time_on_page',
  SEARCH_USAGE: 'search_usage',
} as const

// Custom hook with pre-defined tracking functions
export const usePortfolioAnalytics = () => {
  const { trackEvent, trackPageView } = useAnalytics()

  return {
    trackPageView,
    
    // Blog tracking
    trackBlogPostView: (postId: string, postTitle: string) => {
      trackEvent(AnalyticsEvents.BLOG_POST_VIEW, {
        post_id: postId,
        post_title: postTitle,
      })
    },
    
    trackBlogVideoPlay: (postId: string, videoName: string) => {
      trackEvent(AnalyticsEvents.BLOG_VIDEO_PLAY, {
        post_id: postId,
        video_name: videoName,
      })
    },
    
    // Contact tracking
    trackEmailClick: () => {
      trackEvent(AnalyticsEvents.EMAIL_CLICK)
    },
    
    trackLinkedInClick: () => {
      trackEvent(AnalyticsEvents.LINKEDIN_CLICK)
    },
    
    trackGitHubClick: () => {
      trackEvent(AnalyticsEvents.GITHUB_CLICK)
    },
    
    trackResumeDownload: () => {
      trackEvent(AnalyticsEvents.RESUME_DOWNLOAD)
    },
    
    // Project tracking
    trackProjectView: (projectName: string) => {
      trackEvent(AnalyticsEvents.PROJECT_VIEW, {
        project_name: projectName,
      })
    },
    
    // Engagement tracking
    trackScrollDepth: (percentage: number) => {
      trackEvent(AnalyticsEvents.SCROLL_DEPTH, {
        scroll_percentage: percentage,
      })
    },
    
    // Custom event tracking
    trackCustomEvent: (eventName: string, parameters?: Record<string, any>) => {
      trackEvent(eventName, parameters)
    },
  }
}