#!/bin/bash

# Analytics Setup Script for Benjamin Freeman Portfolio

echo "🚀 Setting up Google Analytics for your portfolio..."
echo ""

# Check if .env.local exists
if [ -f ".env.local" ]; then
    echo "✅ .env.local file already exists"
else
    echo "📝 Creating .env.local file..."
    cp .env.local.example .env.local
    echo "✅ Created .env.local from example"
fi

echo ""
echo "📋 Next steps:"
echo "1. Get your Google Analytics Measurement ID from: https://analytics.google.com/"
echo "2. Edit .env.local and replace G-XXXXXXXXXX with your actual Measurement ID"
echo "3. Run 'npm run build' to build for production"
echo "4. Deploy to GitHub Pages"
echo ""
echo "📖 For detailed setup instructions, see: ANALYTICS_SETUP.md"
echo ""
echo "🎉 Analytics integration is ready! Your site will track:"
echo "   • Page views and user sessions"
echo "   • Blog post reads and video plays"
echo "   • Social media clicks (LinkedIn, Email)"
echo "   • Resume downloads"
echo "   • User engagement metrics"
echo ""