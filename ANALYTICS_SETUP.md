# Analytics Setup Guide

This project includes Google Analytics 4 (GA4) integration for free website analytics tracking.

## Setup Instructions

### 1. Create a Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click "Start measuring"
4. Create a new account (use "Benjamin Freeman Portfolio" or similar)
5. Create a new property (use your website domain)
6. Select "Web" as the platform
7. Enter your website URL: `https://benfiscool.github.io`

### 2. Get Your Measurement ID

1. In Google Analytics, go to **Admin** (gear icon)
2. Under "Property" column, click **Data Streams**
3. Click on your web stream
4. Copy the **Measurement ID** (format: `G-XXXXXXXXXX`)

### 3. Configure Your Environment

1. Create a new file called `.env.local` in your project root
2. Add your Measurement ID:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
   (Replace `G-XXXXXXXXXX` with your actual Measurement ID)

### 4. Deploy and Verify

1. Deploy your website to production (GitHub Pages)
2. Visit your live site and navigate through pages
3. In Google Analytics, go to **Reports** > **Realtime** to see live data
4. Data may take 24-48 hours to appear in standard reports

## What Gets Tracked

### Automatic Tracking
- Page views on all pages
- User sessions and engagement
- Geographic location (country/city)
- Device and browser information
- Traffic sources (direct, social, search, etc.)

### Custom Events Available
- Blog post views with post ID and title
- Video plays in blog posts
- Social link clicks (LinkedIn, GitHub, Email)
- Resume download tracking
- Project interactions
- Scroll depth tracking

## Privacy Compliance

- Analytics only loads in production (not during development)
- No personally identifiable information is collected
- Users can opt-out using browser settings
- Complies with GDPR and privacy best practices

## Analytics Dashboard Features

Once set up, you'll be able to see:

1. **Real-time visitors** - Who's on your site right now
2. **Popular content** - Which blog posts get the most views
3. **Traffic sources** - How people find your site
4. **User demographics** - Age, interests, location of visitors
5. **Site performance** - Page load times and user engagement
6. **Conversion tracking** - Resume downloads, contact clicks

## Troubleshooting

- **No data showing**: Wait 24-48 hours after setup
- **Development mode**: Analytics won't load on localhost
- **Measurement ID errors**: Double-check the ID format and environment variable

## Cost

Google Analytics 4 is completely **FREE** with no limits for most websites. No credit card required.